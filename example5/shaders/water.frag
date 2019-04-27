#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float timeFactor;

void main(){
    vec4 color=texture2D(uSampler,vTextureCoord+vec2(timeFactor*.01,0.));
    vec4 filter=texture2D(uSampler2,vec2(0.,.1)+vTextureCoord);
    
    if(filter.b>.5)
        color=vec4(color.r-filter.r,color.g-filter.g,color.b-filter.b,0.5);
    
    gl_FragColor=color;
}
/*
#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;

void main(){
    vec4 color=texture2D(uSampler,vTextureCoord);
    vec4 filter=texture2D(uSampler2,vec2(0.,.1)+vTextureCoord);

    vec4 color2=vec4(color.r-filter.r,color.g-filter.g,color.b-filter.b,1.);
    vec4 color3=vec4(color.r+color2.r,color.g+color2.g,color.b+color2.b,1.);
    
    gl_FragColor=color3;
}*/