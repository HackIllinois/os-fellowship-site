// Modified from https://github.com/buzzfeed/libgif-js
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-use-before-define */

/*
  SuperGif

  Example usage:

    <img src="./example1_preview.gif" rel:animated_src="./example1.gif" width="360" height="360" rel:auto_play="1" />

    <script type="text/javascript">
      $$('img').each(function (img_tag) {
        if (/.*\.gif/.test(img_tag.src)) {
          var rub = new SuperGif({ gif: img_tag } );
          rub.load();
        }
      });
    </script>

  Image tag attributes:

    rel:animated_src -  If this url is specified, it's loaded into the player instead of src.
              This allows a preview frame to be shown until animated gif data is streamed into the canvas

    rel:auto_play -    Defaults to 1 if not specified. If set to zero, a call to the play() method is needed

  Constructor options args

    gif         Required. The DOM element of an img tag.
    loop_mode      Optional. Setting this to false will force disable looping of the gif.
    auto_play       Optional. Same as the rel:auto_play attribute above, this arg overrides the img tag info.
    max_width      Optional. Scale images over max_width down to max_width. Helpful with mobile.
    on_end        Optional. Add a callback for when the gif reaches the end of a single loop (one iteration). The first argument passed will be the gif HTMLElement.
    loop_delay      Optional. The amount of time to pause (in ms) after each single loop (iteration).
    draw_while_loading  Optional. Determines whether the gif will be drawn to the canvas whilst it is loaded.
    show_progress_bar  Optional. Only applies when draw_while_loading is set to true.

  Instance methods

    // loading
    load( callback )    Loads the gif specified by the src or rel:animated_src sttributie of the img tag into a canvas element and then calls callback if one is passed
    load_url( src, callback )  Loads the gif file specified in the src argument into a canvas element and then calls callback if one is passed

    // play controls
    play -        Start playing the gif
    pause -        Stop playing the gif
    move_to(i) -    Move to frame i of the gif
    move_relative(i) -  Move i frames ahead (or behind if i < 0)

    // getters
    get_canvas      The canvas element that the gif is playing in. Handy for assigning event handlers to.
    get_playing      Whether or not the gif is currently playing
    get_loading      Whether or not the gif has finished loading/parsing
    get_auto_play    Whether or not the gif is set to play automatically
    get_length      The number of frames in the gif
    get_current_frame  The index of the currently displayed frame of the gif

    For additional customization (viewport inside iframe) these params may be passed:
    c_w, c_h - width and height of canvas
    vp_t, vp_l, vp_ w, vp_h - top, left, width and height of the viewport

    A bonus: few articles to understand what is going on
      http://enthusiasms.org/post/16976438906
      http://www.matthewflickinger.com/lab/whatsinagif/bits_and_bytes.asp
      http://humpy77.deviantart.com/journal/Frame-Delay-Times-for-Animated-GIFs-214150546

*/

type Header = {
  sig: string,
  ver: string,
  width: number,
  height: number,
  colorRes: number,
  sorted: boolean,
  gctSize: number,
  bgColor: number,
  pixelAspectRatio: number,
} & (
  { gctFlag: true, gct: number[][] }
  | { gctFlag: false, gct: undefined }
);

type GCE = {
  reserved: boolean[],
  disposalMethod: number,
  userInput: boolean,
  delayTime: number,
  terminator: number,
} & (
  { transparencyGiven: true, transparencyIndex: number }
  | { transparencyGiven: false, transparencyIndex: undefined }
);

type COM = {
  comment: string,
};

type PTE = {
  ptHeader: number[],
  ptData: string,
};

type NetscapeApp = {
  identifier: 'NETSCAPE',
  authCode: string,
  unknown: number,
  iterations: number,
  terminator: number,
};

type UnknownApp = {
  identifier: string,
  authCode: string,
  appData: string,
};

type App = NetscapeApp | UnknownApp;

type Unknown = {
  data: string,
};

type ZeroToTwoFiftyFive = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 147 | 148 | 149 | 150 | 151 | 152 | 153 | 154 | 155 | 156 | 157 | 158 | 159 | 160 | 161 | 162 | 163 | 164 | 165 | 166 | 167 | 168 | 169 | 170 | 171 | 172 | 173 | 174 | 175 | 176 | 177 | 178 | 179 | 180 | 181 | 182 | 183 | 184 | 185 | 186 | 187 | 188 | 189 | 190 | 191 | 192 | 193 | 194 | 195 | 196 | 197 | 198 | 199 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 209 | 210 | 211 | 212 | 213 | 214 | 215 | 216 | 217 | 218 | 219 | 220 | 221 | 222 | 223 | 224 | 225 | 226 | 227 | 228 | 229 | 230 | 231 | 232 | 233 | 234 | 235 | 236 | 237 | 238 | 239 | 240 | 241 | 242 | 243 | 244 | 245 | 246 | 247 | 248 | 249 | 250 | 251 | 252 | 253 | 254 | 255;

type KnownExtBlockLabels = 0xf9 | 0xfe | 0x01 | 0xff;
type ExtBlock =
  { label: 0xf9, extType: 'gce' } & GCE
  | { label: 0xfe, extType: 'com' } & COM
  | { label: 0x01, extType: 'pte' } & PTE
  | { label: 0xff, extType: 'app' } & App
  | { label: Exclude<ZeroToTwoFiftyFive, KnownExtBlockLabels>, extType: 'unknown' } & Unknown;

type ImageBlock = {
  leftPos: number,
  topPos: number,
  width: number,
  height: number,
  interlaced: boolean,
  sorted: boolean,
  reserved: boolean[],
  lctSize: number,
  lzwMinCodeSize: number,
  pixels: number[],
} & (
  { lctFlag: true, lct: number[][] }
  | { lctFlag: false }
);

type ValidSentinels = 33 | 44 | 59; // ascii codes for '!' | ',' | ';'
type Block =
  { sentinel: 33, type: 'ext' } & ExtBlock
  | { sentinel: 44, type: 'img' } & ImageBlock
  | { sentinel: 59, type: 'eof' }
  | { sentinel: Exclude<ZeroToTwoFiftyFive, ValidSentinels> };

type Handler = {
  hdr: (block: Header) => void
  gce: (block: GCE) => void
  com: (block: COM) => void,
  pte: (block: PTE) => void,
  app: {
    [key: string]: (block: App) => void,
  },
  unknown: (block: Unknown) => void,
  img: (block: ImageBlock) => void,
  eof: (block: unknown) => void,
};

type Options = {
  gif: HTMLImageElement,
  loop_mode?: boolean,
  auto_play?: boolean,
  max_width?: number,
  on_end?: (gif: HTMLImageElement) => void,
  loop_delay?: number,
  draw_while_loading?: boolean,
  show_progress_bar?: boolean,
  progressbar_height?: number,
  progressbar_background_color?: string,
  progressbar_foreground_color?: string,
  class_name?: string,

  vp_l: number,
  vp_t: number,
  vp_w: number | null,
  vp_h: number | null,
  c_w: number | null,
  c_h: number | null,
  is_vp?: boolean,
} & (
  { is_vp: true, vp_w: number, vp_h: number }
  | { is_vp: undefined | false, vp_w: number | null, vp_h: number | null }
);

type UserOptions = Partial<Omit<Options, 'is_vp' | 'gif'>> & {
  gif: HTMLImageElement, // so that `gif` is required
};

type FrameOffset = {
  x: number,
  y: number,
};

type Frame = {
  data: ImageData,
  delay: number,
};

// Generic functions
const bitsToNum = (ba: boolean[]) => ba.reduce((s, n) => s * 2 + Number(n), 0);

const byteToBitArr = (bite: number) => {
  const a = [];
  for (let i = 7; i >= 0; i--) {
    a.push(!!(bite & (1 << i)));
  }
  return a;
};

// Stream
/**
 * @constructor
 */
// Make compiler happy.

type StreamType = {
  data: string | Uint8Array,
  len: number,
  pos: number,
  readByte: () => number,
  readBytes: (n: number) => number[],
  read: (n: number) => string,
  readUnsigned: () => number,
};

function Stream(this: StreamType, data: string | Uint8Array) {
  this.data = data;
  this.len = this.data.length;
  this.pos = 0;

  this.readByte = () => {
    if (this.pos >= this.data.length) {
      throw new Error('Attempted to read past end of stream.');
    }
    if (data instanceof Uint8Array) return data[this.pos++];
    return data.charCodeAt(this.pos++) & 0xff;
  };

  this.readBytes = (n) => {
    const bytes = [];
    for (let i = 0; i < n; i++) {
      bytes.push(this.readByte());
    }
    return bytes;
  };

  this.read = (n) => {
    let s = '';
    for (let i = 0; i < n; i++) {
      s += String.fromCharCode(this.readByte());
    }
    return s;
  };

  this.readUnsigned = () => {
    // Little-endian.
    const a = this.readBytes(2);
    return (a[1] << 8) + a[0];
  };
}

const lzwDecode = (minCodeSize: number, data: string) => {
  // TODO: Now that the GIF parser is a bit different, maybe this should get an array of bytes instead of a String?
  let pos = 0; // Maybe this streaming thing should be merged with the Stream?
  const readCode = (size: number) => {
    let code = 0;
    for (let i = 0; i < size; i++) {
      if (data.charCodeAt(pos >> 3) & (1 << (pos & 7))) {
        code |= 1 << i;
      }
      pos++;
    }
    return code;
  };

  const output = [];

  const clearCode = 1 << minCodeSize;
  const eoiCode = clearCode + 1;

  let codeSize = minCodeSize + 1;

  let dict: number[][] = [];

  const clear = () => {
    dict = [];
    codeSize = minCodeSize + 1;
    for (let i = 0; i < clearCode; i++) {
      dict[i] = [i];
    }
    dict[clearCode] = [];
    dict[eoiCode] = null as unknown as number[];
  };

  let code;
  let last;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    last = code as number;
    code = readCode(codeSize);

    if (code === clearCode) {
      clear();
    } else {
      if (code === eoiCode) break;

      if (code < dict.length) {
        if (last !== clearCode) {
          dict.push(dict[last].concat(dict[code][0]));
        }
      } else {
        if (code !== dict.length) throw new Error('Invalid LZW code.');
        dict.push(dict[last].concat(dict[last][0]));
      }
      output.push(...dict[code]);

      if (dict.length === 1 << codeSize && codeSize < 12) {
        // If we're at the last code and codeSize is 12, the next code will be a clearCode, and it'll be 12 bits long.
        codeSize++;
      }
    }
  }

  // I don't know if this is technically an error, but some GIFs do it.
  // if (Math.ceil(pos / 8) !== data.length) throw new Error('Extraneous LZW bytes.');
  return output;
};

// The actual parsing; returns an object with properties.
const parseGIF = (st: StreamType, handler: Handler = {} as Handler) => {
  // LZW (GIF-specific)
  const parseCT = (entries: number) => {
    // Each entry is 3 bytes, for RGB.
    const ct = [];
    for (let i = 0; i < entries; i++) {
      ct.push(st.readBytes(3));
    }
    return ct;
  };

  const readSubBlocks = () => {
    let size;
    let data;
    data = '';
    do {
      size = st.readByte();
      data += st.read(size);
    } while (size !== 0);
    return data;
  };

  const parseHeader = () => {
    const hdr = {} as Header;
    hdr.sig = st.read(3);
    hdr.ver = st.read(3);
    if (hdr.sig !== 'GIF') throw new Error('Not a GIF file.'); // XXX: This should probably be handled more nicely.
    hdr.width = st.readUnsigned();
    hdr.height = st.readUnsigned();

    const bits = byteToBitArr(st.readByte());
    hdr.gctFlag = bits.shift() as boolean;
    hdr.colorRes = bitsToNum(bits.splice(0, 3));
    hdr.sorted = bits.shift() as boolean;
    hdr.gctSize = bitsToNum(bits.splice(0, 3));

    hdr.bgColor = st.readByte();
    hdr.pixelAspectRatio = st.readByte(); // if not 0, aspectRatio = (pixelAspectRatio + 15) / 64
    if (hdr.gctFlag) {
      hdr.gct = parseCT(1 << (hdr.gctSize + 1));
    }
    handler.hdr && handler.hdr(hdr);
  };

  const parseExt = (block: ExtBlock) => {
    const parseGCExt = (block: GCE) => {
      const blockSize = st.readByte(); // Always 4
      const bits = byteToBitArr(st.readByte());
      block.reserved = bits.splice(0, 3); // Reserved; should be 000.
      block.disposalMethod = bitsToNum(bits.splice(0, 3));
      block.userInput = bits.shift() as boolean;
      block.transparencyGiven = bits.shift() as boolean;

      block.delayTime = st.readUnsigned();

      block.transparencyIndex = st.readByte();

      block.terminator = st.readByte();

      handler.gce && handler.gce(block);
    };

    const parseComExt = (block: COM) => {
      block.comment = readSubBlocks();
      handler.com && handler.com(block);
    };

    const parsePTExt = (block: PTE) => {
      // No one *ever* uses this. If you use it, deal with parsing it yourself.
      const blockSize = st.readByte(); // Always 12
      block.ptHeader = st.readBytes(12);
      block.ptData = readSubBlocks();
      handler.pte && handler.pte(block);
    };

    const parseAppExt = (block: App) => {
      const parseNetscapeExt = (block: NetscapeApp) => {
        const blockSize = st.readByte(); // Always 3
        block.unknown = st.readByte(); // ??? Always 1? What is this?
        block.iterations = st.readUnsigned();
        block.terminator = st.readByte();
        handler.app && handler.app.NETSCAPE && handler.app.NETSCAPE(block);
      };

      const parseUnknownAppExt = (block: UnknownApp) => {
        block.appData = readSubBlocks();
        // FIXME: This won't work if a handler wants to match on any identifier.
        handler.app && handler.app[block.identifier] && handler.app[block.identifier](block);
      };

      const blockSize = st.readByte(); // Always 11
      block.identifier = st.read(8);
      block.authCode = st.read(3);
      switch (block.identifier) {
        case 'NETSCAPE':
          parseNetscapeExt(block as NetscapeApp);
          break;
        default:
          parseUnknownAppExt(block as UnknownApp);
          break;
      }
    };

    const parseUnknownExt = (block: Unknown) => {
      block.data = readSubBlocks();
      handler.unknown && handler.unknown(block);
    };

    block.label = st.readByte() as ZeroToTwoFiftyFive;
    switch (block.label) {
      case 0xf9:
        block.extType = 'gce';
        parseGCExt(block);
        break;
      case 0xfe:
        block.extType = 'com';
        parseComExt(block);
        break;
      case 0x01:
        block.extType = 'pte';
        parsePTExt(block);
        break;
      case 0xff:
        block.extType = 'app';
        parseAppExt(block);
        break;
      default:
        block.extType = 'unknown';
        parseUnknownExt(block);
        break;
    }
  };

  const parseImg = (img: ImageBlock) => {
    const deinterlace = (pixels: number[], width: number) => {
      // Of course this defeats the purpose of interlacing. And it's *probably*
      // the least efficient way it's ever been implemented. But nevertheless...
      const newPixels = new Array(pixels.length);
      const rows = pixels.length / width;
      const cpRow = (toRow: number, fromRow: number) => {
        const fromPixels = pixels.slice(fromRow * width, (fromRow + 1) * width);
        newPixels.splice(toRow * width, width, ...fromPixels);
      };

      // See appendix E.
      const offsets = [0, 4, 2, 1];
      const steps = [8, 8, 4, 2];

      let fromRow = 0;
      for (let pass = 0; pass < 4; pass++) {
        for (let toRow = offsets[pass]; toRow < rows; toRow += steps[pass]) {
          cpRow(toRow, fromRow);
          fromRow++;
        }
      }

      return newPixels;
    };

    img.leftPos = st.readUnsigned();
    img.topPos = st.readUnsigned();
    img.width = st.readUnsigned();
    img.height = st.readUnsigned();

    const bits = byteToBitArr(st.readByte());
    img.lctFlag = bits.shift() as boolean;
    img.interlaced = bits.shift() as boolean;
    img.sorted = bits.shift() as boolean;
    img.reserved = bits.splice(0, 2);
    img.lctSize = bitsToNum(bits.splice(0, 3));

    if (img.lctFlag) {
      img.lct = parseCT(1 << (img.lctSize + 1));
    }

    img.lzwMinCodeSize = st.readByte();

    const lzwData = readSubBlocks();

    img.pixels = lzwDecode(img.lzwMinCodeSize, lzwData);

    if (img.interlaced) {
      // Move
      img.pixels = deinterlace(img.pixels, img.width);
    }

    handler.img && handler.img(img);
  };

  const parseBlock = () => {
    const block = {} as Block;
    block.sentinel = st.readByte() as ZeroToTwoFiftyFive;

    switch (block.sentinel) {
      case 33: // '!'
        block.type = 'ext';
        parseExt(block);
        break;
      case 44: // ','
        block.type = 'img';
        parseImg(block);
        break;
      case 59: // ';'
        block.type = 'eof';
        handler.eof && handler.eof(block);
        break;
      default:
        throw new Error(`Unknown block: 0x${block.sentinel.toString(16)}`); // TODO: Pad this with a 0.
    }

    if (block.type !== 'eof') setTimeout(parseBlock, 0);
  };

  const parse = () => {
    parseHeader();
    setTimeout(parseBlock, 0);
  };

  parse();
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const SuperGif = (opts: UserOptions) => {
  const options = {
    // viewport position
    vp_l: 0,
    vp_t: 0,
    vp_w: null,
    vp_h: null,
    // canvas sizes
    c_w: null,
    c_h: null,

    ...opts,
  } as Options;

  if (options.vp_w && options.vp_h) options.is_vp = true;

  let stream: StreamType;
  let hdr: Header;

  let loadError: string | null = null;
  let loading = false;

  let transparency: number | null = null;
  let delay: number | null = null;
  let disposalMethod: number | null = null;
  let disposalRestoreFromIdx: number | null = null;
  let lastDisposalMethod: number | null = null;
  let frame: CanvasRenderingContext2D | null = null;
  let lastImg: ImageBlock | null = null;

  let playing = true;
  const forward = true;

  let ctx_scaled = false;

  let frames: Frame[] = [];
  const frameOffsets: FrameOffset[] = []; // elements have .x and .y properties

  const { gif } = options;
  if (typeof options.auto_play === 'undefined') options.auto_play = !gif.getAttribute('rel:auto_play') || gif.getAttribute('rel:auto_play') === '1';

  const onEndListener = options.on_end ? options.on_end : null;
  const loopDelay = options.loop_delay ? options.loop_delay : 0;
  const overrideLoopMode = options.loop_mode !== undefined ? options.loop_mode : 'auto';
  let drawWhileLoading = options.draw_while_loading !== undefined ? options.draw_while_loading : true;
  const showProgressBar = drawWhileLoading
    ? (options.show_progress_bar !== undefined ? options.show_progress_bar : true)
    : false;
  const progressBarHeight = options.progressbar_height ? options.progressbar_height : 25;
  const progressBarBackgroundColor = options.progressbar_background_color ? options.progressbar_background_color : 'rgba(255,255,255,0.4)';
  const progressBarForegroundColor = options.progressbar_foreground_color ? options.progressbar_foreground_color : 'rgba(255,0,22,.8)';

  const clear = () => {
    transparency = null;
    delay = null;
    lastDisposalMethod = disposalMethod;
    disposalMethod = null;
    frame = null;
  };

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let toolbar: HTMLDivElement;
  let tmpCanvas: HTMLCanvasElement;
  let initialized = false;
  let load_callback: ((gif: HTMLImageElement) => void) | false = false;

  const get_canvas_scale = () => {
    let scale;
    if (options.max_width && hdr && hdr.width > options.max_width) {
      scale = options.max_width / hdr.width;
    } else {
      scale = 1;
    }
    return scale;
  };

  const doText = (text: string) => {
    toolbar.innerHTML = text; // innerText? Escaping? Whatever.
    toolbar.style.visibility = 'visible';
  };

  const setSizes = (w: number, h: number) => {
    canvas.width = w * get_canvas_scale();
    canvas.height = h * get_canvas_scale();
    toolbar.style.minWidth = `${w * get_canvas_scale()}px`;

    tmpCanvas.width = w;
    tmpCanvas.height = h;
    tmpCanvas.style.width = `${w}px`;
    tmpCanvas.style.height = `${h}px`;
    tmpCanvas.getContext('2d')?.setTransform(1, 0, 0, 1, 0, 0);
  };

  const setFrameOffset = (frame: number, offset: FrameOffset) => {
    if (!frameOffsets[frame]) {
      frameOffsets[frame] = offset;
      return;
    }
    if (typeof offset.x !== 'undefined') {
      frameOffsets[frame].x = offset.x;
    }
    if (typeof offset.y !== 'undefined') {
      frameOffsets[frame].y = offset.y;
    }
  };

  const doShowProgress = (pos: number, length: number, draw: boolean) => {
    if (draw && showProgressBar) {
      let height = progressBarHeight;
      let left;
      let mid;
      let top;
      let width;
      if (options.is_vp) {
        if (!ctx_scaled) {
          top = options.vp_t + options.vp_h - height;
          // height = height;
          left = options.vp_l;
          mid = left + (pos / length) * options.vp_w;
          width = canvas.width;
        } else {
          top = (options.vp_t + options.vp_h - height) / get_canvas_scale();
          height /= get_canvas_scale();
          left = options.vp_l / get_canvas_scale();
          mid = left + (pos / length) * (options.vp_w / get_canvas_scale());
          width = canvas.width / get_canvas_scale();
        }
        // some debugging, draw rect around viewport
        // if (false) {
        //   if (!ctx_scaled) {
        //     const l = options.vp_l;
        //     const t = options.vp_t;
        //     const w = options.vp_w;
        //     const h = options.vp_h;
        //   } else {
        //     const l = options.vp_l / get_canvas_scale();
        //     const t = options.vp_t / get_canvas_scale();
        //     const w = options.vp_w / get_canvas_scale();
        //     const h = options.vp_h / get_canvas_scale();
        //   }
        //   ctx.rect(l, t, w, h);
        //   ctx.stroke();
        // }
      } else {
        top = (canvas.height - height) / (ctx_scaled ? get_canvas_scale() : 1);
        mid = ((pos / length) * canvas.width) / (ctx_scaled ? get_canvas_scale() : 1);
        width = canvas.width / (ctx_scaled ? get_canvas_scale() : 1);
        height /= ctx_scaled ? get_canvas_scale() : 1;
      }

      ctx.fillStyle = progressBarBackgroundColor;
      ctx.fillRect(mid, top, width - mid, height);

      ctx.fillStyle = progressBarForegroundColor;
      ctx.fillRect(0, top, mid, height);
    }
  };

  const doLoadError = (originOfError: string) => {
    const drawError = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, options.c_w ? options.c_w : hdr.width, options.c_h ? options.c_h : hdr.height);
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 3;
      ctx.moveTo(0, 0);
      ctx.lineTo(options.c_w ? options.c_w : hdr.width, options.c_h ? options.c_h : hdr.height);
      ctx.moveTo(0, options.c_h ? options.c_h : hdr.height);
      ctx.lineTo(options.c_w ? options.c_w : hdr.width, 0);
      ctx.stroke();
    };

    loadError = originOfError;
    hdr = {
      width: gif.width,
      height: gif.height,
    } as Header; // Fake header.
    frames = [];
    drawError();
  };

  const doHdr = (_hdr: Header) => {
    hdr = _hdr;
    setSizes(hdr.width, hdr.height);
  };

  const pushFrame = () => {
    if (!frame) return;
    frames.push({
      data: frame.getImageData(0, 0, hdr.width, hdr.height),
      delay: delay as number,
    });
    frameOffsets.push({ x: 0, y: 0 });
  };

  const doGCE = (gce: GCE) => {
    pushFrame();
    clear();
    transparency = gce.transparencyGiven ? gce.transparencyIndex : null;
    delay = gce.delayTime;
    disposalMethod = gce.disposalMethod;
    // We don't have much to do with the rest of GCE.
  };

  const doImg = (img: ImageBlock) => {
    if (!frame) frame = tmpCanvas.getContext('2d') as CanvasRenderingContext2D;

    const currIdx = frames.length;

    // ct = color table, gct = global color table
    const ct = img.lctFlag ? img.lct : hdr.gct as number[][]; // TODO: What if neither exists?

    /*
    Disposal method indicates the way in which the graphic is to
    be treated after being displayed.

    Values :    0 - No disposal specified. The decoder is
                    not required to take any action.
                1 - Do not dispose. The graphic is to be left
                    in place.
                2 - Restore to background color. The area used by the
                    graphic must be restored to the background color.
                3 - Restore to previous. The decoder is required to
                    restore the area overwritten by the graphic with
                    what was there prior to rendering the graphic.

                    Importantly, "previous" means the frame state
                    after the last disposal of method 0, 1, or 2.
    */
    if (currIdx > 0 && lastImg) {
      if (lastDisposalMethod === 3) {
        // Restore to previous
        // If we disposed every frame including first frame up to this point, then we have
        // no composited frame to restore to. In this case, restore to background instead.
        if (disposalRestoreFromIdx !== null) {
          frame.putImageData(frames[disposalRestoreFromIdx].data, 0, 0);
        } else {
          frame.clearRect(lastImg.leftPos, lastImg.topPos, lastImg.width, lastImg.height);
        }
      } else {
        disposalRestoreFromIdx = currIdx - 1;
      }

      if (lastDisposalMethod === 2) {
        // Restore to background color
        // Browser implementations historically restore to transparent; we do the same.
        // http://www.wizards-toolkit.org/discourse-server/viewtopic.php?f=1&t=21172#p86079
        frame.clearRect(lastImg.leftPos, lastImg.topPos, lastImg.width, lastImg.height);
      }
    }
    // else, Undefined/Do not dispose.
    // frame contains final pixel data from the last frame; do nothing

    // Get existing pixels for img region after applying disposal method
    const imgData = frame.getImageData(img.leftPos, img.topPos, img.width, img.height);

    // apply color table colors
    img.pixels.forEach((pixel, i) => {
      // imgData.data === [R,G,B,A,R,G,B,A,...]
      if (pixel !== transparency) {
        const [r, g, b] = ct[pixel];
        imgData.data[i * 4 + 0] = r;
        imgData.data[i * 4 + 1] = g;
        imgData.data[i * 4 + 2] = b;
        imgData.data[i * 4 + 3] = 255; // Opaque.
      }
    });

    frame.putImageData(imgData, img.leftPos, img.topPos);

    if (!ctx_scaled) {
      ctx.scale(get_canvas_scale(), get_canvas_scale());
      ctx_scaled = true;
    }

    // We could use the on-page canvas directly, except that we draw a progress
    // bar for each image chunk (not just the final image).
    if (drawWhileLoading) {
      ctx.drawImage(tmpCanvas, 0, 0);
      drawWhileLoading = options.auto_play as boolean;
    }

    lastImg = img;
  };

  const player = (() => {
    let i = -1;
    let iterationCount = 0;

    const showingInfo = false;
    const pinned = false;

    /**
     * Gets the index of the frame "up next".
     * @returns {number}
     */
    const getNextFrameNo = () => {
      const delta = forward ? 1 : -1;
      return (i + delta + frames.length) % frames.length;
    };

    const putFrame = () => {
      i = parseInt(String(i), 10);

      if (i > frames.length - 1) {
        i = 0;
      }

      if (i < 0) {
        i = 0;
      }

      const offset = frameOffsets[i];

      tmpCanvas.getContext('2d')?.putImageData(frames[i].data, offset.x, offset.y);
      ctx.globalCompositeOperation = 'copy';
      ctx.drawImage(tmpCanvas, 0, 0);
    };

    const stepFrame = (amount: number) => {
      // XXX: Name is confusing.
      i += amount;

      putFrame();
    };

    const step = (() => {
      let stepping = false;

      const completeLoop = () => {
        if (onEndListener !== null) onEndListener(gif);
        iterationCount++;

        if (overrideLoopMode !== false || iterationCount < 0) {
          doStep();
        } else {
          stepping = false;
          playing = false;
        }
      };

      let doStep = () => {
        stepping = playing;
        if (!stepping) return;

        stepFrame(1);
        let delay = frames[i].delay * 10;
        if (!delay) delay = 100; // FIXME: Should this even default at all? What should it be?

        const nextFrameNo = getNextFrameNo();
        if (nextFrameNo === 0) {
          delay += loopDelay as number;
          setTimeout(completeLoop, delay);
        } else {
          setTimeout(doStep, delay);
        }
      };

      return () => {
        if (!stepping) setTimeout(doStep, 0);
      };
    })();

    const play = () => {
      playing = true;
      step();
    };

    const pause = () => {
      playing = false;
    };

    return {
      init() {
        if (loadError) return;

        if (!(options.c_w && options.c_h)) {
          ctx.scale(get_canvas_scale(), get_canvas_scale());
        }

        if (options.auto_play) {
          step();
        } else {
          i = 0;
          putFrame();
        }
      },
      step,
      play,
      pause,
      playing,
      move_relative: stepFrame,
      current_frame() {
        return i;
      },
      length() {
        return frames.length;
      },
      move_to(frame_idx: number) {
        i = frame_idx;
        putFrame();
      },
    };
  })();

  const doDecodeProgress = (draw: boolean) => {
    doShowProgress(stream.pos, stream.data.length, draw);
  };

  const doNothing = () => {};
  /**
   * @param{boolean=} draw Whether to draw progress bar or not; this is not idempotent because of translucency.
   *                       Note that this means that the text will be unsynchronized with the progress bar on non-frames;
   *                       but those are typically so small (GCE etc.) that it doesn't really matter. TODO: Do this properly.
   */
  const withProgress = <T>(fn: (hdr: T) => void, draw = false) => (block: T) => {
    fn(block);
    doDecodeProgress(draw);
  };

  const handler: Handler = {
    hdr: withProgress(doHdr),
    gce: withProgress(doGCE),
    com: withProgress(doNothing),
    pte: () => {},
    // I guess that's all for now.
    app: {
      // TODO: Is there much point in actually supporting iterations?
      NETSCAPE: withProgress(doNothing),
    },
    unknown: () => {},
    img: withProgress(doImg, true),
    eof(block) {
      // toolbar.style.display = '';
      pushFrame();
      doDecodeProgress(false);
      if (!(options.c_w && options.c_h)) {
        canvas.width = hdr.width * get_canvas_scale();
        canvas.height = hdr.height * get_canvas_scale();
      }
      player.init();
      loading = false;
      if (load_callback) {
        load_callback(gif);
      }
    },
  };

  // XXX: There's probably a better way to handle catching exceptions when
  // callbacks are involved.
  const doParse = () => {
    try {
      parseGIF(stream, handler);
    } catch (err) {
      doLoadError('parse');
    }
  };

  const init = () => {
    const parent = gif.parentNode;

    const div = document.createElement('div');
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    toolbar = document.createElement('div');

    tmpCanvas = document.createElement('canvas');

    canvas.width = gif.width;
    div.style.width = `${gif.width}px`;

    canvas.height = gif.height;
    div.style.height = `${gif.height}px`;

    toolbar.style.minWidth = `${gif.width}px`;

    if (opts.class_name) {
      canvas.className = opts.class_name;
    }

    div.className = 'jsgif';
    toolbar.className = 'jsgif_toolbar';
    div.appendChild(canvas);
    div.appendChild(toolbar);

    parent?.insertBefore(div, gif);
    // parent?.removeChild(gif);

    if (options.c_w && options.c_h) setSizes(options.c_w, options.c_h);
    initialized = true;
  };

  const load_setup = (callback?: (gif: HTMLImageElement) => void) => {
    if (loading) return false;
    if (callback) load_callback = callback;
    else load_callback = false;

    loading = true;
    frames = [];
    clear();
    disposalRestoreFromIdx = null;
    lastDisposalMethod = null;
    frame = null;
    lastImg = null;

    return true;
  };

  return {
    // play controls
    play: player.play,
    pause: player.pause,
    move_relative: player.move_relative,
    move_to: player.move_to,

    // getters for instance vars
    get_playing() {
      return playing;
    },
    get_canvas() {
      return canvas;
    },
    get_canvas_scale() {
      return get_canvas_scale();
    },
    get_loading() {
      return loading;
    },
    get_auto_play() {
      return options.auto_play;
    },
    get_length() {
      return player.length();
    },
    get_current_frame() {
      return player.current_frame();
    },
    load_url(src: string, callback: (gif: HTMLImageElement) => void) {
      if (!load_setup(callback)) return;

      const h = new XMLHttpRequest();
      // new browsers (XMLHttpRequest2-compliant)
      h.open('GET', src, true);

      if ('overrideMimeType' in h) {
        h.overrideMimeType('text/plain; charset=x-user-defined');
      }

      h.onloadstart = () => {
        // Wait until connection is opened to replace the gif element with a canvas to avoid a blank img
        if (!initialized) init();
      };
      h.onload = function (e) {
        if (this.status !== 200) {
          doLoadError('xhr - response');
        }
        let data = this.response;
        if (data.toString().indexOf('ArrayBuffer') > 0) {
          data = new Uint8Array(data);
        }

        stream = new (Stream as any)(data); // eslint-disable-line @typescript-eslint/no-explicit-any
        setTimeout(doParse, 0);
      };
      h.onprogress = ({ lengthComputable, loaded, total }) => {
        if (lengthComputable) doShowProgress(loaded, total, true);
      };
      h.onerror = () => {
        doLoadError('xhr');
      };
      h.send();
    },
    load(callback: (gif: HTMLImageElement) => void) {
      this.load_url(gif.getAttribute('rel:animated_src') || gif.src, callback);
    },
    load_raw(arr: string | Uint8Array, callback: (gif: HTMLImageElement) => void) {
      if (!load_setup(callback)) return;
      if (!initialized) init();
      stream = new (Stream as any)(arr); // eslint-disable-line @typescript-eslint/no-explicit-any
      setTimeout(doParse, 0);
    },
    set_frame_offset: setFrameOffset,
  };
};

export default SuperGif;
