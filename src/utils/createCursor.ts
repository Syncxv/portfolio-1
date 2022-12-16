import Cursor from '../components/cursor';
import { isMobile } from './isMobile';

export const createCurosr = () => {
    if (isMobile()) return null;
    return new Cursor({
        container: 'body',
        className: 'hehe-cursor',
        overwrite: true,
        speed: 0.4,
        skewingDelta: 0.001,
        skewingDeltaMax: 0.15,
        skewingIcon: 3,
        skewingMedia: 2,
        skewingText: 2,
        skewing: 4,
        innerClassName: 'hehe-cursor-inner',
        mediaClassName: 'hehe-cursor-media',
        mediaBoxClassName: 'hehe-media-box',
        mediaState: '-media',
        inverseClassName: '-inverse',
        hideMediaTimeout: 300,
        textClassName: 'hehe-cursor-text',
        textState: '-text',
        hideTimeout: 300,
        showTimeout: 20,
        hiddenState: '-hidden',
        activeState: '-active',
        iconState: '-icon',
        iconSvgClassName: 'hehe-svgsprite',
        iconSvgNamePrefix: '-',
        iconSvgSrc: '/assets/img/sprites/svgsprites.svg',
        visible: true,
        hideOnLeave: true,
        dataAttr: 'cursor',
        stateDetection: { '-pointer': 'a,button', '-hidden': 'iframe' },
    });
};
