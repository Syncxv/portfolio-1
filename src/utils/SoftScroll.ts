/*!
 * SmoothScrollbar SoftScroll Plugin
 *
 * @version 1.0.2
 * @author Artem Dordzhiev (Draft)
 */

import * as Scrollbar from 'smooth-scrollbar';

class SoftScrollPlugin extends Scrollbar.ScrollbarPlugin {
    transformDelta(delta: { x: number; y: number }, fromEvent: any) {
        const dirX = delta.x > 0 ? 1 : -1;
        const dirY = delta.y > 0 ? 1 : -1;

        if (dirX === this.options.lockX || dirY === this.options.lockY) {
            return { x: 0, y: 0 };
        } else {
            this.options.lockX = null;
            this.options.lockY = null;
        }

        return delta;
    }

    onRender(Data2d: { x: number; y: number }) {
        const { x, y } = Data2d;

        // Up
        if (y < 0 && !this.options.lockY && Math.abs(y) >= this.scrollbar.scrollTop) {
            this.scrollbar.setMomentum(0, -this.scrollbar.scrollTop);
            this.options.lockY = -1;
        }

        // Left
        if (x < 0 && !this.options.lockX && Math.abs(x) >= this.scrollbar.scrollLeft) {
            this.scrollbar.setMomentum(-this.scrollbar.scrollLeft, 0);
            this.options.lockX = -1;
        }

        // Right
        if (x > 0 && !this.options.lockX && Math.abs(x) >= this.scrollbar.limit.x - this.scrollbar.scrollLeft) {
            this.scrollbar.setMomentum(this.scrollbar.limit.x - this.scrollbar.scrollLeft, 0);
            this.options.lockX = 1;
        }

        // Down
        if (y > 0 && !this.options.lockY && Math.abs(y) >= this.scrollbar.limit.y - this.scrollbar.scrollTop) {
            this.scrollbar.setMomentum(0, this.scrollbar.limit.y - this.scrollbar.scrollTop);
            this.options.lockY = 1;
        }

        if (y === 0) this.options.lockY = null;
        if (x === 0) this.options.lockX = null;
    }
}

SoftScrollPlugin.pluginName = 'SoftScroll';

export default SoftScrollPlugin;
