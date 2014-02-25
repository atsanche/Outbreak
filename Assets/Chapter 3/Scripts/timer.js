#pragma strict
private var time: float;
private var minutes: int;
private var seconds:int;
private var textToDisplay : String;
private var guiTextToDisplayTime : GameObject;
function Start () {
	guiTextToDisplayTime = GameObject.Find("GUIText_timer");
}

function Update () {
	time = time+Time.deltaTime;
	minutes = time/60;
	seconds = time%60;
	textToDisplay = minutes+":"+seconds;
	guiTextToDisplayTime.guiText.text = textToDisplay;
}