(() =>
{
    'use strict';

    function randomInteger(minimal, maximal)
    {
        return minimal + Math.floor(Math.random() * (maximal - minimal));
    }

    function removeIf(array, condition)
    {
        let i = 0;

        for (; i < array.length; i++)
        {
            if (condition(array[i]))
            {
                break;
            }
        }

        let position = i;

        for (; i < array.length; i++)
        {
            if (!condition(array[i]))
            {
                array[position] = array[i];

                position++;
            }
        }

        array.splice(position, array.length - position);
    }

    function getCurrentTime()
    {
        return Date.now() / 1000.0;
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
            const rainColumns = [];
            let rows = -1;
            let lastViewTime = 0.0;
            const raindropRecycleBin = {};
            const sharedRemoveList = [];

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
                if (raindrop.size in raindropRecycleBin)
                {
                    raindropRecycleBin[raindrop.size].push(raindrop);
                }
                else
                {
                    raindropRecycleBin[raindrop.size] = [raindrop];
                }
            }

            function createRaindrop(position, speed, size)
            {
                if (size in raindropRecycleBin && raindropRecycleBin[size].length > 0)
                {
                    const result = raindropRecycleBin[size].pop();

                    result.reset(position, speed, generateCharacters(size));

                    return result;

                }
                else
                {
                    return new TheMatrixRaindrop(position, speed, generateCharacters(size));
                }
            }

            function updateColumn(column, currentTime, timeElapsed, mutationProbability)
            {
                // Assume `sharedRemoveList` is empty.

                for (const raindrop of column)
                {
                    if (!updateRaindrop(raindrop, timeElapsed, mutationProbability))
                    {
                        sharedRemoveList.push(raindrop);
                    }
                }

                removeIf(column, x => sharedRemoveList.includes(x));

                while (sharedRemoveList.length > 0)
                {
                    recycleRaindrop(sharedRemoveList.pop());
                }

                for (let raindropBirthTime = lastViewTime + getTimeToBirth(); raindropBirthTime <= currentTime; raindropBirthTime += getTimeToBirth())
                {
                    const speed = generateSpeedValue();
                    const position = speed * (currentTime - raindropBirthTime);
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

            this.getView = (columns, rows, time) =>
            {
                while (rainColumns.length < columns)
                {
                    rainColumns.push([]);
                }

                while (rainColumns.length > columns)
                {
                    rainColumns.pop().forEach(recycleRaindrop);
                }

                setRows(rows);

                const timeEllapsed = time - lastViewTime;
                const mutationProbability = 1.0 - Math.pow(2.0, -timeEllapsed / configuration.λMutation);

                for (const rainColumn of rainColumns)
                {
                    updateColumn(rainColumn, time, timeEllapsed, mutationProbability);
                }

                lastViewTime = time;

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

        window.onresize = () =>
        {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        };

        window.onresize();

        function generateColorComponent(from, to, position)
        {
            return from + (to - from) * position;
        }

        function generateColor(from, to, position)
        {
            let result = 'rgba(';

            result += generateColorComponent(from[0], to[0], position);

            for (let i = 1; i < from.length; i++)
            {
                result += ', ';
                result += generateColorComponent(from[i], to[i], position);
            }

            result += ')';

            return result;
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
                    context.fillStyle = generateColor(tailColor1, tailColor2, normalizedPosition);
                    context.fillText(text, x, y);
                }
            }
        }

        const canvasContext = canvas.getContext('2d');

        canvasContext.textAlign = 'center';
        canvasContext.textBaseline = 'top';

        function onDraw()
        {
            const currentTime = getCurrentTime() - startTime;
            const columns = Math.floor(canvas.width / cellWidth);
            const rows = Math.floor(canvas.height / cellHeight);
            const view = backend.getView(columns, rows, currentTime);

            canvasContext.globalCompositeOperation = 'source-over';
            canvasContext.fillStyle = backgroundColor;
            canvasContext.fillRect(0, 0, canvas.width, canvas.height);
            canvasContext.globalCompositeOperation = 'screen';

            for (let column = 0; column < columns; column++)
            {
                for (const raindrop of view[column])
                {
                    drawRaindrop(canvasContext, column, raindrop);
                }
            }

            window.requestAnimationFrame(onDraw);
        }

        window.requestAnimationFrame(onDraw);
    });
})();
