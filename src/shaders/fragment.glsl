precision mediump float;

uniform sampler2D u_image;
uniform vec2 u_mouse;
uniform float u_strength;
uniform vec3 u_bgColor; 
varying vec2 vUv;

void main() {
    float dist = distance(vUv, u_mouse);
    float radius = 0.22;
    float softness = 0.18;
    float mask = smoothstep(radius, radius - softness, dist);
    mask *= u_strength;

    vec4 imgColor = texture(u_image, vUv);

    // Mantém a transparência real do PNG
    vec3 color = mix(u_bgColor, imgColor.rgb, mask * imgColor.a);
    float alpha = imgColor.a * mask;

    gl_FragColor = vec4(color, alpha);
}
