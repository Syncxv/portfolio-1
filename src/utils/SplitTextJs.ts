/**
 * Author: Alexandre Chabeau
 * License: MIT
 * Contact: alexandrechabeau.pro@gmail.com
 * Original repos: https://github.com/saucyspray/split-text-js
 */

interface THehe {
    originalText: string;
    splitted: HTMLElement;
}

export class SplitTextJS {
    hehe: THehe;
    words: NodeListOf<Element>;
    chars: NodeListOf<Element>;
    spaces: NodeListOf<Element>;
    constructor(_target: HTMLElement) {
        this.hehe = {
            originalText: _target.innerText,
            splitted: this.split(_target),
        };
        // this.result.splitted = this.split(_target);
        this.words = this.hehe.splitted.querySelectorAll('.SplitTextJS-wrapper');
        this.chars = this.hehe.splitted.querySelectorAll('.SplitTextJS-char');
        this.spaces = this.hehe.splitted.querySelectorAll('.SplitTextJS-spacer');
    }
    createSpan(_class: string) {
        let span = document.createElement('span');
        span.style.display = 'inline-block';
        span.className = _class;
        return span;
    }
    split(_target: HTMLElement) {
        let containerArray: HTMLSpanElement[] = [];
        const splittedTarget = _target.innerText.split(' ');
        let counter = splittedTarget.length;
        splittedTarget.map((word) => {
            const wrapper = this.createSpan('SplitTextJS-wrapper');
            word.split(/(?!^)/).map((char) => {
                let el = this.createSpan('SplitTextJS-char');
                el.innerText = char;
                wrapper.appendChild(el);
            });
            counter--;
            containerArray.push(wrapper);
            if (counter > 0) {
                let space = this.createSpan('SplitTextJS-char SplitTextJS-spacer');
                space.innerHTML = '&nbsp;';
                containerArray.push(space);
            }
        });
        _target.innerHTML = '';
        containerArray.forEach((child) => {
            _target.appendChild(child);
        });
        return _target;
    }
}
