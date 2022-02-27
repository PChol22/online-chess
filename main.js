const getSquareElt = (i,j) => {
    const row = playerRole === 'w' ? boardElt.children[i] : boardElt.children[7-i];
    const square = row.children[j];
    return square;
};

const isGameOver = (color) => {
    const possibleMoves = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j][0] === color) possibleMoves.push(...possibleSquares(i,j,0));
        }
    }
    return possibleMoves.length === 0;
};

const possibleSquares = (i,j,depth) => {
    const piece = board[i][j];
    if (!piece) return;
    const color = piece[0];
    const pieceType = piece[1];
    const otherColor = color === 'b' ? 'w' : 'b';
    squares = [];
    switch (pieceType) {
        case 'r':
            for (let x = i - 1; x >= 0; x--) {
                if (board[x][j] === '') {
                    squares.push([x, j]);
                } else if (board[x][j][0] === otherColor) {
                    squares.push([x, j]);
                    break;
                } else {
                    break;
                }
            }
            for (let x = i + 1; x < 8; x++) {
                if (board[x][j] === '') {
                    squares.push([x, j]);
                } else if (board[x][j][0] === otherColor) {
                    squares.push([x, j]);
                    break;
                } else {
                    break;
                }
            }
            for (let y = j - 1; y >= 0; y--) {
                if (board[i][y] === '') {
                    squares.push([i, y]);
                } else if (board[i][y][0] === otherColor) {
                    squares.push([i, y]);
                    break;
                } else {
                    break;
                }
            }
            for (let y = j + 1; y < 8; y++) {
                if (board[i][y] === '') {
                    squares.push([i, y]);
                } else if (board[i][y][0] === otherColor) {
                    squares.push([i, y]);
                    break;
                } else {
                    break;
                }
            }
            break;
        case 'b':
            for (let k = 1; i - k >= 0 && j - k >= 0; k++) {
                if (board[i-k][j-k] === '') {
                    squares.push([i-k, j-k]);
                } else if (board[i-k][j-k][0] === otherColor) {
                    squares.push([i-k, j-k]);
                    break;
                } else {
                    break;
                }
            }
            for (let k = 1; i + k < 8 && j - k >= 0; k++) {
                if (board[i+k][j-k] === '') {
                    squares.push([i+k, j-k]);
                } else if (board[i+k][j-k][0] === otherColor) {
                    squares.push([i+k, j-k]);
                    break;
                } else {
                    break;
                }
            }
            for (let k = 1; i - k >= 0 && j + k < 8; k++) {
                if (board[i-k][j+k] === '') {
                    squares.push([i-k, j+k]);
                } else if (board[i-k][j+k][0] === otherColor) {
                    squares.push([i-k, j+k]);
                    break;
                } else {
                    break;
                }
            }
            for (let k = 1; i + k < 8 && j + k < 8; k++) {
                if (board[i+k][j+k] === '') {
                    squares.push([i+k, j+k]);
                } else if (board[i+k][j+k][0] === otherColor) {
                    squares.push([i+k, j+k]);
                    break;
                } else {
                    break;
                }
            }
            break;
        case 'q':
            for (let k = 1; i - k >= 0 && j - k >= 0; k++) {
                if (board[i-k][j-k] === '') {
                    squares.push([i-k, j-k]);
                } else if (board[i-k][j-k][0] === otherColor) {
                    squares.push([i-k, j-k]);
                    break;
                } else {
                    break;
                }
            }
            for (let k = 1; i + k < 8 && j - k >= 0; k++) {
                if (board[i+k][j-k] === '') {
                    squares.push([i+k, j-k]);
                } else if (board[i+k][j-k][0] === otherColor) {
                    squares.push([i+k, j-k]);
                    break;
                } else {
                    break;
                }
            }
            for (let k = 1; i - k >= 0 && j + k < 8; k++) {
                if (board[i-k][j+k] === '') {
                    squares.push([i-k, j+k]);
                } else if (board[i-k][j+k][0] === otherColor) {
                    squares.push([i-k, j+k]);
                    break;
                } else {
                    break;
                }
            }
            for (let k = 1; i + k < 8 && j + k < 8; k++) {
                if (board[i+k][j+k] === '') {
                    squares.push([i+k, j+k]);
                } else if (board[i+k][j+k][0] === otherColor) {
                    squares.push([i+k, j+k]);
                    break;
                } else {
                    break;
                }
            }
            for (let x = i - 1; x >= 0; x--) {
                if (board[x][j] === '') {
                    squares.push([x, j]);
                } else if (board[x][j][0] === otherColor) {
                    squares.push([x, j]);
                    break;
                } else {
                    break;
                }
            }
            for (let x = i + 1; x < 8; x++) {
                if (board[x][j] === '') {
                    squares.push([x, j]);
                } else if (board[x][j][0] === otherColor) {
                    squares.push([x, j]);
                    break;
                } else {
                    break;
                }
            }
            for (let y = j - 1; y >= 0; y--) {
                if (board[i][y] === '') {
                    squares.push([i, y]);
                } else if (board[i][y][0] === otherColor) {
                    squares.push([i, y]);
                    break;
                } else {
                    break;
                }
            }
            for (let y = j + 1; y < 8; y++) {
                if (board[i][y] === '') {
                    squares.push([i, y]);
                } else if (board[i][y][0] === otherColor) {
                    squares.push([i, y]);
                    break;
                } else {
                    break;
                }
            }
            break;
        case 'p':
            if (color === 'w') {
                if (i > 0 && board[i-1][j] === '') {
                    squares.push([i-1, j]);
                    if (i === 6 && board[i-2][j] === '') squares.push([i-2, j, 'wEnPassant']);
                }
                if (i > 0 && j > 0 && board[i-1][j-1] && board[i-1][j-1][0] === otherColor) squares.push([i-1, j-1]);
                if (i > 0 && j+1 < 8 && board[i-1][j+1] && board[i-1][j+1][0] === otherColor) squares.push([i-1, j+1]);
                if (j+1<8 && enPassant && i == 3 && enPassant[enPassant.length - 1] == j + 1) squares.push([i-1, j+1, 'wPriseEnPassant'+(j+1)]);
                if (j>0 && enPassant && i == 3 && enPassant[enPassant.length - 1] == j - 1) squares.push([i-1, j-1, 'wPriseEnPassant'+(j-1)]);
            } else {
                if (i+1<8 && board[i+1][j] === '') {
                    squares.push([i+1, j]);
                    if (i === 1 && board[i+2][j] === '') squares.push([i+2, j, 'bEnPassant']);
                }
                if (i+1<8 && j > 0 && board[i+1][j-1] && board[i+1][j-1][0] === otherColor) squares.push([i+1, j-1]);
                if (i+1<8 && j+1 < 8 && board[i+1][j+1] && board[i+1][j+1][0] === otherColor) squares.push([i+1, j+1]);
                if (j+1<8 && enPassant && i == 4 && enPassant[enPassant.length - 1] == j + 1) squares.push([i+1, j+1, 'bPriseEnPassant'+(j+1)]);
                if (j>0 && enPassant && i == 4 && enPassant[enPassant.length - 1] == j - 1) squares.push([i+1, j-1, 'bPriseEnPassant'+(j-1)]);
            }
            break;
        case 'n':
            if (i-1>=0 && j-2>=0 && (board[i-1][j-2] === '' || board[i-1][j-2][0] === otherColor)) squares.push([i-1, j-2]);
            if (i-2>=0 && j-1>=0 && (board[i-2][j-1] === '' || board[i-2][j-1][0] === otherColor)) squares.push([i-2, j-1]);
            if (i+1<8 && j+2<8 && (board[i+1][j+2] === '' || board[i+1][j+2][0] === otherColor)) squares.push([i+1, j+2]);
            if (i+2<8 && j+1<8 && (board[i+2][j+1] === '' || board[i+2][j+1][0] === otherColor)) squares.push([i+2, j+1]);
            if (i-1>=0 && j+2<8 && (board[i-1][j+2] === '' || board[i-1][j+2][0] === otherColor)) squares.push([i-1, j+2]);
            if (i-2>=0 && j+1<8 && (board[i-2][j+1] === '' || board[i-2][j+1][0] === otherColor)) squares.push([i-2, j+1]);
            if (i+1<8 && j-2>=0 && (board[i+1][j-2] === '' || board[i+1][j-2][0] === otherColor)) squares.push([i+1, j-2]);
            if (i+2<8 && j-1>=0 && (board[i+2][j-1] === '' || board[i+2][j-1][0] === otherColor)) squares.push([i+2, j-1]);
            break;
        case 'k':
            if (i>0 && j>0 && (board[i-1][j-1] === '' || board[i-1][j-1][0] === otherColor)) squares.push([i-1,j-1]);
            if (i>0 && j+1<8 && (board[i-1][j+1] === '' || board[i-1][j+1][0] === otherColor)) squares.push([i-1,j+1]);
            if (i+1<8 && j>0 && (board[i+1][j-1] === '' || board[i+1][j-1][0] === otherColor)) squares.push([i+1,j-1]);
            if (i+1<8 && j+1<8 && (board[i+1][j+1] === '' || board[i+1][j+1][0] === otherColor)) squares.push([i+1,j+1]);
            if (i>0 && (board[i-1][j] === '' || board[i-1][j][0] === otherColor)) squares.push([i-1,j]);
            if (j>0 && (board[i][j-1] === '' || board[i][j-1][0] === otherColor)) squares.push([i,j-1]);
            if (i+1<8 && (board[i+1][j] === '' || board[i+1][j][0] === otherColor)) squares.push([i+1,j]);
            if (j+1<8 && (board[i][j+1] === '' || board[i][j+1][0] === otherColor)) squares.push([i,j+1]);
            if (color === 'w' && !whiteCastle && i == 7 && j == 4) {
                if (board[7][0] == 'wr' && board[7][1] == '' && board[7][2] == '' && board[7][3] == '') {
                    squares.push([7,2,'wLeftCastle']);
                }
                if (board[7][7] == 'wr' && board[7][6] == '' && board[7][5] == '') {
                    squares.push([7,6,'wRightCastle']);
                }
            }
            if (color === 'b' && !blackCastle && i == 0 && j == 4) {
                if (board[0][0] == 'br' && board[0][1] == '' && board[0][2] == '' && board[0][3] == '') {
                    squares.push([0,2,'bLeftCastle']);
                }
                if (board[0][7] == 'br' && board[0][6] == '' && board[0][5] == '') {
                    squares.push([0,6,'bRightCastle']);
                }
            }
    }
    if (depth > 0) return squares;
    squares = squares.filter((s) => !checkFutureCheck(i,j,s[0],s[1],color,depth+1));
    return squares;
};

const checkCheck = (color,depth) => {
    const otherColor = color === 'b' ? 'w' : 'b';
    let kingCoords;
    const possibleOpponentMoves = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] ===  color + 'k') kingCoords = [i,j];
            if (board[i][j][0] === otherColor) possibleOpponentMoves.push(...possibleSquares(i,j,depth));
        }
    }
    if (possibleOpponentMoves.filter((m) => m[0] === kingCoords[0] && m[1] === kingCoords[1]).length > 0) {
        if (depth === 0) console.log("CHECK " + color);
        return true;
    }
    return false;
};

const checkFutureCheck = (i1,j1,i2,j2,color,depth) => {
    const buf = board[i2][j2];
    board[i2][j2] = board[i1][j1];
    board[i1][j1] = '';
    const check = checkCheck(color,depth);
    board[i1][j1] = board[i2][j2];
    board[i2][j2] = buf;
    return check;
};

const play = (i, j) => {
    if (playerTurn === playerRole) {
        for (let r of boardElt.children) {
            for (let s of r.children) {
                s.classList.remove('move');
            }
        }
        if (!selectedPiece) {
            selectPiece(i, j);
        } else {
            const move = selectMove(i, j);
            if (move) {
                boardElt.classList.remove("bcheck");
                boardElt.classList.remove("wcheck");
                movePiece(move);
                updateServer(move);
                if (checkCheck(playerTurn,1)) {
                    boardElt.classList.add(playerTurn+"check");
                    if (isGameOver(playerTurn)) {
                        if (playerTurn === 'b') wWin.classList.remove('hidden');
                        if (playerTurn === 'w') bWin.classList.remove('hidden');
                    }
                }
                waitForOpponent();
            }
        }
    }
};

const selectPiece = (i, j) => {
    const piece = board[i][j];
    if (piece[0] === playerTurn) {
        selectedPiece = [i,j,piece];
        for (let s of possibleSquares(i,j,0)) {
            const square = getSquareElt(s[0], s[1]);
            square.classList.add('move');
        }
    }
};

const selectMove = (i, j) => {
    const [x,y] = selectedPiece;
    const possibleMoves = possibleSquares(x,y,0).filter((m) => m[0] === i && m[1] === j);
    if (possibleMoves.length > 0) {
        return { x1: x, y1: y, x2: possibleMoves[0][0], y2: possibleMoves[0][1], extra: possibleMoves[0][2] };
    } else {
        selectedPiece = null;
        return null;
    }
};

const movePiece = (move) => {
    const pieceClass = board[move.x1][move.y1];
    enPassant = '';
    if (move.extra) {
        let x1,x2,y1,y2,color;

        const moveRook = (x1,x2,y1,y2,color) => {
            const oldSquare = getSquareElt(x1,y1);
            oldSquare.classList.remove(color+'r');
            const newSquare = getSquareElt(x2, y2);
            newSquare.classList.add(color+'r');
            board[x2][y2] = color+'r';
            board[x1][y1] = '';
        };

        switch (move.extra) {
            case 'wLeftCastle':
                [x1,y1,x2,y2,color] = [7,0,7,3,'w'];
                whiteCastle = true;
                moveRook(x1,x2,y1,y2,color);
                break;
            case 'wRightCastle':
                [x1,y1,x2,y2,color] = [7,7,7,5,'w'];
                whiteCastle = true;
                moveRook(x1,x2,y1,y2,color);
                break;
            case 'bLeftCastle':
                [x1,y1,x2,y2,color] = [0,0,0,3,'b'];
                blackCastle = true;
                moveRook(x1,x2,y1,y2,color);
                break;
            case 'bRightCastle':
                [x1,y1,x2,y2,color] = [0,7,0,5,'b'];
                blackCastle = true;
                moveRook(x1,x2,y1,y2,color);
                break;
            case 'wEnPassant':
                enPassant = 'wEnpassant' + move.y2;
                break;
            case 'bEnPassant':
                enPassant = 'bEnpassant' + move.y2;
                break;
            default:
                const priseY = move.extra[move.extra.length-1];
                const priseX = move.extra[0] == 'w' ? 3 : 4;
                board[priseX][priseY] = '';
                const oldSquare = getSquareElt(priseX,priseY);
                oldSquare.classList.remove('wp');
                oldSquare.classList.remove('bp');
                break;
        }
    }
    const oldSquare = getSquareElt(move.x1,move.y1);
    oldSquare.classList.remove(pieceClass);
    const newSquare = getSquareElt(move.x2, move.y2);
    newSquare.classList.add(pieceClass);
    if (board[move.x2][move.y2]) newSquare.classList.remove(board[move.x2][move.y2]);
    board[move.x2][move.y2] = pieceClass;
    board[move.x1][move.y1] = '';
    selectedPiece = null;
    playerTurn = playerTurn === 'b' ? 'w' : 'b';
}

const connect = () => {
    fetch('https://chesstester.pchol22.repl.co/connect')
    .then(res => {
        return res.json();
    })
    .then((res) => {
        if (res.player === 'no') {
            connectElt.classList.add('hidden');
            reconnectElt.classList.remove('hidden');
            return;
        }
        connectElt.classList.add('hidden');
        reconnectElt.classList.add('hidden');
        playerRole = res.player;
        setup();
        if (playerRole === 'b') {
            waitForOpponent();
        } else {
            resignElt.classList.remove('hidden');
        }
    });
};

const updateServer = (move) => {
    const queryUrl = `https://chesstester.pchol22.repl.co/move?x1=${move.x1}&y1=${move.y1}&x2=${move.x2}&y2=${move.y2}&extra=${move.extra}`;
    fetch(queryUrl).then(() => {});
};

const waitForOpponent = () => {
    resignElt.classList.add('hidden');
    const interval = setInterval(() => {
        fetch('https://chesstester.pchol22.repl.co/lastMove')
        .then(res => res.json())
        .then(res => {
            if (res.resigned) {
                clearInterval(interval);
                resign();
                return;
            }
            const move = res.move;
            const turn = res.playerTurn;
            if (move && turn === playerRole) {
                boardElt.classList.remove("bcheck");
                boardElt.classList.remove("wcheck");
                movePiece(move);
                resignElt.classList.remove('hidden');
                if (checkCheck(playerTurn,1)) {
                    boardElt.classList.add(playerTurn+"check");
                    if (isGameOver(playerTurn)) {
                        if (playerTurn === 'b') wWin.classList.remove('hidden');
                        if (playerTurn === 'w') bWin.classList.remove('hidden');
                    }
                }
                clearInterval(interval);
            }
        });
    }, 1000);
};

const resign = (notifyServer=true) => {
    boardElt.classList.remove("bcheck");
    boardElt.classList.remove("wcheck");
    resignElt.classList.add('hidden');
    wWin.classList.add('hidden');
    bWin.classList.add('hidden');
    while (boardElt.lastChild) {
        boardElt.removeChild(boardElt.firstChild);
    }
    if (notifyServer || playerTurn === playerRole) {console.log('ok');fetch('https://chesstester.pchol22.repl.co/reset').then(() => {});}
    connectElt.classList.remove('hidden');
    reconnectElt.classList.add('hidden');
};

const setup = () => {
    while (boardElt.firstChild) {
        boardElt.removeChild(boardElt.firstChild);
    }
    board = [
        ['br','bn','bb','bq','bk','bb','bn','br'],
        ['bp','bp','bp','bp','bp','bp','bp','bp'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['wp','wp','wp','wp','wp','wp','wp','wp'],
        ['wr','wn','wb','wq','wk','wb','wn','wr'],
    ];
    playerTurn = 'w';
    whiteCastle = false;
    blackCastle = false;
    enPassant = '';

    const rows = [];

    for (let i = 0; i < 8; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 8; j++) {
            const square = document.createElement('square');
            square.classList.add('square');
            if (board[i][j]) square.classList.add(board[i][j]);
            square.addEventListener('click', () => play(i,j));
            row.appendChild(square);
        }
        rows.push(row);
    }

    for (let i = 0; i < 8; i ++) {
        boardElt.appendChild(playerRole === 'w' ? rows[i] : rows[7-i]);
    }
}

const boardElt = document.getElementById('board');
const reconnectElt = document.getElementById('reconnect');
const connectElt = document.getElementById('connect');
const resignElt = document.getElementById('resign');
const bWin = document.getElementById('bwin');
const wWin = document.getElementById('wwin');

let board;

let playerRole;
let playerTurn;
let selectedPiece;
let whiteCastle;
let blackCastle;
let enPassant;

reconnectElt.addEventListener('click', resign);
connectElt.addEventListener('click', connect);
resignElt.addEventListener('click', resign);
bWin.addEventListener('click', () => resign(false));
wWin.addEventListener('click', () => resign(false));

// TODO : Promotions
// TODO : Castle check checks
// TODO : Auto DC if AFK
