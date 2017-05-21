(() =>
{
    'use strict';

    function randomInteger(minimal, maximal)
    {
        return minimal + Math.floor(Math.random() * (maximal - minimal));
    }

    function getCurrentTime()
    {
        return Date.now() / 1000.0;
    }

    class Vector
    {
        constructor(capacity = 0)
        {
            const data = new Array(capacity);
            let lengthValue = 0;

            Object.defineProperties(this, { 'length': { get: () => lengthValue } })

            function ensure(condition)
            {
                if (!condition)
                {
                    throw new Error();
                }
            }

            this[Symbol.iterator] = function* ()
            {
                for (let i = 0; i < this.length; i++)
                {
                    yield data[i];
                }
            }

            this.get = (i) =>
            {
                ensure(i >= 0 && i < this.length);

                return data[i];
            }

            this.set = (i, value) =>
            {
                ensure(i >= 0 && i < this.length);

                data[i] = value;
            }

            this.push = function ()
            {
                for (const item of arguments)
                {
                    data[this.length] = item;

                    lengthValue++;
                }
            }

            this.pop = () =>
            {
                ensure(this.length > 0);

                lengthValue--;

                const result = data[this.length];

                data[this.length] = undefined;

                return result;
            }

            this.forEach = (action) =>
            {
                for (let i = 0; i < this.length; i++)
                {
                    action(data[i]);
                }
            }

            this.removeIf = (condition) =>
            {
                let i = 0;

                for (; i < this.length; i++)
                {
                    if (condition(data[i]))
                    {
                        break;
                    }
                }

                let position = i;

                for (; i < this.length; i++)
                {
                    if (!condition(data[i]))
                    {
                        data[position] = data[i];

                        position++;
                    }
                }

                for (let i = position; i < this.length; ++i)
                {
                    data[i] = undefined;
                }

                lengthValue = position;
            }
        }
    }

    class TheMatrixRaindrop
    {
        constructor(position, speed, characters)
        {
            this.position = position;
            this.speed = speed;
            this.characters = Uint16Array.from(characters);
        }

        get size()
        {
            return this.characters.length;
        }

        reset(position, speed, characters)
        {
            this.position = position;
            this.speed = speed;
            this.characters.set(characters);
        }
    }

    class BackendConfiguration
    {
        constructor(configuration = {})
        {
            this.λMutation = 0.2;
            this.λGenerate = 1.0;
            this.minimalSpeed = 16.0;
            this.maximalSpeed = 32.0;
            this.minimalRaindropSize = 12;
            this.maximalRaindropSize = 36;
            this.characterCandidates = '!"#$%&\()*+-/0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬±µ¶º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨϩϪϫϬϭϮϯϰϱϲϳϴϵ϶ϷϸϹϺϻϼϾϿЀЁЂЃЄЅІЇЈЉЊЋЌЍЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяѐёђѓєѕіїјљњћќѝўџѠѡѢѣѤѥѦѧѨѩѪѫѬѭѮѯѰѱѲѳѴѵѶѷѸѹѺѻѼѽѾѿҀҁ҂ҊҋҌҍҎҏҐґҒғҔҕҖҗҘҙҚқҜҝҞҟҠҡҢңҤҥҦҧҨҩҪҫҬҭҮүҰұҲҳҴҵҶҷҸҹҺһҼҽҾҿӀӁӂӃӄӅӆӇӈӉӊӋӌӍӎӏӐӑӒӓӔӕӖӗӘәӚӛӜӝӞӟӠӡӢӣӤӥӦӧӨөӪӫӬӭӮӯӰӱӲӳӴӵӶӷӸӹӺӻӼӽӾӿԀԁԂԃԄԅԆԇԈԉԊԋԌԍԎԏԐԑԒԓԔԕԖԗԘԙԚԛԜԝԞԟԠԡԢԣԤԥԦԧԨԩԪԫԬԭԮԯԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖաբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆև';

            for (let attribute in configuration)
            {
                this[attribute] = configuration[attribute];
            }

            let newCharacterCandidates = [];

            for (let i = 0; i < this.characterCandidates.length; i++)
            {
                newCharacterCandidates.push(this.characterCandidates.codePointAt(i));
            }

            this.characterCandidates = newCharacterCandidates;
        }
    }

    class Backend
    {
        constructor(configuration = new BackendConfiguration())
        {
            const rainColumns = new Vector();
            let rows = -1;
            const raindropRecycleBin = new Map();
            const sharedRemoveList = new Set();

            function getRandomCharacter()
            {
                return configuration.characterCandidates[randomInteger(0, configuration.characterCandidates.length)];
            }

            function probabilityGate(probability)
            {
                return Math.random() < probability;
            }

            function getTimeToBirth()
            {
                return Math.log2(1.0 / (1.0 - Math.random())) * configuration.λGenerate;
            }

            function generateSpeedValue()
            {
                return configuration.minimalSpeed + (configuration.maximalSpeed - configuration.minimalSpeed) * Math.random();
            }

            function* generateCharacters(size)
            {
                for (let i = 0; i < size; i++)
                {
                    yield getRandomCharacter();
                }
            }

            function updateRaindrop(raindrop, timeElapsed, mutationProbability)
            {
                const oldIntegerPosition = Math.floor(raindrop.position);

                raindrop.position += raindrop.speed * timeElapsed;

                if (raindrop.position - raindrop.size < rows)
                {
                    const newIntegerPosition = Math.floor(raindrop.position);
                    const integerStep = newIntegerPosition - oldIntegerPosition;

                    // Do character rotation.

                    for (let i = raindrop.size - 1; i >= integerStep; i--)
                    {
                        if (probabilityGate(mutationProbability))
                        {
                            raindrop.characters[i] = getRandomCharacter();
                        }
                        else
                        {
                            raindrop.characters[i] = raindrop.characters[i - integerStep];
                        }
                    }

                    // Fill remaining positions.

                    for (let i = 0; i < Math.min(raindrop.size, integerStep); i++)
                    {
                        raindrop.characters[i] = getRandomCharacter();
                    }

                    return true;
                }
                else
                {
                    return false;
                }
            }

            function recycleRaindrop(raindrop)
            {
                if (raindropRecycleBin.has(raindrop.size))
                {
                    raindropRecycleBin.get(raindrop.size).push(raindrop);
                }
                else
                {
                    const newColumn = new Vector();

                    newColumn.push(raindrop);

                    raindropRecycleBin.set(raindrop.size, newColumn);
                }
            }

            function createRaindrop(position, speed, size)
            {
                if (raindropRecycleBin.has(size))
                {
                    const bucket = raindropRecycleBin.get(size);

                    if (bucket.length > 0)
                    {
                        const result = bucket.pop();

                        result.reset(position, speed, generateCharacters(size));

                        return result;
                    }
                }

                return new TheMatrixRaindrop(position, speed, generateCharacters(size));
            }

            function updateColumn(column, timeElapsed, mutationProbability)
            {
                // Assume `sharedRemoveList` is empty.

                for (const raindrop of column)
                {
                    if (!updateRaindrop(raindrop, timeElapsed, mutationProbability))
                    {
                        sharedRemoveList.add(raindrop);
                    }
                }

                column.removeIf(x => sharedRemoveList.has(x));
                sharedRemoveList.forEach(recycleRaindrop);

                sharedRemoveList.clear();

                for (let raindropBirthTime = getTimeToBirth(); raindropBirthTime <= timeElapsed; raindropBirthTime += getTimeToBirth())
                {
                    const speed = generateSpeedValue();
                    const position = speed * (timeElapsed - raindropBirthTime);
                    const size = randomInteger(configuration.minimalRaindropSize, configuration.maximalRaindropSize);

                    if (position - size < rows)
                    {
                        column.push(createRaindrop(position, speed, size));
                    }
                }
            }

            function setRows(value)
            {
                rows = value;
            }

            this.getView = (columns, rows, timeEllapsed) =>
            {
                while (rainColumns.length < columns)
                {
                    rainColumns.push(new Vector());
                }

                while (rainColumns.length > columns)
                {
                    rainColumns.pop().forEach(recycleRaindrop);
                }

                setRows(rows);

                const mutationProbability = 1.0 - Math.pow(2.0, -timeEllapsed / configuration.λMutation);

                for (const rainColumn of rainColumns)
                {
                    updateColumn(rainColumn, timeEllapsed, mutationProbability);
                }

                return rainColumns;
            };
        }
    }

    document.addEventListener('DOMContentLoaded', () =>
    {
        const startTime = getCurrentTime();
        const backend = new Backend();
        const backgroundColor = 'black';
        const cellWidth = 24.0;
        const cellHeight = 24.0;
        const headFont = 'bold 24px "Courier New"';
        const tailFont = 'bold 24px "Courier New"';
        const headColor = 'rgba(100, 255, 100, 1.0)';
        const tailColor1 = [0, 200, 0, 1.0];
        const tailColor2 = [0, 200, 0, 0.0];
        const canvas = document.getElementById('canvas');
        const colorSteps = 256;
        const colorCache = new Array(colorSteps);
        let isPause = false;
        let speed = 1.0;
        let lastFrameTime = 0.0;
        let isRendering = true;
        let isDebug = false;

        function generateColorComponent(from, to, position)
        {
            return from + (to - from) * position;
        }

        for (let i = 0; i < colorSteps; i++)
        {
            const position = i / (colorSteps - 1);
            const r = generateColorComponent(tailColor1[0], tailColor2[0], position);
            const g = generateColorComponent(tailColor1[1], tailColor2[1], position);
            const b = generateColorComponent(tailColor1[2], tailColor2[2], position);
            const a = generateColorComponent(tailColor1[3], tailColor2[3], position);

            colorCache[i] = `rgba(${r}, ${g}, ${b}, ${a})`;
        }

        window.onresize = () =>
        {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        };

        window.onresize();

        window.onkeydown = (ev) =>
        {
            switch (ev.key)
            {
                case ' ':
                    isPause = !isPause;
                    break;

                case 'd':
                    isDebug = !isDebug;
                    break;

                case 'r':
                    isRendering = !isRendering;
                    break;

                case 'ArrowUp':
                    speed *= 1.1;
                    break;

                case 'ArrowDown':
                    speed /= 1.1;
                    break;

                case '0':
                    speed = 1.0;
                    break;
            }
        };

        function getTailColor(position)
        {
            return colorCache[Math.floor(colorSteps * position)];
        }

        function drawRaindrop(context, column, raindrop)
        {
            for (let row = 0; row < raindrop.size; row++)
            {
                const text = String.fromCodePoint(raindrop.characters[row]);
                const x = cellWidth / 2.0 + cellWidth * column;
                const y = cellHeight * (Math.floor(raindrop.position) - row);
                const position = (row + raindrop.position % 1.0) / raindrop.size;
                const normalizedPosition = 1.0 - Math.pow(1.0 - position, 1.6);

                if (row === 0)
                {
                    context.font = headFont;
                    context.fillStyle = headColor;

                    context.fillText(text, x, y);

                    context.font = tailFont;
                }
                else
                {
                    context.fillStyle = getTailColor(normalizedPosition);
                    context.fillText(text, x, y);
                }
            }
        }

        const canvasContext = canvas.getContext('2d');

        canvasContext.textBaseline = 'top';
        canvasContext.textAlign = 'center';

        function onDraw()
        {
            const currentTime = getCurrentTime() - startTime;
            const columns = Math.floor(canvas.width / cellWidth);
            const rows = Math.floor(canvas.height / cellHeight);
            const timeEllapsed = currentTime - lastFrameTime;
            const view = backend.getView(columns, rows, isPause ? 0.0 : timeEllapsed * speed);

            canvasContext.globalCompositeOperation = 'source-over';
            canvasContext.fillStyle = backgroundColor;
            canvasContext.fillRect(0, 0, canvas.width, canvas.height);
            canvasContext.globalCompositeOperation = 'screen';

            if (isRendering)
            {
                for (let column = 0; column < columns; column++)
                {
                    for (const raindrop of view.get(column))
                    {
                        drawRaindrop(canvasContext, column, raindrop);
                    }
                }
            }

            if (isDebug)
            {
                canvasContext.save();

                canvasContext.textBaseline = 'top';
                canvasContext.textAlign = 'left';
                canvasContext.fillStyle = 'white';
                canvasContext.fillText(`Last frame time: ${timeEllapsed}`, 10.0, 10.0);
                canvasContext.fillText(`Frame rate: ${1.0 / timeEllapsed}`, 10.0, 40.0);
                canvasContext.fillText(`Speed: ${speed}`, 10.0, 70.0);

                canvasContext.restore();
            }

            lastFrameTime = currentTime;

            window.requestAnimationFrame(onDraw);
        }

        window.requestAnimationFrame(onDraw);
    });
})();
