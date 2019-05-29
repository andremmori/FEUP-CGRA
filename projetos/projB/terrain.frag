#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float timeFactor;

void main(){
    vec4 color=texture2D(uSampler,vTextureCoord+vec2(timeFactor*.01,0.));
    vec4 filter=texture2D(uSampler2,vTextureCoord+vec2(0.,.1));
    
    color=vec4(color.r-.2*filter.r,color.g-.2*filter.g,color.b-.2*filter.b,1.);
    
    gl_FragColor=color;
}
