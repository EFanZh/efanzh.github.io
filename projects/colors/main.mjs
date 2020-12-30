const $ = document.querySelector.bind(document);
const createElement = document.createElement.bind(document);
const colorSpaceRedx = $("#color-space-red-x");
const colorSpaceRedy = $("#color-space-red-y");
const colorSpaceRedY = $("#color-space-red-Y");
const colorSpaceRedX = $("#color-space-red-X");
const colorSpaceRedZ = $("#color-space-red-Z");
const colorSpaceGreenx = $("#color-space-green-x");
const colorSpaceGreeny = $("#color-space-green-y");
const colorSpaceGreenY = $("#color-space-green-Y");
const colorSpaceGreenX = $("#color-space-green-X");
const colorSpaceGreenZ = $("#color-space-green-Z");
const colorSpaceBluex = $("#color-space-blue-x");
const colorSpaceBluey = $("#color-space-blue-y");
const colorSpaceBlueY = $("#color-space-blue-Y");
const colorSpaceBlueX = $("#color-space-blue-X");
const colorSpaceBlueZ = $("#color-space-blue-Z");
const colorSpaceWhitex = $("#color-space-white-x");
const colorSpaceWhitey = $("#color-space-white-y");
const colorSpaceWhiteY = $("#color-space-white-Y");
const colorSpaceWhiteX = $("#color-space-white-X");
const colorSpaceWhiteZ = $("#color-space-white-Z");
const sRgbRed = $("#srgb-red");
const linearsRgbRed = $("#linear-srgb-red");
const cieXYZX = $("#cie-XYZ-X");
const ciexyzx = $("#cie-xyz-x");
const normalizedX = $("#normalized-x");
const sRgbGreen = $("#srgb-green");
const linearsRgbGreen = $("#linear-srgb-green");
const cieXYZY = $("#cie-XYZ-Y");
const ciexyzy = $("#cie-xyz-y");
const normalizedY = $("#normalized-y");
const sRgbBlue = $("#srgb-blue");
const linearsRgbBlue = $("#linear-srgb-blue");
const cieXYZZ = $("#cie-XYZ-Z");
const ciexyzz = $("#cie-xyz-z");
const normalizedZ = $("#normalized-z");

const hueShadesCount = $("#hue-shades-count");
const saturationShadesCount = $("#saturation-shades-count");
const lightnessShadesCount = $("#lightness-shades-count");
const hueShades = $("#hue-shades");
const saturationShades = $("#saturation-shades");
const lightnessShades = $("#lightness-shades");
const baseColor = $("#base-color");
const colorWheelZoom = $("#color-wheel-zoom");
const colorWheel = $("#color-wheel");
const gradientStart = $("#gradient-start");
const gradientEnd = $("#gradient-end");
const gradientCount = $("#gradient-count");
const gradientShades = $("#gradient-shades");

function xyYToXZ(x, y, Y) {
    const scale = Y / y;
    const X = x * scale;

    return [X, scale - (X + Y)];
}

function XYZToxy(X, Y, Z) {
    const total = X + Y + Z;

    return [X / total, Y / total];
}

function XYZToLinearsRgb(X, Y, Z) {
    return [
        3.24096994 * X - 1.53738318 * Y - 0.49861076 * Z,
        -0.96924364 * X + 1.8759675 * Y + 0.04155506 * Z,
        0.05563008 * X - 0.20397696 * Y + 1.05697151 * Z,
    ]
}


function linearsRgbToXYZ(r, g, b) {
    return [
        0.41239080 * r + 0.35758434 * g + 0.18048079 * b,
        0.21263901 * r + 0.71516868 * g + 0.07219232 * b,
        0.01933082 * r + 0.11919478 * g + 0.95053215 * b,
    ];
}

function linearsRgbTosRgb(r, g, b) {
    function gamma(u) {
        return u <= 0.0031308 ? u * 12.92 : Math.pow(u, 1 / 2.4) * 1.055 - 0.055;
    }

    return [gamma(r), gamma(g), gamma(b)]
}

function sRgbToLinearsRgb(r, g, b) {
    function inverse_gamma(u) {
        return u <= 0.04045 ? u / 12.92 : Math.pow((u + 0.055) / 1.055, 2.4);
    }

    return [inverse_gamma(r), inverse_gamma(g), inverse_gamma(b)]
}

function getNormalizeFunctions(rX, rY, rZ, gX, gY, gZ, bX, bY, bZ) {
    const minY = Math.min(rY, gY, bY);
    const scale = minY / (rX * (gZ * bY - gY * bZ) + rY * (gX * bZ - gZ * bX) - rZ * (gX * bY - gY * bX));
    const a00 = ((rY * (gZ - bZ) - rZ * (gY - bY)) / 2 - gY * bZ + gZ * bY) * scale;
    const a01 = ((rX * (bZ - gZ) + rZ * (gX - bX)) / 2 + gX * bZ - gZ * bX) * scale;
    const a02 = ((rX * (gY - bY) - rY * (gX - bX)) / 2 - gX * bY + gY * bX) * scale;
    const k = Math.sqrt(0.75) * scale;
    const a20 = (rY * (gZ + bZ) - rZ * (gY + bY)) * k;
    const a21 = (rZ * (gX + bX) - rX * (gZ + bZ)) * k;
    const a22 = (rX * (gY + bY) - rY * (gX + bX)) * k;
    const base2 = rY + gY + bY;
    const k2 = Math.sqrt(1 / 3) / base2;
    const b00 = (rX * (gY + bY) - rY * (gX + bX)) / base2;
    const b01 = (rX + gX + bX) / base2;
    const b02 = (rX * (bY - gY) + rY * (gX - bX) + (gX * bY - gY * bX) * 2) * k2;
    const b20 = (rZ * (gY + bY) - rY * (gZ + bZ)) / base2;
    const b21 = (rZ + gZ + bZ) / base2;
    const b22 = (rY * (gZ - bZ) + rZ * (bY - gY) - (gY * bZ - gZ * bY) * 2) * k2;

    return [
        (x, y, z) => [(a00 * x + a01 * y + a02 * z) / y, y, (a20 * x + a21 * y + a22 * z) / y],
        (x, y, z) => {
            const unscaledX = x * y / minY;
            const unscaledZ = z * y / minY;

            return [
                b00 * unscaledX + b01 * y + b02 * unscaledZ,
                y,
                b20 * unscaledX + b21 * y + b22 * unscaledZ,
            ];
        },
    ];
}

function normalizedXZToHS(x, z) {
    return [Math.atan2(z, x) / (Math.PI * 2), Math.sqrt(x * x + z * z)]
}

function hSToNormalizedXZ(h, s) {
    const angle = (Math.PI * 2) * h;

    return [s * Math.cos(angle), s * Math.sin(angle)];
}

function parseColor(color) {
    const intColor = parseInt(color.substring(1), 16);

    return [(intColor >> 16) / 255, ((intColor >> 8) & 0xff) / 255, (intColor & 0xff) / 255];
}

function colorToHex(r, g, b) {
    return "#" + ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
}

function floatColorToIntColor(r, g, b) {
    let resultR = Math.round(r * 255);
    let resultG = Math.round(g * 255);
    let resultB = Math.round(b * 255);

    if (resultR < 0 || resultR > 255 || resultG < 0 || resultG > 255 || resultB < 0 || resultB > 255) {
        return null;
    }

    return [resultR, resultG, resultB];
}

function drawCross(context, x, y, length) {
    const offset = length * window.devicePixelRatio / 2;

    context.moveTo(x - offset, y);
    context.lineTo(x + offset, y);
    context.moveTo(x, y - offset);
    context.lineTo(x, y + offset);
}

function createShadeFromLinearsRgb(r, g, b, hightlight) {
    const color = floatColorToIntColor(...linearsRgbTosRgb(r, g, b));
    const shade = createElement("span");

    if (color) {
        const hexColor = colorToHex(...color);

        shade.innerText = hexColor;
        shade.style.background = hexColor;
        shade.style.cursor = "pointer";

        shade.addEventListener("click", () => {
            baseColor.value = hexColor;

            baseColor.dispatchEvent(new Event("input"));
        });
    } else {
        shade.innerText = "Missing";
    }

    shade.style.display = "inline-block";
    shade.style.margin = "0.125em 0.25em";
    shade.style.textAlign = "center";
    shade.style.width = "4em";

    if (hightlight) {
        shade.style.outline = "3px solid darkorange";
    }

    return shade;
}

function createShadeFromXYZ(x, y, z, hightlight) {
    return createShadeFromLinearsRgb(...XYZToLinearsRgb(x, y, z), hightlight);
}

function getShadeStep(p, n) {
    const q = 1 - p;
    const fromZeroStep = p / Math.ceil(p * (n - 1));
    const fromOneStep = q / Math.ceil(q * (n - 1));

    return fromOneStep > fromZeroStep ? [1 - fromOneStep * (n - 1), fromOneStep] : [0, fromZeroStep];
}

// Shades.

function updateShades() {
    const redx = parseFloat(colorSpaceRedx.value);
    const redy = parseFloat(colorSpaceRedy.value);
    const redY = parseFloat(colorSpaceRedY.value);
    const greenx = parseFloat(colorSpaceGreenx.value);
    const greeny = parseFloat(colorSpaceGreeny.value);
    const greenY = parseFloat(colorSpaceGreenY.value);
    const bluex = parseFloat(colorSpaceBluex.value);
    const bluey = parseFloat(colorSpaceBluey.value);
    const blueY = parseFloat(colorSpaceBlueY.value);
    const [redX, redZ] = xyYToXZ(redx, redy, redY);
    const [greenX, greenZ] = xyYToXZ(greenx, greeny, greenY);
    const [blueX, blueZ] = xyYToXZ(bluex, bluey, blueY);
    const whiteX = redX + greenX + blueX;
    const whiteY = redY + greenY + blueY;
    const whiteZ = redZ + greenZ + blueZ;
    const [whitex, whitey] = XYZToxy(whiteX, whiteY, whiteZ);

    colorSpaceRedX.innerText = redX;
    colorSpaceRedZ.innerText = redZ;
    colorSpaceGreenX.innerText = greenX;
    colorSpaceGreenZ.innerText = greenZ;
    colorSpaceBlueX.innerText = blueX;
    colorSpaceBlueZ.innerText = blueZ;
    colorSpaceWhitex.innerText = whitex;
    colorSpaceWhitey.innerText = whitey;
    colorSpaceWhiteY.innerText = whiteY;
    colorSpaceWhiteX.innerText = whiteX;
    colorSpaceWhiteZ.innerText = whiteZ;

    const color = parseColor(baseColor.value);
    const linearColor = sRgbToLinearsRgb(...color);
    const xyzColor = linearsRgbToXYZ(...linearColor);
    const ciexy = XYZToxy(...xyzColor);

    const [normalizeColor, restoreColor] = getNormalizeFunctions(
        redX, redY, redZ, greenX, greenY, greenZ, blueX, blueY, blueZ,
    );

    const normalizedColor = normalizeColor(...xyzColor);

    sRgbRed.innerText = color[0];
    sRgbGreen.innerText = color[1];
    sRgbBlue.innerText = color[2];
    linearsRgbRed.innerText = linearColor[0];
    linearsRgbGreen.innerText = linearColor[1];
    linearsRgbBlue.innerText = linearColor[2];
    cieXYZX.innerText = xyzColor[0];
    cieXYZY.innerText = xyzColor[1];
    cieXYZZ.innerText = xyzColor[2];
    ciexyzx.innerText = ciexy[0];
    ciexyzy.innerText = ciexy[1];
    ciexyzz.innerText = 1 - (ciexy[0] + ciexy[1]);
    normalizedX.innerText = normalizedColor[0];
    normalizedY.innerText = normalizedColor[1];
    normalizedZ.innerText = normalizedColor[2];

    // Color wheel.

    const colorWheelContext = colorWheel.getContext("2d");
    const colorWheelWidth = colorWheel.width;
    const colorWheelHeight = colorWheel.height;
    const imageData = colorWheelContext.createImageData(colorWheelWidth, colorWheelHeight);
    const colorWheelZoomValue = parseFloat(colorWheelZoom.value);
    const colorWheelRadius = Math.min(colorWheelWidth, colorWheelHeight) / 2 * colorWheelZoomValue;
    let i = 0;

    colorWheelContext.translate(colorWheelWidth / 2, colorWheelHeight / 2);

    for (let y = 0; y !== colorWheelHeight; y++) {
        for (let x = 0; x !== colorWheelWidth; x++) {
            const normalizedX = (x - colorWheelWidth / 2) / colorWheelRadius;
            const normalizedY = xyzColor[1];
            const normalizedZ = (colorWheelHeight / 2 - y) / colorWheelRadius;
            const currentXYZColor = restoreColor(normalizedX, normalizedY, normalizedZ);
            const currentLinearSrgbColor = XYZToLinearsRgb(...currentXYZColor);
            const currentSrgbColor = linearsRgbTosRgb(...currentLinearSrgbColor);
            const currentIntColor = floatColorToIntColor(...currentSrgbColor) || [80, 80, 80];

            imageData.data[i + 0] = currentIntColor[0];
            imageData.data[i + 1] = currentIntColor[1];
            imageData.data[i + 2] = currentIntColor[2];
            imageData.data[i + 3] = 255;

            i += 4;
        }
    }

    colorWheelContext.putImageData(imageData, 0, 0);
    colorWheelContext.beginPath();
    colorWheelContext.arc(0, 0, colorWheelRadius, 0, Math.PI * 2);

    // Hue shades.

    const hueShadesCountValue = parseInt(hueShadesCount.value) || 1;
    const [baseColorHue, baseColorSaturation] = normalizedXZToHS(normalizedColor[0], normalizedColor[2]);
    const shadesContainer = new DocumentFragment();

    for (let i = 0; i != hueShadesCountValue; i++) {
        const hue = baseColorHue + i / hueShadesCountValue;
        const [x, z] = hSToNormalizedXZ(hue, baseColorSaturation);

        drawCross(colorWheelContext, colorWheelRadius * x, -colorWheelRadius * z, 10);

        shadesContainer.appendChild(createShadeFromXYZ(...restoreColor(x, xyzColor[1], z), i == 0));
    }

    hueShades.replaceChildren(shadesContainer);

    // Saturation shades.

    const saturationShadesCountValue = parseInt(saturationShadesCount.value) || 1;
    const [saturationShadeStart, saturationShadeStep] = getShadeStep(baseColorSaturation, saturationShadesCountValue);

    for (let i = 0; i != saturationShadesCountValue; i++) {
        const saturation = saturationShadeStart + saturationShadeStep * i;
        const [x, z] = hSToNormalizedXZ(baseColorHue, saturation);

        drawCross(colorWheelContext, colorWheelRadius * x, -colorWheelRadius * z, 10);

        shadesContainer.appendChild(createShadeFromXYZ(
            ...restoreColor(x, xyzColor[1], z),
            i == Math.floor(baseColorSaturation / saturationShadeStep),
        ));
    }

    saturationShades.replaceChildren(shadesContainer);

    // Lightness shades.

    const lightnessShadesCountValue = parseInt(lightnessShadesCount.value) || 1;
    const [lightnessShadeStart, lightnessShadeStep] = getShadeStep(xyzColor[1], lightnessShadesCountValue);

    for (let i = 0; i != lightnessShadesCountValue; i++) {
        const lightness = lightnessShadeStart + lightnessShadeStep * i;

        shadesContainer.appendChild(createShadeFromXYZ(
            ...restoreColor(normalizedColor[0], lightness, normalizedColor[2]),
            i == Math.floor(xyzColor[1] / lightnessShadeStep),
        ));
    }

    lightnessShades.replaceChildren(shadesContainer);

    // Color wheel guide line.

    for (let i = 0; i != 6; i++) {
        colorWheelContext.moveTo(-colorWheelRadius, 0);
        colorWheelContext.lineTo(colorWheelRadius, 0);
        colorWheelContext.rotate(Math.PI / 6);
    }

    colorWheelContext.strokeStyle = 'black';
    colorWheelContext.stroke();

    colorWheelContext.resetTransform();
}

// Linear gradient.

function updateGradient() {
    const gradientStartColor = sRgbToLinearsRgb(...parseColor(gradientStart.value));
    const gradientEndColor = sRgbToLinearsRgb(...parseColor(gradientEnd.value));
    const gradientCountValue = parseInt(gradientCount.value) || 1;
    const stepR = (gradientEndColor[0] - gradientStartColor[0]) / (gradientCountValue - 1);
    const stepG = (gradientEndColor[1] - gradientStartColor[1]) / (gradientCountValue - 1);
    const stepB = (gradientEndColor[2] - gradientStartColor[2]) / (gradientCountValue - 1);
    const shadesContainer = new DocumentFragment();

    for (let i = 0; i != gradientCountValue; i++) {
        shadesContainer.appendChild(createShadeFromLinearsRgb(
            gradientStartColor[0] + stepR * i,
            gradientStartColor[1] + stepG * i,
            gradientStartColor[2] + stepB * i,
        ));
    }

    gradientShades.replaceChildren(shadesContainer);
}

// Main.

colorWheel.height = colorWheel.offsetHeight * window.devicePixelRatio;
colorWheel.width = colorWheel.offsetWidth * window.devicePixelRatio;

for (const colorShadesParameter of [
    colorSpaceRedx,
    colorSpaceRedy,
    colorSpaceRedY,
    colorSpaceGreenx,
    colorSpaceGreeny,
    colorSpaceGreenY,
    colorSpaceBluex,
    colorSpaceBluey,
    colorSpaceBlueY,
    baseColor,
    colorWheelZoom,
    hueShadesCount,
    saturationShadesCount,
    lightnessShadesCount,
]) {
    colorShadesParameter.addEventListener("input", updateShades);
}

for (const gradientParameter of [gradientStart, gradientEnd, gradientCount]) {
    gradientParameter.addEventListener("input", updateGradient);
}

updateShades();
updateGradient();
