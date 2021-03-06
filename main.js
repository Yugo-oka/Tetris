let CANVAS_WIDTH	= 600; // Canvasの幅
let CANVAS_HEIGHT	= 600; // Canvasの高さ

let BLOCK_WIDTH		= 4; // ブロックの領域幅
let BLOCK_HEIGHT	= 4; // ブロックの領域高さ

let FIELD_WIDTH		= 12; // フィールドの幅
let FIELD_HEIGHT	= 22; // フィールドの高さ

// let NEXT_FIELD_X	= CANVAS_WIDTH - 200; // Next表示用の枠の左上座標（X）
// let NEXT_FIELD_Y	= FIELD_Y; // Next表示用の枠の左上座標（Y）

let BLOCK_RED_COLOR	= "rgba(255, 100, 100, 1.0)"; // 赤色
let BLOCK_BLU_COLOR	= "rgba(100, 100, 255, 1.0)"; // 青色
let BLOCK_GRE_COLOR	= "rgba(100, 255, 100, 1.0)"; // 緑色
let BLOCK_YEL_COLOR	= "rgba(255, 255, 100, 1.0)"; // 黄色
 
let FIELD_X			= 40; // フィールドのCanvas内のX座標
let FIELD_Y			= 40; // フィールドのCanvas内のY座標

let KEY_RIGHT		= 0; // 右キー
let KEY_LEFT		= 1; // 左キー
let KEY_UP			= 2; // 上キー
let KEY_DOWN		= 3; // 下キー
let KEY_SPACE		= 4; // スペースキー
var key = Array(5); // キー判定用変数
key[KEY_RIGHT]	= 0;
key[KEY_LEFT]	= 0;
key[KEY_UP]		= 0;
key[KEY_DOWN]	= 0;
key[KEY_SPACE]	= 0;
 
let block = [ // ブロックの定義
  [	//	block type 0
    [
      [0, 0, 0, 0,],
      [0, 1, 1, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 0, 0,],
      [0, 1, 1, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 0, 0,],
      [0, 1, 1, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 0, 0,],
      [0, 1, 1, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
  ],
   
  [	//	block type 1
    [
      [0, 0, 0, 0,],
      [1, 1, 1, 1,],
      [0, 0, 0, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 1, 0,],
    ],
    [
      [0, 0, 0, 0,],
      [1, 1, 1, 1,],
      [0, 0, 0, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 1, 0,],
    ],
  ],
   
  [	//	block type 2
    [
      [0, 0, 0, 0,],
      [0, 0, 1, 1,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 1, 0, 0,],
      [0, 1, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 0, 0,],
      [0, 0, 1, 1,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 1, 0, 0,],
      [0, 1, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 0, 0,],
    ],
  ],
   
  [	//	block type 3
    [
      [0, 0, 0, 0,],
      [1, 1, 0, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    
    [
      [0, 0, 1, 0,],
      [0, 1, 1, 0,],
      [0, 1, 0, 0,],
      [0, 0, 0, 0,],
    ],
    
    [
      [0, 0, 0, 0,],
      [1, 1, 0, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    
    [
      [0, 0, 1, 0,],
      [0, 1, 1, 0,],
      [0, 1, 0, 0,],
      [0, 0, 0, 0,],
    ],
   
  ],
   
  [	//	block type 4
    [
      [0, 0, 0, 0,],
      [0, 1, 0, 0,],
      [0, 1, 1, 1,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 1, 1, 0,],
      [0, 1, 0, 0,],
      [0, 1, 0, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 0, 0,],
      [1, 1, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 1, 0,],
      [0, 0, 1, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
  ],
   
  [	//	block type 5
    [
      [0, 0, 0, 0,],
      [0, 0, 1, 0,],
      [1, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 1, 0, 0,],
      [0, 1, 0, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 0, 0,],
      [0, 1, 1, 1,],
      [0, 1, 0, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 1, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 0, 0,],
    ],
  ],
   
  [	//	block type 6
    [
      [0, 0, 0, 0,],
      [0, 1, 1, 1,],
      [0, 0, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 1, 0,],
      [0, 1, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 0, 0,],
      [0, 0, 1, 0,],
      [0, 1, 1, 1,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 1, 0, 0,],
      [0, 1, 1, 0,],
      [0, 1, 0, 0,],
      [0, 0, 0, 0,],
    ],
  ],
  ];

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var cnt;

var field;

var bflag; // ブロックの着地フラグ
var btype, brot, bcolor;
var bx, by;

var nbtype, nbrot, nbcolor; // Next表示用
 
var delflag; // ブロックの削除フラグ
var dropflag; // 行削除後のブロック落下フラグ

function init() {

  cnt = 1; // カウンタ変数

  bflag = false; // ブロックの着地フラグ
  bx = 4; // ブロックのX座標（マス）
  by = 0; // ブロックのY座標（マス）
  
  nbtype = Math.floor(Math.random() * 7); // 次のブロックの種類
	nbrot = Math.floor(Math.random() * 4); // 次のブロックの回転種類
	nbcolor = Math.floor(Math.random() * 100); // 次のブロックの色
	if(nbcolor < 35)		nbcolor = 1; // 赤色 35%
	else if(nbcolor < 65)	nbcolor = 2; // 青色 30%
	else if(nbcolor < 85)	nbcolor = 3; // 緑色 20%
  else					nbcolor = 4; // 黄色 15%
  
  initBlock(); // ブロック初期化
  
  delflag = Array(FIELD_HEIGHT); // 配列として定義
  dropflag = false; // 行削除後のブロック落下フラグ
}
//	Nextブロック領域の描画
function drawNextBlock() {
	// 枠の描画
	// context.fillStyle = "rgba(230, 230, 230, 1.0)"; // 白色に設定
	
	// context.fillRect(NEXT_FIELD_X,		NEXT_FIELD_Y,		150, 1);
	// context.fillRect(NEXT_FIELD_X,		NEXT_FIELD_Y + 150, 150, 1);
	// context.fillRect(NEXT_FIELD_X,		NEXT_FIELD_Y,		1, 150);
	// context.fillRect(NEXT_FIELD_X + 150,NEXT_FIELD_Y,		1, 150);
	
	// ブロックの描画
	//	１：赤色　２：青色　３：緑色　４：黄色　９：灰色　に設定
	var str;
	switch(nbcolor) {
	case 1: str = BLOCK_RED_COLOR; break;
	case 2: str = BLOCK_BLU_COLOR; break;
	case 3: str = BLOCK_GRE_COLOR; break;
	case 4: str = BLOCK_YEL_COLOR; break;
	case 9: str = "rgba(150, 150, 150, 1.0)"; break;
	}
	context.fillStyle = str;
	
	// for(var i = 0;i < BLOCK_HEIGHT;i++) {
	// 	for(var j = 0;j < BLOCK_WIDTH;j++) {
	// 		if(block[nbtype][nbrot][i][j] == 1) {
	// 			context.fillRect(NEXT_FIELD_X + 25 + j * 25, NEXT_FIELD_Y + 15 + 25 + i * 25, 25, 25);
	// 		}
	// 	}
	// }
 
	// ブロックの枠の描画
// 	context.fillStyle = "rgba(230, 230, 230, 1.0)";
// 	for(var i = 0;i < BLOCK_HEIGHT;i++) {
// 		for(var j = 0;j < BLOCK_WIDTH;j++) {
// 			if(block[nbtype][nbrot][i][j] == 1) {
// 				context.fillRect(NEXT_FIELD_X + 25 + j * 25,		NEXT_FIELD_Y + 15 + 25 + i * 25,		25, 1);
// 				context.fillRect(NEXT_FIELD_X + 25 + j * 25,		NEXT_FIELD_Y + 15 + 25 + i * 25 + 25,	25, 1);
// 				context.fillRect(NEXT_FIELD_X + 25 + j * 25, 		NEXT_FIELD_Y + 15 + 25 + i * 25,		1, 25);
// 				context.fillRect(NEXT_FIELD_X + 25 + j * 25 + 25,	NEXT_FIELD_Y + 15 + 25 + i * 25,		1, 25);
// 			}
// 		}
// 	}
	
// 	context.font = "bold 20px sans-serif";
// 	context.fillText("Next", NEXT_FIELD_X + 50, 60);
// 	context.fillRect(NEXT_FIELD_X, 70, 150, 1);
}

// ブロック初期化関数
function initBlock() {
	btype = nbtype; // 落下ブロックの種類
	brot = nbrot; // 落下ブロックの回転種類
	bcolor = nbcolor; // 落下ブロックの色
	
	nbtype = Math.floor(Math.random() * 7); // 次のブロックの種類
	nbrot = Math.floor(Math.random() * 4); // 次のブロックの回転種類
	nbcolor = Math.floor(Math.random() * 100); // 次のブロックの色
	if(nbcolor < 35)		nbcolor = 1; // 赤色 35%
	else if(nbcolor < 65)	nbcolor = 2; // 青色 30%
	else if(nbcolor < 85)	nbcolor = 3; // 緑色 20%
	else					nbcolor = 4; // 黄色 15%
}

//	キー操作関数
function keyCtrl() {
	if(key[KEY_RIGHT] <= 1 && key[KEY_LEFT] <= 1) {
		bx += key[KEY_RIGHT] - key[KEY_LEFT]; // 横移動
		
		var breakflag = false;
		for(var i = 0;i < BLOCK_HEIGHT;i++) {
			for(var j = 0;j < BLOCK_WIDTH;j++) {
				// 配列番号がおかしかったら処理しない
				if(bx + j < 0 || bx + j >= FIELD_WIDTH ||
					by + i < 0 || by + i >= FIELD_HEIGHT) continue;
				
				// 当たり判定
				// if(field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) {
				// 	bx -= key[KEY_RIGHT] - key[KEY_LEFT]; // 移動距離分を戻す
				// 	breakflag = true; // ループを抜ける
				// 	break;
				// }
			}
			if(breakflag) break;
		}
		// キーの状態を更新
		if(key[KEY_RIGHT] == 1) key[KEY_RIGHT]++;
		else if(key[KEY_LEFT] == 1) key[KEY_LEFT]++;
	}
	
	if(key[KEY_DOWN] <= 1 && key[KEY_UP] <= 1) {
		brot += key[KEY_DOWN] - key[KEY_UP]; // 回転
		if(brot < 0) brot = 3;
		else if(brot > 3) brot = 0;
		
		var breakflag = false;
		for(var i = 0;i < BLOCK_HEIGHT;i++) {
			for(var j = 0;j < BLOCK_WIDTH;j++) {
				// 配列番号がおかしかったら処理しない
				if(bx + j < 0 || bx + j >= FIELD_WIDTH ||
						by + i < 0 || by + i >= FIELD_HEIGHT) continue;
				
				// 当たり判定
				// if((field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) ||
				// 	(block[btype][brot][i][j] == 1 && by + i < 0)) {
				// 	brot -= key[KEY_DOWN] - key[KEY_UP]; // 回転を戻す
				// 	if(brot < 0) brot = 3;
				// 	else if(brot > 3) brot = 0;
				// 	breakflag = true; // ループを抜ける
				// 	break;
				// }
			}
			if(breakflag) break;
		}
		
		// キーの状態を更新
		if(key[KEY_DOWN] == 1) key[KEY_DOWN]++;
		else if(key[KEY_UP] == 1) key[KEY_UP]++;
	}
}

//	「何もない行」かどうか判定
function rowJudge(num) {
	var flag = true;
	
	for(var i = 1;i < FIELD_WIDTH - 1;i++) {
		if(field[num][i] != 0) { // １つでもブロックが埋まっていたらフラグをオフにして処理を終了する
			flag = false;
			break;
		}
	}
	
	return flag;
}

//	キー操作関数
function keyCtrl() {
	if(key[KEY_RIGHT] <= 1 && key[KEY_LEFT] <= 1) {
		bx += key[KEY_RIGHT] - key[KEY_LEFT]; // 横移動
		
		var breakflag = false;
		for(var i = 0;i < BLOCK_HEIGHT;i++) {
			for(var j = 0;j < BLOCK_WIDTH;j++) {
				// 配列番号がおかしかったら処理しない
				if(bx + j < 0 || bx + j >= FIELD_WIDTH ||
					by + i < 0 || by + i >= FIELD_HEIGHT) continue;
				
				// 当たり判定
				if(field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) {
					bx -= key[KEY_RIGHT] - key[KEY_LEFT]; // 移動距離分を戻す
					breakflag = true; // ループを抜ける
					break;
				}
			}
			if(breakflag) break;
		}
		// キーの状態を更新
		if(key[KEY_RIGHT] == 1) key[KEY_RIGHT]++;
		else if(key[KEY_LEFT] == 1) key[KEY_LEFT]++;
	}
	
	if(key[KEY_DOWN] <= 1 && key[KEY_UP] <= 1) {
		brot += key[KEY_DOWN] - key[KEY_UP]; // 回転
		if(brot < 0) brot = 3;
		else if(brot > 3) brot = 0;
    
    var breakflag = false;
		for(var i = 0;i < BLOCK_HEIGHT;i++) {
			for(var j = 0;j < BLOCK_WIDTH;j++) {
				// 配列番号がおかしかったら処理しない
				if(bx + j < 0 || bx + j >= FIELD_WIDTH ||
						by + i < 0 || by + i >= FIELD_HEIGHT) continue;
				
				// 当たり判定
				if((field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) ||
					(block[btype][brot][i][j] == 1 && by + i < 0)) {
					brot -= key[KEY_DOWN] - key[KEY_UP]; // 回転を戻す
					if(brot < 0) brot = 3;
					else if(brot > 3) brot = 0;
					breakflag = true; // ループを抜ける
					break;
				}
			}
			if(breakflag) break;
		}
		
		// キーの状態を更新
		if(key[KEY_DOWN] == 1) key[KEY_DOWN]++;
		else if(key[KEY_UP] == 1) key[KEY_UP]++;
	}
}

//	更新関数
function update() {
	if(cnt % 30 == 0) {
<<<<<<< HEAD
    if(dropflag) { // 落下フラグがオンなら
			var num = 0; // 削除された行の番号
			
			for(var i = FIELD_HEIGHT - 2;i > 0;i--) {
				if(rowJudge(i)) { // 削除された行かどうか判定
					num = i; // 削除された行なら「num」に代入してループを抜ける
					break;
				}
			}
			
			for(var i = num;i > 1;i--) { // 「num」番目の行より上にあるブロックを対象に落下させる
				for(var j = 1;j < FIELD_WIDTH -1;j++) {
					field[i][j] = field[i - 1][j]; // １つ上の行と全く同じ内容にする
				}
			}
			for(var i = 1;i < FIELD_WIDTH - 1;i++) { // 「１」行目は必ず空白になるので、削除する
				field[1][i] = 0;
			}
			
			var flag = false;
			
			for(var i = FIELD_HEIGHT - 2;i > 1;i--) {
				if(rowJudge(i)) { // 下から順に見て、一番最初の空白行を「num」に代入
					flag = true; // フラグをオンにする
					num = i;
					break;
				}
			}
			
			if(flag) { // フラグがオンなら（空白行があるなら）
				dropflag = false;
				for(var i = 2;i < num;i++) {
					if(!rowJudge(i)) { // 2〜「num」までの間に空白があるなら落下処理を続行させる
						dropflag = true;
						break;
					}
				}
			}
			else if(!flag) { // 空白行がないなら落下フラグをオフにする
				dropflag = false;
			}
		}
		else if(!dropflag) {
    by++; // ブロックを１マス落下
    
=======
    by++; // ブロックを１マス落下

>>>>>>> 2352ac75bf9ea07a6ee3341351bf79e73720c33d
    var breakflag = false;
		for(var i = 0;i < BLOCK_HEIGHT;i++) {
			for(var j = 0;j < BLOCK_WIDTH;j++) {
				//	配列番号がおかしい場合は処理しない
				if(bx + j < 0 || bx + j >= FIELD_WIDTH ||
					by + i < 0 || by + i >= FIELD_HEIGHT) continue;
				
				//	同じ座標（マス）にブロックとブロック・壁が重なったら
				if(field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) {
<<<<<<< HEAD
          bflag = true; // ブロックの着地フラグをオンにする
=======
>>>>>>> 2352ac75bf9ea07a6ee3341351bf79e73720c33d
					by--; // 移動距離分を戻す
					breakflag = true; // ループを抜ける
					break;
				}
			}
<<<<<<< HEAD
      if(breakflag) break;
      }
		}
	}
}

//	落下ブロックの登録
function enterBlock() {
	if(!bflag) return;
	
	for(var i = 0;i < BLOCK_HEIGHT;i++) {
		for(var j = 0;j < BLOCK_WIDTH;j++) {
			if(bx + j < 0 || bx + j >= FIELD_WIDTH ||
				by + i < 0 || by + i >= FIELD_HEIGHT) continue;
			
			//	ブロックが「０」なら処理しない
			if(block[btype][brot][i][j] == 0) continue;
			
			//	ブロックをフィールドに登録
			field[by + i][bx + j] = 1;
		}
  }

  deleteJudge(); // 削除行を検索

  bflag = false; // ブロック着地フラグを解除
	bx = 4; // ブロックのX座標
  by = -4; // ブロックのY座標
  
  initBlock(); // ブロック初期化
	
	btype = 0; // ブロックの種類
  brot = 0; // ブロックの回転種類
  bcolor = 4; // ブロックの色bcolor = 4; // ブロックの色
}

//	ブロック行の削除判定
function deleteJudge() {
	for(var i = 1;i < FIELD_HEIGHT - 1;i++) { // 壁は含まないので「1〜FIELD_HEIGHT - 1」の間になります。
		for(var j = 1;j < FIELD_WIDTH - 1;j++) {
			if(field[i][j] != 0) {
				delflag[i] = true;
			}
			else if(field[i][j] == 0) { // 行内に１つでも空白があったら削除フラグは立てずに、ループを抜ける
				delflag[i] = false;
				break;
			}
		}
	}
	
	for(var i = 1;i < FIELD_HEIGHT - 1;i++) {
    if(!delflag[i]) continue; // 削除フラグが立っていなかったら処理しない
    
    if(!dropflag) dropflag = true; // 落下フラグがオフならオンにする
		
		//	ブロック行を削除
		for(var j = 1;j < FIELD_WIDTH - 1;j++) field[i][j] = 0;
	}
	
	//	delflag の初期化
	for(var i = 0;i < FIELD_HEIGHT;i++) delflag[i] = false;
=======
			if(breakflag) break;
		}
  }
>>>>>>> 2352ac75bf9ea07a6ee3341351bf79e73720c33d
}



//	落下ブロックの描画
function drawBlock() {
  var str;
	
	switch(bcolor) {
	case 1: str = BLOCK_RED_COLOR; break;
	case 2: str = BLOCK_BLU_COLOR; break;
	case 3: str = BLOCK_GRE_COLOR; break;
	case 4: str = BLOCK_YEL_COLOR; break;
	}
	context.fillStyle = str; // 色の設定
		
	//	ブロックを描画
	for(var i = 0;i < BLOCK_HEIGHT;i++) {
		for(var j = 0;j < BLOCK_WIDTH;j++) {
			if(block[btype][brot][i][j] == 1) {
				context.fillRect(FIELD_X + (bx + j) * 25, FIELD_Y + (by + i) * 25, 25, 25);
			}
		}
  }
  
	field = [ // Fieldの内容
	[9, 9, 9, 0, 0, 0, 0, 0, 0, 9, 9, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,],
	];
}
 
document.addEventListener("keydown", e => { // キー押下処理
	var keyCode = e.keyCode; // キーコードの取得
	
	switch(keyCode) {
	case 39: key[KEY_RIGHT]++;	break;
	case 37: key[KEY_LEFT]++;	break;
	case 38: key[KEY_UP]++;		break;
	case 40: key[KEY_DOWN]++;	break;
  case 32: key[KEY_SPACE]++;	break;
  }
});
document.addEventListener("keyup", e => { // キー離上処理
	var keyCode = e.keyCode; // キーコードの取得
	
	switch(keyCode) {
	case 39: key[KEY_RIGHT]	= 0; break;
	case 37: key[KEY_LEFT]	= 0; break;
	case 38: key[KEY_UP]	= 0; break;
	case 40: key[KEY_DOWN]	= 0; break;
	case 32: key[KEY_SPACE]	= 0; break;
	}
});

init();
requestAnimationFrame(main);
  function main() {
requestAnimationFrame(main);
}

function drawField() {
	for(var i = 0;i < FIELD_HEIGHT;i++) {
		for(var j = 0;j < FIELD_WIDTH;j++) {
      if(field[i][j] == 0) continue; // 「０」なら描画しない
      
      var str;
			switch(field[i][j]) {
        case 1: str = BLOCK_RED_COLOR; break; // 赤色
        case 2: str = BLOCK_BLU_COLOR; break; // 青色
        case 3: str = BLOCK_GRE_COLOR; break; // 緑色
        case 4: str = BLOCK_YEL_COLOR; break; // 黄色			
        case 9: str = "rgba(150, 150, 150, 1.0)"; break; // グレーに設定
			}
			context.fillStyle = str;
			context.fillRect(FIELD_X + j * 25, FIELD_Y + i * 25, 25, 25); // 25×25の矩形（マス）を描画
		}
	}
}

//	フィールド枠描画
function drawFrame() {
	context.fillStyle = "rgba(230, 230, 230, 1.0)"; // 白色に設定
	
	//	縦線を描画
	for(var i = 0;i < FIELD_WIDTH + 1;i++) {
		context.fillRect(FIELD_X + i * 25, FIELD_Y, 1, 25 * FIELD_HEIGHT);
	}
	
	//	横線を描画
	for(var i = 0;i < FIELD_HEIGHT + 1;i++) {
		context.fillRect(FIELD_X, FIELD_Y + i * 25, 25 * FIELD_WIDTH, 1);
	}
}

<<<<<<< HEAD
// ブロック初期化関数
function initBlock() {
	btype = Math.floor(Math.random() * 7);	//	落下ブロックの種類
	brot = Math.floor(Math.random() * 4);	//	落下ブロックの回転種類
	bcolor = Math.floor(Math.random() * 100); // 落下ブロックの色
	if(bcolor < 35)			bcolor = 1; // 赤色 35%
	else if(bcolor < 65)	bcolor = 2; // 青色 30%
	else if(bcolor < 85)	bcolor = 3; // 緑色 20%
	else					bcolor = 4; // 黄色 15%
}
=======
document.addEventListener("keydown", e => { // キー押下処理
	var keyCode = e.keyCode; // キーコードの取得
	
	switch(keyCode) {
	case 39: key[KEY_RIGHT]++;	break;
	case 37: key[KEY_LEFT]++;	break;
	case 38: key[KEY_UP]++;		break;
	case 40: key[KEY_DOWN]++;	break;
  case 32: key[KEY_SPACE]++;	break;
  }
});

document.addEventListener("keyup", e => { // キー離上処理
	var keyCode = e.keyCode; // キーコードの取得
	
	switch(keyCode) {
	case 39: key[KEY_RIGHT]	= 0; break;
	case 37: key[KEY_LEFT]	= 0; break;
	case 38: key[KEY_UP]	= 0; break;
	case 40: key[KEY_DOWN]	= 0; break;
	case 32: key[KEY_SPACE]	= 0; break;
	}
});
>>>>>>> 2352ac75bf9ea07a6ee3341351bf79e73720c33d

init();
requestAnimationFrame(main);
function main() {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // 画面クリア
  
  keyCtrl(); // キー操作
  update(); // 更新
  enterBlock(); // ブロックの登録

  drawBlock(); // ブロックを描画
  drawField(); // フィールドを描画
  drawFrame(); // フィールド枠を描画
  drawNextBlock(); // Next表示を描画

	cnt++; // カウンタを更新
	requestAnimationFrame(main);
}