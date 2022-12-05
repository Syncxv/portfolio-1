import gsap from 'gsap';

export interface ICursorOptions {
    className: string;
    container: string;
    overwrite: boolean;
    visible: boolean;
    hideOnLeave: boolean;
    speed: number;
    skewingDelta: number;
    skewingDeltaMax: number;
    skewingMedia: number;
    skewingIcon: number;
    skewingText: number;
    skewing: number;
    innerClassName: string;
    textClassName: string;
    mediaClassName: string;
    mediaBoxClassName: string;
    mediaState: string;
    hideMediaTimeout: number;
    hiddenState: string;
    activeState: string;
    iconState: string;
    iconSvgClassName: string;
    iconSvgNamePrefix: string;
    iconSvgSrc: string;
    hideTimeout: number;
    showTimeout: number;
    textState: string;
    stateDetection: { [key: string]: string; '-pointer': 'a,button'; '-hidden': 'iframe' };
    dataAttr: 'cursor';
}
interface AllEvents {
    mousemove?: (e: MouseEvent) => any;
    mouseup?: (e: MouseEvent) => any;
    mouseleave?: (e: MouseEvent) => any;
    mouseenter?: (e: MouseEvent) => any;
    mousedown?: (e: MouseEvent) => any;
    mouseout?: (e: MouseEvent) => any;
    mouseover?: (e: MouseEvent) => any;
    mousemoveOnce?: (e: MouseEvent) => any;
}
interface Setter {
    [key: string]: any;
}
export default class Cursor {
    el!: HTMLDivElement;
    container: HTMLElement;
    inner!: HTMLDivElement;
    text!: HTMLDivElement;
    media!: HTMLDivElement;
    mediaBox!: HTMLDivElement;
    visibleInt!: NodeJS.Timeout;
    options: ICursorOptions;
    setter!: Setter;
    event!: AllEvents;
    ticker: any;
    skewing = 4;
    initalPos = [-window.innerWidth, -window.innerHeight];
    mediaImg?: HTMLImageElement;
    mediaVideo?: HTMLVideoElement;
    mediaInt!: NodeJS.Timeout;
    pos = {
        x: this.initalPos[0],
        y: this.initalPos[1],
    };
    vel = {
        x: 0,
        y: 0,
    };
    visible = true;
    constructor(opt: ICursorOptions) {
        this.options = opt;

        this.container = document.querySelector(this.options.container)!;
        this.init();
        this.render(true);
        this.ticker = this.render.bind(this, false);
        gsap.ticker.add(this.ticker);
    }
    init() {
        this.el || this.create();
        this.event = {};
        this.createSetter();
        this.bind();
    }
    bind() {
        this.event.mouseleave = () => {
            return this.hide();
        };
        this.event.mouseenter = () => {
            return this.show();
        };
        this.event.mousedown = () => {
            return this.addState(this.options.activeState);
        };
        this.event.mouseup = () => {
            return this.removeState(this.options.activeState);
        };
        this.event.mousemoveOnce = () => {
            return this.show();
        };
        this.event.mousemove = (e) => {
            gsap.to(this.pos, {
                x: e.clientX,
                y: e.clientY,
                overwrite: this.options.overwrite,
                ease: 'expo.out' /*this.options.ease*/,
                duration: this.visible ? this.options.speed : 0,
                onUpdate: () => {
                    this.vel = {
                        x: e.clientX - this.pos.x,
                        y: e.clientY - this.pos.y,
                    };
                },
            });
        };
        let _this = this;
        this.event.mouseout = function (e) {
            for (
                let elem = e.target as HTMLElement;
                elem && elem !== _this.container && (!e.relatedTarget || !elem.contains(e.relatedTarget as HTMLElement));
                elem = elem.parentNode as HTMLElement
            ) {
                for (let detections in _this.options.stateDetection)
                    elem.matches(_this.options.stateDetection[detections]) && _this.removeState(detections);
                if (_this.options.dataAttr) {
                    let r = _this.getFromDataset(elem);
                    r.state && _this.removeState(r.state);
                    r.text && _this.removeText();
                    r.icon && _this.removeIcon();
                    r.img && _this.removeImg();
                    r.video && _this.removeVideo();
                    void 0 !== r.show && _this.hide();
                    // void 0 !== r.stick && _this.removeStick();
                }
            }
        };
        this.event.mouseover = function (e) {
            for (
                let elem = e.target as HTMLElement;
                elem && elem !== _this.container && (!e.relatedTarget || !elem.contains(e.relatedTarget as HTMLElement));
                elem = elem.parentNode as HTMLElement
            ) {
                for (let i in _this.options.stateDetection) elem.matches(_this.options.stateDetection[i]) && _this.addState(i);
                if (_this.options.dataAttr) {
                    let r = _this.getFromDataset(elem);
                    r.state && _this.addState(r.state);
                    r.text && _this.setText(r.text);
                    r.icon && _this.setIcon(r.icon);
                    r.img && _this.setImg(r.img);
                    r.video && _this.setVideo(r.video);
                    void 0 !== r.show && _this.show();
                    // void 0 !== r.stick && _this.setStick(r.stick || elem);
                }
            }
        };
        this.options.hideOnLeave &&
            this.container.addEventListener('mouseleave', this.event.mouseleave, {
                passive: !0,
            }),
            this.options.visible &&
                this.container.addEventListener('mouseenter', this.event.mouseenter, {
                    passive: !0,
                }),
            this.container.addEventListener('mousemove', this.event.mousemove!, { passive: true });
        this.container.addEventListener('mousedown', this.event.mousedown, {
            passive: !0,
        });
        this.container.addEventListener('mouseup', this.event.mouseup, {
            passive: !0,
        });
        this.options.visible &&
            this.container.addEventListener('mousemove', this.event.mousemoveOnce, {
                passive: !0,
                once: !0,
            });
        (this.options.stateDetection || this.options.dataAttr) &&
            (this.container.addEventListener('mouseover', this.event.mouseover, {
                passive: !0,
            }),
            this.container.addEventListener('mouseout', this.event.mouseout, {
                passive: !0,
            }));
    }
    create() {
        this.el = document.createElement('div');
        this.el.className = this.options.className;
        this.inner = document.createElement('div');
        this.inner.className = this.options.innerClassName;
        this.text = document.createElement('div');
        this.text.className = this.options.textClassName;
        this.media = document.createElement('div');
        this.media.className = this.options.mediaClassName;
        this.mediaBox = document.createElement('div');
        this.mediaBox.className = this.options.mediaBoxClassName;
        this.media.appendChild(this.mediaBox);
        this.inner.appendChild(this.media);
        this.inner.appendChild(this.text);
        this.el.appendChild(this.inner);
        this.container.appendChild(this.el);
    }
    createSetter() {
        this.setter = {
            x: gsap.quickSetter(this.el, 'x', 'px'),
            y: gsap.quickSetter(this.el, 'y', 'px'),
            rotation: gsap.quickSetter(this.el, 'rotation', 'deg'),
            scaleX: gsap.quickSetter(this.el, 'scaleX'),
            scaleY: gsap.quickSetter(this.el, 'scaleY'),
            wc: gsap.quickSetter(this.el, 'willChange'),
            inner: {
                rotation: gsap.quickSetter(this.inner, 'rotation', 'deg'),
            },
        };
    }
    render(first: boolean) {
        if (first || (0 !== this.vel.y && 0 !== this.vel.x)) {
            if ((this.setter.wc('transform'), this.setter.x(this.pos.x), this.setter.y(this.pos.y), this.skewing)) {
                let e = Math.sqrt(Math.pow(this.vel.x, 2) + Math.pow(this.vel.y, 2)),
                    n = Math.min(e * this.options.skewingDelta, this.options.skewingDeltaMax) * this.skewing,
                    i = (180 * Math.atan2(this.vel.y, this.vel.x)) / Math.PI;
                this.setter.rotation(i);
                this.setter.scaleX(1 + n);
                this.setter.scaleY(1 - n);
                this.setter.inner.rotation(-i);
            }
        } else {
            this.setter.wc('auto');
        }
    }

    show() {
        clearInterval(this.visibleInt), this.el.classList.remove(this.options.hiddenState);
        this.visibleInt = setTimeout(() => {
            return (this.visible = !0);
        }, this.options.showTimeout);
    }
    hide() {
        clearInterval(this.visibleInt), this.el.classList.add(this.options.hiddenState);
        this.visibleInt = setTimeout(() => {
            return (this.visible = !1);
        }, this.options.hideTimeout);
    }
    toggle(t: boolean) {
        !this.visible || t ? this.show() : this.hide();
    }

    setSkewing(num: number) {
        gsap.to(this, {
            skewing: num,
        });
    }
    removeSkewing() {
        gsap.to(this, {
            skewing: this.options.skewing,
        });
    }
    addState(t: string) {
        let e;
        if (t === this.options.hiddenState) return this.hide();
        (e = this.el.classList).add.apply(e, t.split(' '));
    }

    removeState(t: string) {
        let e;
        if (t === this.options.hiddenState) return this.show();
        (e = this.el.classList).remove.apply(e, t.split(' '));
    }
    setText(t: string) {
        (this.text.innerHTML = t), this.addState(this.options.textState), this.setSkewing(this.options.skewingText);
    }
    removeText() {
        this.removeState(this.options.textState), this.removeSkewing();
    }
    setIcon(name: string, e?: string) {
        if (!e) e = '';
        this.text.innerHTML = `<svg class="${this.options.iconSvgClassName} ${this.options.iconSvgNamePrefix} ${name}" style="${e}>
                <use xlink:href="${this.options.iconSvgSrc}#${name}">
                </use>
            </svg>`;
        this.addState(this.options.iconState), this.setSkewing(this.options.skewingIcon);
    }
    removeIcon() {
        this.removeState(this.options.iconState), this.removeSkewing();
    }
    setMedia(src: HTMLElement) {
        let e = this;
        clearTimeout(this.mediaInt),
            src && ((this.mediaBox.innerHTML = ''), this.mediaBox.appendChild(src)),
            (this.mediaInt = setTimeout(function () {
                return e.addState(e.options.mediaState);
            }, 20)),
            this.setSkewing(this.options.skewingMedia);
    }
    removeMedia() {
        let _this = this;
        clearTimeout(this.mediaInt),
            this.removeState(this.options.mediaState),
            (this.mediaInt = setTimeout(function () {
                return (_this.mediaBox.innerHTML = '');
            }, this.options.hideMediaTimeout)),
            this.removeSkewing();
    }
    setImg(src: string) {
        this.mediaImg || (this.mediaImg = new Image()), this.mediaImg.src !== src && (this.mediaImg.src = src), this.setMedia(this.mediaImg);
    }
    removeImg() {
        this.removeMedia();
    }
    setVideo(src: string) {
        this.mediaVideo ||
            ((this.mediaVideo = document.createElement('video')),
            (this.mediaVideo.muted = !0),
            (this.mediaVideo.loop = !0),
            (this.mediaVideo.autoplay = !0)),
            this.mediaVideo.src !== src && ((this.mediaVideo.src = src), this.mediaVideo.load()),
            this.mediaVideo.play(),
            this.setMedia(this.mediaVideo);
    }
    removeVideo() {
        this.mediaVideo && this.mediaVideo.readyState > 2 && this.mediaVideo.pause(), this.removeMedia();
    }
    getFromDataset(t: HTMLElement) {
        let e = t.dataset;
        return {
            state: e[this.options.dataAttr],
            show: e[this.options.dataAttr + 'Show'],
            text: e[this.options.dataAttr + 'Text'],
            icon: e[this.options.dataAttr + 'Icon'],
            img: e[this.options.dataAttr + 'Img'],
            video: e[this.options.dataAttr + 'Video'],
            stick: e[this.options.dataAttr + 'Stick'],
        };
    }
    destroy() {
        gsap.ticker.remove(this.ticker);
        this.container.removeEventListener('mouseleave', this.event.mouseleave!);
        this.container.removeEventListener('mouseenter', this.event.mouseenter!);
        this.container.removeEventListener('mousedown', this.event.mousedown!);
        this.container.removeEventListener('mouseup', this.event.mouseup!);
        this.container.removeEventListener('mousemove', this.event.mousemove!);
        this.container.removeEventListener('mousemove', this.event.mousemoveOnce!);
        this.container.removeEventListener('mouseover', this.event.mouseover!);
        this.container.removeEventListener('mouseout', this.event.mouseout!);
        this.el &&
            (this.container.removeChild(this.el), ((this.el as any) = null), ((this.mediaImg as any) = null), ((this.mediaVideo as any) = null));
    }
}
