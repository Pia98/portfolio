const circleShader = `
  #include <common>

  uniform vec3 iResolution;
  uniform float iTime;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
      // Normierte Koordinaten (0 - 1)
    vec2 uv = fragCoord.xy / iResolution.xy;
    
    // Anpassen für Seitenverhältnis
    uv.x *= iResolution.x / iResolution.y;
    
        // Hintergrundverlauf (von dunkelblau zu hellblau)
    vec3 bottomColor = vec3(0.0, 0.0, 0.05); // Dunkelblau
    vec3 topColor    = vec3(.0,.0,.325); // Hellblau
    vec3 background = mix(bottomColor, topColor, uv.y);
    
    vec3 color = background;
    
    // first 5-cable
    for(float i = .0; i < 5.; i++) {
          // Sinuswelle definieren
        float xTrans = 1./9. * i; // sin(iTime*.25)*0.5;
        float wave = xTrans + clamp(smoothstep(0.001, 0.025, 0.02 * sin(uv.y*2. + iTime * .5)), .0, .5) + .9;
        //float wave = xTrans + step(0.001, sin(uv.x*0.25 + iTime * .5)/2.);

        // first 5-cableset
        float waveWidth = 0.05;
        float dist = abs(uv.x - wave);
        float waveMask = smoothstep(waveWidth, 0.0, dist);
        
        if(dist < waveWidth) {
            vec3 waveColor = vec3(.0,.0,.15);

            // Endfarbe
            color += waveColor;
        }
        
        //second cableset
        wave -=.03;
        waveWidth = 0.005;
        dist = abs(uv.x - wave);
        
        if(dist < waveWidth) {
            vec3 waveColor = vec3(.5,.4,.8);

            // Endfarbe
            color += waveColor;
        }
        
        //third cableset  
        wave -=1.;
        waveWidth = 0.005;
        dist = abs(uv.x - wave);
        
        if(dist < waveWidth && i < 3.) {
            vec3 waveColor = vec3(.0,.0,.05);

            // Endfarbe
            color += waveColor;
        }
    }
    
    fragColor = vec4(color, 1.0);
}

void main() {

	mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

export default circleShader;