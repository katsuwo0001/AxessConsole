var size = 30;
var yoko = 18;
var tate = 39;


/* mousemoveイベント */
$('#greenscreen').on('mousemove',getClinetPoint);


/* keydownイベント処理 */
$('#hiddenarea').focus();
$('#hiddenarea').on('keydown',keyevent);


function getClinetPoint(event){
  // マウス位置を取得する
  var mouseX = event.clientX ;  // X座
  var mouseY = event.clientY ;  // Y座標 
  $('#x-point').val(mouseX); 
  $('#y-point').val(mouseY); 

};

/* キーイベント処理 */
function keyevent(event){
  var rowIndex;
  var colIndex;

  // Shiftキーイベント
  if(event.shiftKey === true){
      shiftKeyEventHandler(event);
      return;
  }
  // 選択状態を解除
  cancelStrSelection();

  switch(event.keyCode){
    // Backspace
    case 8: 
      writeText(false,"",getCursolRowIndex(),getCursolColIndex());
      moveLeftCursol();
      moveLeftCursol();
      break;
    // Enter
    case 13: 
      moveDownCursol();
      break;
    case 37:
      /* 左カーソル移動 */
      moveLeftCursol();
      break;
    case 38:
      /* 上カーソル移動 */
      moveUpCursol();
      break;
    case 39:
      /* 右カーソル移動 */
      moveRightCursol();
      break;
    case 40:
      /* 下カーソル移動 */
      moveDownCursol();
      break;
    case 65: /* A */
      writeText(true,"A",getCursolRowIndex(),getCursolColIndex());
      break;
    case 66: /* B */
      writeText(true,"B",getCursolRowIndex(),getCursolColIndex());
      break;
    case 67: /* C */
      writeText(true,"C",getCursolRowIndex(),getCursolColIndex());
      break;
    case 68: /* D */
      writeText(true,"D",getCursolRowIndex(),getCursolColIndex());
      break;
    case 69: /* E */
      writeText(true,"E",getCursolRowIndex(),getCursolColIndex());
      break;
    case 70: /* F */
      writeText(true,"F",getCursolRowIndex(),getCursolColIndex());
      break;
    case 71: /* G */
      writeText(true,"G",getCursolRowIndex(),getCursolColIndex());
      break;
    case 72: /* H */
      writeText(true,"H",getCursolRowIndex(),getCursolColIndex());
      break;
    case 73: /* I */
      writeText(true,"I",getCursolRowIndex(),getCursolColIndex());
      break;
    case 74: /* J */
      writeText(true,"J",getCursolRowIndex(),getCursolColIndex());
      break;
    case 75: /* K */
      writeText(true,"K",getCursolRowIndex(),getCursolColIndex());
      break;
    case 76: /* L */
      writeText(true,"L",getCursolRowIndex(),getCursolColIndex());
      break;
    case 77: /* M */
      writeText(true,"M",getCursolRowIndex(),getCursolColIndex());
      break;
    case 78: /* N */
      writeText(true,"N",getCursolRowIndex(),getCursolColIndex());
      break;
    case 79: /* O */
      writeText(true,"O",getCursolRowIndex(),getCursolColIndex());
      break;
    case 80: /* P */
      writeText(true,"P",getCursolRowIndex(),getCursolColIndex());
      break;
    case 81: /* Q */
      writeText(true,"Q",getCursolRowIndex(),getCursolColIndex());
      break;
    case 82: /* R */
      writeText(true,"R",getCursolRowIndex(),getCursolColIndex());
      break;
    case 83: /* S */
      writeText(true,"S",getCursolRowIndex(),getCursolColIndex());
      break;
    case 84: /* T */
      writeText(true,"T",getCursolRowIndex(),getCursolColIndex());
      break;
    case 85: /* U */
      writeText(true,"U",getCursolRowIndex(),getCursolColIndex());
      break;
    case 86: /* V */
      writeText(true,"V",getCursolRowIndex(),getCursolColIndex());
      break;
    case 87: /* W */
      writeText(true,"W",getCursolRowIndex(),getCursolColIndex());
      break;
    case 88: /* X */
      writeText(true,"X",getCursolRowIndex(),getCursolColIndex());
      break;
    case 89: /* Y */
      writeText(true,"Y",getCursolRowIndex(),getCursolColIndex());
      break;
    case 90: /* Z */
      writeText(true,"Z",getCursolRowIndex(),getCursolColIndex());
      break;
    default:
      break;
  }
  console.log("keyCode=" + event.keyCode);
  console.log("rowIndex=" + getCursolRowIndex() + " colIndex=" + getCursolColIndex());

}

/* カーソル左移動 */
function moveLeftCursol(){
  $('.cursol').css('left','-=' + yoko);
}
/* カーソル右移動 */
function moveRightCursol(){
  $('.cursol').css('left','+=' + yoko);
}
/* カーソル上移動 */
function moveUpCursol(){
  $('.cursol').css('top','-=' + tate);
}
/* カーソル下移動 */
function moveDownCursol(){
  $('.cursol').css('top','+=' + tate);
}

/* カーソル文字位置取得(横) */
function getCursolColIndex(){
 return $('.cursol').css('left').replace(/px/g,'')/yoko;
}
/* カーソル文字位置取得(行) */
function getCursolRowIndex(){
 return $('.cursol').css('top').replace(/px/g,'')/tate;
}

/* Shiftキーイベント */
function shiftKeyEventHandler(event){
  console.log("Shift Key Event :" + event.keyCode)
  switch(event.keyCode){
    case 37:
      /* 左カーソル移動 */
      selectLeftKey();
      break;
    case 38:
      /* 上カーソル移動 */
      // moveUpCursol();
      break;
    case 39:
      /* 右カーソル移動 */
      selectRightKey();
      break;
    case 40:
      /* 下カーソル移動 */
      moveDownCursol();
      break;
  }

}



/*
* テキスト書き込み
*/
function writeText(isWrite,text,rowIndex,colIndex){
  var insetText;
  var rowStrLength = 0;
  console.log("Text:" + text + " rowIndex:" + rowIndex + " colIndex:" + colIndex);

  /* 対象行の表示文字をspanタグ単位で取得 */
  $('.line').eq(rowIndex).children('span').each(function(index,element){
    console.log($(element).text() + " length:" + $(element).text().length);

    // 挿入対象文字数か判定
    rowStrLength += $(element).text().length;
    if( rowStrLength >= colIndex + 1){

      if(isWrite){
        text = insertChar($(element).text(),colIndex - rowStrLength,text);
      }else{
        text = deleteChar($(element).text(),colIndex - rowStrLength);
      }
      console.log("modify text:" + text);

      // 既存のメッセージを削除
      $(element).text('');
      $(element).text(text);

      // カーソルを右へ移動
      moveRightCursol();

      // 処理終了
      return false;
    }else{
      // 次のelement
      return true;
    }

  });
}

/* 文字挿入 */
function insertChar(str, index, insert) {
  var result = str.slice(0, index) + insert + str.slice(index, str.length);
  return result;
}

/* 文字削除 */
function deleteChar(str, index) {
  var result = str.slice(0, index-1) + str.slice(index, str.length);
  return result;
}


/* 右選択 */
function selectRightKey(){
  var cursolLeft = parseInt($('.cursol').css('left'));
  var cursolTop = parseInt($('.cursol').css('top'));
  var selectionLeft = parseInt($('.selection').css('left'));
  console.log("cursolLeft:" + cursolLeft + " selectionLeft:" + selectionLeft);
  if(!isStrSelected()){
    // 未選択
    $('.selection').css('top', cursolTop.toString() + "px");
    $('.selection').css('width','+=' + (yoko));
    $('.selection').css('left', cursolLeft.toString() + "px");
    moveRightCursol();
  }else if(isStrSelected() && selectionLeft < cursolLeft){
    $('.selection').css('top', cursolTop.toString() + "px");
    // 選択済みで右
    $('.selection').css('width','+=' + (yoko));
    moveRightCursol();
  }else if(isStrSelected() &&  selectionLeft === cursolLeft){
    $('.selection').css('top', cursolTop.toString() + "px");
    $('.selection').css('width','-=' + (yoko));
    $('.selection').css('left', (cursolLeft+yoko).toString() + "px");
    moveRightCursol();
  }
}

/* 左選択 */
function selectLeftKey(){
  var cursolLeft = parseInt($('.cursol').css('left'));
  var cursolTop = parseInt($('.cursol').css('top'));
  var selectionLeft = parseInt($('.selection').css('left'));
  console.log("cursolLeft:" + cursolLeft + " selectionLeft:" + selectionLeft);
  if(!isStrSelected()){
    // 未選択
    $('.selection').css('top', cursolTop.toString() + "px");
    $('.selection').css('width','+=' + yoko);
    $('.selection').css('left', (cursolLeft - yoko).toString() + "px");
    moveLeftCursol();
  }else if(isStrSelected() && selectionLeft === cursolLeft){
    // 選択済みで右
    $('.selection').css('top', cursolTop.toString() + "px");
    $('.selection').css('width','+=' + (yoko));
    $('.selection').css('left', (cursolLeft - yoko).toString() + "px");
    moveLeftCursol();
  }else if(isStrSelected() &&  selectionLeft < cursolLeft){
    $('.selection').css('top', cursolTop.toString() + "px");
    $('.selection').css('width','-=' + (yoko));
    moveLeftCursol();
  }
}

/* 左選択 */
function selectRowBackward(){
  $('.selection').css('width','-=' + (yoko));
}

/* 選択状態判定 */
function isStrSelected(){
  var result = false;
  console.log("Selected Area length:" + $('.selection').css('width'));
  if($('.selection').css('width') === "0px"){
    result = false;
  }else{
    result = true;
  }
  // console.log("isStrSelected:" + result);
  return result;

}

/* 文字列選択状態を解除 */
function cancelStrSelection(){
  // 未選択
  $('.selection').css('width','0px');
  $('.selection').css('left', '0px');
}
