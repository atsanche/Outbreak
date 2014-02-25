#pragma strict
@script RequireComponent(AudioSource)
public var collection_beep : AudioClip;

function Start () {

}

function Update () {

}
function OnControllerColliderHit(c:ControllerColliderHit){
	print("collided with "+c.gameObject.tag);
	if (c.gameObject.tag =="medpack") {
		Destroy(c.gameObject);
		audio.clip = collection_beep;
		audio.Play();
	}
}