const circleShader = `
  #include <common>

  uniform vec3 iResolution;
  uniform float iTime;

  
float sdStar(in vec2 p, in float r, in int n, in float m) {
    float an = 3.141593/float(n);
    float en = 3.141593/m;
    vec2  acs = vec2(cos(an),sin(an));
    vec2  ecs = vec2(cos(en),sin(en)); 

    p.x = abs(p.x);
    
    float bn = mod(atan(p.x,p.y),2.0*an) - an;
    p = length(p)*vec2(cos(bn),abs(sin(bn)));

    p -= r*acs;
    p += ecs*clamp( -dot(p,ecs), 0.0, r*acs.y/ecs.y);
    return length(p)*sign(p.x);
}

vec3 palette( float t) {
    vec3 a = vec3(0.804,0.220,1.000);
    vec3 b = vec3(1.000,0.220,0.792);
    vec3 c = vec3(0.573,0.486,0.992);
    vec3 d = vec3(0.361,1.000,1.000);
    
    return a + b*cos((2.0*t*c + d ));
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord*2.0 - iResolution.xy) / iResolution.y;
    
    //star shape over time
    float t = sin(iTime *3.0) * 5.0;
    float n = 10.0 + t;
    float w = 2.0 + n;
    float r = sin(iTime *0.5 );
    
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);
    
    float complexity = floor(sin(iTime*0.2)*1.5+2.5);
    
    for (float i = 0.0; i < complexity; i++) {
        uv = fract(uv*1.5) -0.5;
        

        float d = sdStar(uv, r, 8, w) * exp(-length(uv0));
        vec3 col = palette(length(uv0) + i + iTime*0.2);


        d = sin(d *15.0)/15.0;
        d = abs(d);
        d = smoothstep(0.0, 0.08, d);

        d = pow(0.08 / d, 1.0);

        finalColor += col * d;
    }
    
        
    fragColor = vec4(finalColor ,1.0);
    
}

void main() {

	mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

export default circleShader;