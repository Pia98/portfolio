const fragmentShader = `
  #include <common>

  uniform vec3 iResolution;
  uniform float iTime;


float random(vec2 st) {
    return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453123);
}


float sdPentagram(in vec2 p, in float r )
{
    const float k1x = 0.809016994; // cos(π/ 5) = ¼(√5+1)
    const float k2x = 0.309016994; // sin(π/10) = ¼(√5-1)
    const float k1y = 0.587785252; // sin(π/ 5) = ¼√(10-2√5)
    const float k2y = 0.951056516; // cos(π/10) = ¼√(10+2√5)
    const float k1z = 0.726542528; // tan(π/ 5) = √(5-2√5)
    const vec2  v1  = vec2( k1x,-k1y);
    const vec2  v2  = vec2(-k1x,-k1y);
    const vec2  v3  = vec2( k2x,-k2y);
    
    p.x = abs(p.x);
    p -= 2.0*max(dot(v1,p),0.0)*v1;
    p -= 2.0*max(dot(v2,p),0.0)*v2;
    p.x = abs(p.x);
    p.y -= r;
    return length(p-v3*clamp(dot(p,v3),0.0,k1z*r))
           * sign(p.y*v3.x-p.x*v3.y);
}

vec3 palette(float t) {
    vec3 a = vec3(.5);
    vec3 b = vec3(.5);
    vec3 c = vec3(1.);
    vec3 d = vec3(.26, .42, .56);
    
    return a + b*cos(6.28318*(c*t+d));
}


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;
    uv -= 0.5; // ins Zentrum setzen
    uv.x *= iResolution.x / iResolution.y; // aspect ratio
    
    float angle = atan(uv.y, uv.x);       // Winkel um das Zentrum
    float radius = length(uv); // Abstand vom Zentrum
                
    float colorWave = sin(angle * 10.0 + radius * 10. - iTime*10.)*0.5 + 0.5;
    
    //background spiral
   // colorWave = step(.1, colorWave);
    float c = colorWave * radius - 1.0;
    vec3 cVec = 1.0 - vec3(c + .75, c +.9 , c + .5);
    
    
    //introducing a distance function -> pentagon shaped
    //radius over time
    
    //uv = fract(uv*2.) -.5;
    
    float r = sin(angle * 10. - iTime*15.)*0.8+0.5;    
    float d = sdPentagram(uv, r);
    
    //overtime... it should change between more and less reps
    float freq = sin(iTime)*4.+4.5;
    d = sin(d*freq)/8.;
    d = abs(d);    
   // d = step(0.075, d);
    d = smoothstep(0.0, .2, d);
    
    if(d <= .2) {
        d = (0.01/d);
        float cFreq = sin(iTime*5.)*.3 +.5;
        
        cVec = vec3(d + cFreq, d + .1, 1.);
        //cVec = palette(d);
    }
    
    /*if(uv.y > s && uv.y < s && uv.x > s && uv.x < s) {
        cVec = vec3(0.1);
    }*/
    
    // Output to screen
    fragColor = vec4(cVec, 1.0);
}

void main() {

	mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

export default fragmentShader;