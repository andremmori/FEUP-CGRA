
attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

varying vec4 pos;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;

uniform float normScale;

void main(){
    vec3 offset=vec3(0.,normScale*sin(timeFactor),0.);
    
    vTextureCoord=aTextureCoord;
    
    gl_Position=uPMatrix*uMVMatrix*vec4(aVertexPosition+offset,1.);
    pos=gl_Position;
}

