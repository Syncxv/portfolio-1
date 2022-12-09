export function whichTransitionEvent() {
    var t;
    var el = document.createElement('fakeelement');
    var transitions: { [key: string]: string } = {
        transition: 'transitionend',
        OTransition: 'oTransitionEnd',
        MozTransition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd',
    };

    for (t in transitions) {
        if (el.style[t as any] !== undefined) {
            return transitions[t];
        }
    }
}
