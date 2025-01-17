attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;

float normScale = 0.5;

void main(){
    vec3 offset=vec3(0.,0.,0.);
    
    vTextureCoord=aTextureCoord + vec2(.5*sin(timeFactor*.04),.5*sin(timeFactor*.04));
    offset=aVertexNormal*normScale*.1*texture2D(uSampler2,vec2(0.,.1)+vTextureCoord).b;
    
    gl_Position=uPMatrix*uMVMatrix*vec4(aVertexPosition+offset,1.);
}
