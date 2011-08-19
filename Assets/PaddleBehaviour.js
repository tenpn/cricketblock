
var drag = 0.2;
var mass = 10.0;
var inputMaxForce = 5.0;
var stopSpeedThreshold = 0.5;

var velocity = 0.0;

function abs(f)
{
	return f < 0.0 ? -f : f;
}

function Update () {

	var inputForce = Input.GetAxis("Horizontal") * inputMaxForce;
	var drag = velocity * velocity * drag * (velocity < 0.0 ? 1.0 : -1.0);
	var force = inputForce + drag;
	var acceleration = force / mass;
	
	velocity += acceleration * Time.deltaTime;
	
	if (inputForce == 0.0 && abs(velocity) < stopSpeedThreshold)
	{
		velocity = 0.0;
	}

	transform.position.x += velocity * Time.deltaTime;
	
	if (Input.GetKeyDown(KeyCode.R))
	{
		transform.position.x = 0.0;
		velocity = 0.0;
	}
}