#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;

void main(){
    vec4 filter=texture2D(uSampler2,vTextureCoord);
    vec4 color=texture2D(uSampler,vTextureCoord);

    vec2 position=(vec2(1.-filter.y,1.-filter.x));

    vec4 altim=texture2D(uSampler3,position);
    
    gl_FragColor=altim*color;
}
