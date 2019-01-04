const defaultWordregex = /[a-zA-Z0-9!?:]/;

export class NameFinder {
	private text: string;
	private position: number;

	constructor(text: string, position: number) {
		this.text = text;
		this.position = position;
	}

	get get(): string {
		let firstChar = this.searchWordIndexBackward(this.position);
		let lastChar = this.searchWordIndexForward(this.position);
		return this.text.slice(firstChar, lastChar);
	}

	private searchWordIndexBackward(position: number): number {
		const nextPosition: number = position - 1;
		const value: string = this.text.substring(nextPosition, position);
		if (this.clearedWord(value) === null) {
			return position;
		} else {
			return this.searchWordIndexBackward(nextPosition);
		}
	}

	private searchWordIndexForward(position: number): number {
		const nextPosition: number = position + 1;
		const value: string = this.text.substring(position, nextPosition);
		if (this.clearedWord(value) === null) {
			return position;
		} else {
			return this.searchWordIndexForward(nextPosition);
		}
	}
	private clearedWord(text: string) {
		return text.match(defaultWordregex);
	}
}
