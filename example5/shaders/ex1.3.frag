#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float timeFactor;
varying vec4 pos;

struct lightProperties{
    vec4 position;
    vec4 ambient;
    vec4 diffuse;
    vec4 specular;
    vec4 half_vector;
    vec3 spot_direction;
    float spot_exponent;
    float spot_cutoff;
    float constant_attenuation;
    float linear_attenuation;
    float quadratic_attenuation;
    bool enabled;
};

#define NUMBER_OF_LIGHTS 8
uniform lightProperties uLight[NUMBER_OF_LIGHTS];

void main(){
    vec4 color=texture2D(uSampler,vTextureCoord);
    
    vec4 colorSepia=color;
    colorSepia.r=color.r*.299+color.g*.587+color.b*.114;
    colorSepia.g=color.r*.299+color.g*.587+color.b*.114;
    colorSepia.b=color.r*.299+color.g*.587+color.b*.114;
    
    gl_FragColor=colorSepia;
}
