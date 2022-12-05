import Cursor from '../components/cursor';

export const createCurosr = () => {
    return new Cursor({
        container: 'body',
        className: 'pt-cursor',
        overwrite: true,
        speed: 0.4,
        skewingDelta: 0.001,
        skewingDeltaMax: 0.15,
        skewingIcon: 3,
        skewingMedia: 2,
        skewingText: 2,
        skewing: 4,
        innerClassName: 'pt-cursor-inner',
        mediaClassName: 'pt-cursor-media',
        mediaBoxClassName: 'pt-media-box',
        mediaState: '-media',
        hideMediaTimeout: 300,
        textClassName: 'pt-cursor-text',
        textState: '-text',
        hideTimeout: 300,
        showTimeout: 20,
        hiddenState: '-hidden',
        activeState: '-active',
        iconState: '-icon',
        iconSvgClassName: 'pt-svgsprite',
        iconSvgNamePrefix: '-',
        iconSvgSrc: '/assets/img/sprites/svgsprites.svg',
        visible: true,
        hideOnLeave: true,
        dataAttr: 'cursor',
        stateDetection: { '-pointer': 'a,button', '-hidden': 'iframe' },
    });
};
