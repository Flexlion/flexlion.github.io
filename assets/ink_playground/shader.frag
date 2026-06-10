#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
precision highp samplerCube;
layout(std140) uniform fp_c3
{
    mat3x4 cView;
    mat4 cViewProj;
    mat4 cProj;
    mat3x4 cViewInv;
    vec4 cNearFar;
    vec4 cScreen;
    vec4 cDist;
    vec4 cFovParams;
    vec4 cf;
    vec4 cc;
    vec4 sf;
    mat3x4 cPrevView;
    mat4 cPrevViewProj;
    mat4 cPrevProj;
    mat3x4 cPrevViewInv;
    mat3x4 cProjectionTexMtx0;
    mat3x4 cProjectionTexMtx1;
    vec4 cProjParams;
    mat4 cCascadeMtx0;
    mat4 cCascadeMtx1;
    mat4 cCascadeMtx2;
    mat4 cCascadeMtx3;
    vec4 _ctx_rest[102];
} ctx;
layout(std140) uniform fp_c5
{
    vec4 cAmbientColor;
    vec4 cHemiSkyColor;
    vec4 cHemiGroundColor;
    vec4 cHemiDirection;
    vec4 cLightDirection0;
    vec4 cLightColor;
    vec4 cLightSpecColor;
    vec4 cLightDirection1;
    vec4 cLightColor1;
    vec4 cLightSpecColor1;
    vec4 cFog0Color;
    vec4 cFog0DirStart;
    vec4 cFog0EndDamp;
    vec4 cFog1Color;
    vec4 cFog1DirStart;
    vec4 cFog1EndDamp;
    vec4 cFog2Color;
    vec4 cFog2DirStart;
    vec4 cFog2EndDamp;
    vec4 cFog3Color;
    vec4 cFog3DirStart;
    vec4 cFog3EndDamp;
    vec4 _envReserved0;
    vec4 cMainLightDir;       // xyz: world-space direction of the main (sun) light
    vec4 _envReserved1;
    vec4 cSHAr;               // ambient SH, R channel: xyz = linear, w = DC
    vec4 cSHAg;               // ambient SH, G channel
    vec4 cSHAb;               // ambient SH, B channel
    vec4 cSHBr;               // ambient SH, R channel quadratic terms
    vec4 cSHBg;               // ambient SH, G channel quadratic terms
    vec4 cSHBb;               // ambient SH, B channel quadratic terms
    vec4 cSHC;                // ambient SH, rgb = (x^2 - z^2) coefficients
    vec4 _envReserved2[256];
} env;
layout(std140) uniform fp_c6
{
    float opacity;
    float gsys_xlu_zprepass_alpha;
    float refract_intensity;
    float refract_depth_fog_start;
    vec4 refract_depth_fog_end;
    vec4 refract_depth_fog_color;
    float refract_opa_start;
    float refract_opa_end;
    float refract_caustics_pow;
    float refract_caustics_intens;
    vec4 refract_caustics_color;
    float refract_caustics_uv_scale;
    float refract_caustics_uv_height_scale;
    float glass_thickness;
    float thick_glass_tex_coord_offset;
    float thick_glass_opacity_offset;
    float model_dither_normal_power;
    float model_dither_time_shift_amount_z;
    float model_dither_time_shift_amount_w;
    vec4 albedo_color;
    float team_color_blend;
    float team_color_blend_alpha;
    float multi_normal_weight;
    float roughness;
    float metalness;
    float fabric_tone_param;
    float fabric_peak_offset;
    float fabric_peak_stop;
    float fabric_peak_intens;
    float fabric_noise_intens;
    float fabric_noise_decay;
    float envmap_mip_bias;
    vec4 emission_intensity;
    vec4 emission_color;
    float emission_normalize_offset;
    float night_emission_intensity_y;
    float night_emission_intensity_z;
    float night_emission_intensity_w;
    vec4 night_emission_color;
    float emission_intens_in_envmap;
    float emission_intens_not_in_envmap;
    float night_emission_intens_in_envmap;
    float saturation_in_envmap;
    float saturation_offset_in_envmap;
    float inner_light_diffusivity;
    float inner_light_min_clamp_z;
    float inner_light_min_clamp_w;
    float inner_light_pos_offset_x;
    float inner_light_pos_offset_y;
    float inner_light_pos_offset_z;
    float env_param_emission_material_gain;
    float transmission_rate;
    float scattering_rate;
    float edge_transmission_power_z;
    float edge_transmission_power_w;
    vec4 transmission_color_backlight;
    float transmission_attenu_pos;
    float transmission_attenu_range;
    float transmission_attenu_min;
    float light_occlude_check_len;
    vec4 gsys_bake_st0;
    vec4 gsys_bake_st1;
    vec4 bake_tex_st0;
    vec4 bake_tex_st1;
    vec2 col_paint_uv_offset;
    float two_color_complement_paint_intensity;
    float two_comp_paint_team;
    float thr_comp_paint_intens_alpha;
    float thr_comp_paint_intens_bravo;
    float thr_comp_paint_intens_charlie;
    float comp_paint_texcoord_offset;
    float comp_paint_norm_intens;
    float comp_paint_lame_scale;
    float rainbow_ink_hue_range;
    float rainbow_ink_hue_offset;
    float private_paint_thickness;
    float private_paint_thickness_ratio;
    float ink_sheet_edge_radius;
    float display_team_type;
    float kebaink_marble_noise_scroll_anim;
    float kebaink_marble_noise_density_y;
    float kebaink_marble_noise_density_z;
    float kebaink_marble_noise_density_w;
    vec4 kebaink_multi_color;
    float kebaink_marble_roughness;
    float kebaink_fur_roughness;
    float kebaink_mask_threshold;
    float kebaink_mask_vertex_noise_density;
    float kebaink_mask_vertex_noise_scale;
    float kebaink_mask_vertex_fin_threshold;
    float kebaink_mask_noise_density;
    float kebaink_mask_noise_scale;
    float kebaink_core_pos_x;
    float kebaink_core_pos_y;
    float kebaink_core_pos_z;
    float kebaink_core_radius;
    float kebaink_mask_from_core_dist;
    float kebaink_mask_from_core_noise_y;
    float kebaink_mask_from_core_noise_z;
    float kebaink_mask_from_core_noise_w;
    vec4 kebaink_darken_color;
    float kebaink_darken_dist_offset;
    float kebaink_darken_dist_noise;
    float kebaink_wave_mask_dist_offset;
    float kebaink_wave_mask_gradation;
    float kebaink_wave_intens;
    float kebaink_wave_freq;
    float kebaink_wave_phase_z;
    float kebaink_wave_phase_w;
    vec2 comp_paint_random_uv;
    float scatter_distance_z;
    float scatter_distance_w;
    vec4 scattering_color;
    vec4 fabric_blend_color;
    float fabric_facing_gain;
    float fabric_facing_bias;
    float manual_fresnel_z;
    float manual_fresnel_w;
    vec4 manual_fresnel_color;
    float film_transmission_power;
    float film_transmission_rate_y;
    float film_transmission_rate_z;
    float film_transmission_rate_w;
    vec4 under_film_color;
    float edge_light_intens;
    float edge_light_power_y;
    float edge_light_power_z;
    float edge_light_power_w;
    vec4 edge_light_color;
    float edge_main_light_ratio_dark;
    float edge_main_light_ratio_bright;
    float indirect_intens;
    float spec_glaze_intens;
    vec4 specular_intensity;
    vec4 specular_color;
    float specular_roughness;
    float planer_ref_spec_offset;
    float planer_ref_normal_intens;
    float reflector_intens;
    float reflector_scroll;
    float reflector_power;
    float reflector_uniform_norm_coef_z;
    float reflector_uniform_norm_coef_w;
    vec4 flake_color;
    float flake_roughness;
    float big_lame_appearance;
    float big_lame_epsilon;
    float micro_flakes_diffuse_rate;
    float micro_flakes_specular_rate;
    float flake_rare_intens;
    float flake_rare_appearance;
    float flake_rare_offset;
    float flake_rare_shadow_intes;
    float emission_eq_bokeh;
    float emission_eq_channel_a;
    float emission_eq_channel_b;
    float emission_eq_channel_c;
    float emission_eq_channel_d;
    float emission_eq_channel_e;
    float emission_fader_channel_a;
    float emission_fader_channel_b;
    float emission_fader_channel_c;
    float emission_fader_channel_d;
    float emission_fader_channel_e;
    float mirror_material_eff;
    float aniso_pararell_speculality;
    float aniso_perpendicular_speculality;
    float aniso_specular_bokeh;
    float aniso_normal_mask;
    float decal_depth_range;
    float decal_depth_alpha_coef;
    float polygonal_light_mask;
    float monochrome_filter_saturation;
    float phantom_edge_offset_in_material;
    float parallax_height;
    float parallax_height_darken;
    float parallax_height_darken_trans;
    float parallax_occlusion_height;
    float parallax_occlusion_ray_clamp;
    float parallax_occlusion_map_uv_scale;
    float parallax_occulusion_height_darken;
    float parallax_occlusion_shadow;
    float parallax_fur_dilate;
    float fur_dilate_edge_angle;
    float parallax_occlusion_fur_fin_height_scale;
    float parallax_occlusion_fur_fin_height_offset;
    float parallax_fur_occlusion_off_dist_offset;
    float parallax_fur_fin_off_dist_offset;
    float fur_fin_length;
    float fur_fin_density;
    float fur_fin_gravity;
    float fur_fin_offset;
    float fur_fin_cull_angle;
    float fur_fin_depth_write;
    float fur_shell_length;
    float fur_shell_density;
    float fur_shell_thickness;
    float fur_shell_gravity;
    float fur_shell_offset_z;
    float fur_shell_offset_w;
    vec4 fur_shell_root_color;
    float fur_shell_sharp_amount;
    float interior_map_depth;
    float interior_map_x_depth_offset;
    float interior_map_y_depth_offset;
    vec2 interior_map_uv_aspect;
    float interior_map_uv_scale_z;
    float interior_map_uv_scale_w;
    float interior_map_shadow_scale;
    float interior_map_night_shadow_scale;
    float interior_map_shadow_gradation_coef;
    float interior_map_emission_intens;
    float interior_map_night_emission_intens;
    float interior_map_night_color_scale;
    float interior_mask_depth_z;
    float interior_mask_depth_w;
    vec4 interior_mask_night_color;
    float interior_mask_night_color_intens;
    float vat_anim_pos;
    float graffiti_normal_rate_z;
    float graffiti_normal_rate_w;
    vec4 graffiti_back_color;
    float graffiti_back_color_rate;
    float holo_graffiti_normal_scale;
    float holo_graffiti_hue_z;
    float holo_graffiti_hue_w;
    vec4 holo_graffiti_base_color;
    float holo_graffiti_rainbow_scale;
    float holo_graffiti_color_intensity;
    float holo_graffiti_rainbow_width;
    float holo_graffiti_rainbow_blur_width;
    vec4 mantaking_shadow_color;
    float holo_model_normal_scale;
    float holo_model_rainbow_scale;
    float holo_model_color_intensity;
    float holo_model_rainbow_width;
    float holo_model_rainbow_blur_width;
    float camera_xlu_draw_bottom_fade_out_height;
    float camera_xlu_draw_bottom_fade_in_height;
    float field_lame_uv_scale;
    float field_lame_intensity;
    float field_lame_rare_intensity;
    float field_lame_normal_random_rate_z;
    float field_lame_normal_random_rate_w;
    vec4 field_lame_color;
    vec4 const_color0;
    vec4 const_color1;
    vec4 const_color2;
    float const_value0;
    float const_value1;
    float const_value2;
    float const_value3;
    float const_value4;
    float const_value5;
    float const_value6;
    float const_value7;
    float const_value8;
    float const_value9_y;
    float const_value9_z;
    float const_value9_w;
    vec4 const_vector0;
    vec4 const_vector1;
    vec4 const_vector2;
    vec4 const_vector3;
    vec4 my_team_color;
    vec4 my_team_color_bright;
    vec4 my_team_color_dark;
    vec4 my_team_color_hue_bright;
    vec4 my_team_color_hue_bright_half;
    vec4 my_team_color_hue_dark;
    vec4 my_team_color_hue_dark_half;
    vec4 my_team_color_hue_complement;
    vec4 my_alpha_team_color;
    vec4 my_bravo_team_color;
    vec4 my_charlie_team_color;
    vec4 my_alpha_team_color_hue_bright;
    vec4 my_bravo_team_color_hue_bright;
    vec4 my_charlie_team_color_hue_bright;
    vec4 my_alpha_team_color_hue_dark;
    vec4 my_bravo_team_color_hue_dark;
    vec4 my_charlie_team_color_hue_dark;
    vec4 player_skin_color;
    vec4 team_flag;
    mat2x4 tex_mtx0;
    mat2x4 tex_mtx1;
    mat2x4 tex_mtx2;
    float tex_repetition_noise_division_num;
    float tex_repetition_noise_scale;
    float tex_repetition_angle_deg;
    float model_y_fog_up_start;
    vec4 model_y_fog_up_end;
    vec4 model_y_fog_up_color;
    float model_y_fog_up_dir_x;
    float model_y_fog_up_dir_y;
    float model_y_fog_up_dir_z;
    float model_y_fog_down_start;
    vec4 model_y_fog_down_end;
    vec4 model_y_fog_down_color;
    float model_y_fog_down_dir_x;
    float model_y_fog_down_dir_y;
    float model_y_fog_down_dir_z;
    float dynamic_vert_alpha_coeff;
    float fade_dither_alpha;
    float fade_dither_manual_alpha;
    float camera_xlu_alpha_z;
    float camera_xlu_alpha_w;
    vec4 fade_player_pos;
    float map_min_height;
    float map_max_height_y;
    float map_max_height_z;
    float map_max_height_w;
    vec4 map_ink_gradation_rate;
    vec4 map_min_gradation_color;
    vec4 map_max_gradation_color;
    vec4 map_ink_color_bright_offset;
    float shell_fur_scale;
    float actor_instance_id_y;
    float actor_instance_id_z;
    float actor_instance_id_w;
    vec4 mantaking_parameter0;
    vec4 is_use_graffiti_bake_paint_uv;
    vec4 camera_xlu_moire_param0;
    vec4 camera_xlu_moire_param1;
    float bone_spehremap_transmission_thickness;
    float bone_spehremap_ao_y;
    float bone_spehremap_ao_z;
    float bone_spehremap_ao_w;
    vec4 instancing_skinning_param0;
    vec4 instancing_skinning_param1;
    vec4 output_clamp_value;
    vec4 depth_silhouette_color;
    float height_draw_mode;
    float gsys_alpha_test_ref_value_y;
    float gsys_alpha_test_ref_value_z;
    float gsys_alpha_test_ref_value_w;
} mat;
layout(std140) uniform fp_c7
{
    vec4 _matReserved0[18];
    vec4 cInkSurface;         // x: ink roughness, y: paint normal blend, z: paint emission gain
    vec4 cInkSpecular;        // x: specular floor (F0), y: phase offset, z: normal flatten
    vec4 cPaintEdge;          // x: coverage threshold (floor), y: threshold (wall), z: scroll time
    vec4 cPaintCoverage;      // w: coverage bias
    vec4 cPaintScroll;        // zw: paint UV scroll direction
    vec4 _matReserved1[13];
    vec4 cShadowParams0;      // projected/baked shadow blend factors
    vec4 cShadowParams1;
    vec4 _matReserved2[7];
    vec4 cInkColorMix;        // y: dark color blend, z: paint strength scale
    vec4 _matReserved3[2];
    vec4 cInkCustom0;         // ink-type specific parameters (see ink branches)
    vec4 cInkMode;            // x: ink type id, yzw: ink-type specific
    vec4 cInkCustom1;
    vec4 cInkCustom2;
    vec4 _matReserved4;
    vec4 cFogRange;           // x: fog density exponent scale, w: fog0 blend
    vec4 cFogDensity;         // x: distance fog exponent, z: fog tint scale
    vec4 cFogColor;           // xyz: fog color
    vec4 _matReserved5[16];
    vec4 cInkCustom3;
    vec4 _matReserved6[4];
    vec4 cInkCustom4;
    vec4 cInkCustom5;
    vec4 cInkCustom6;
    vec4 _matReserved7[3];
    vec4 cInkCustom7;
    vec4 _matReserved8[12];
};
layout(std140) uniform fp_c8
{
    vec4 alphaTeamColor;
    vec4 alphaTeamColorBright;
    vec4 alphaTeamColorDark;
    vec4 alphaTeamColorHueBright;
    vec4 alphaTeamColorHueDark;
    vec4 alphaTeamColorHueComplement;
    vec4 alphaTeamColorHueBrightHalf;
    vec4 bravoTeamColor;
    vec4 bravoTeamColorBright;
    vec4 bravoTeamColorDark;
    vec4 bravoTeamColorHueBright;
    vec4 bravoTeamColorHueDark;
    vec4 bravoTeamColorHueComplement;
    vec4 bravoTeamColorHueBrightHalf;
    vec4 charlieTeamColor;
    vec4 charlieTeamColorBright;
    vec4 charlieTeamColorDark;
    vec4 charlieTeamColorHueBright;
    vec4 charlieTeamColorHueDark;
    vec4 charlieTeamColorHueComplement;
    vec4 charlieTeamColorHueBrightHalf;
    vec4 _user3_rest[11];
} user3;
layout(std140) uniform fp_c10
{
    vec4 cLightClusterData[576];
};
uniform sampler2D albedoTex;
uniform sampler2D normalTex;
uniform sampler2D roughnessTex;
uniform sampler2D metalnessTex;
uniform sampler2D projShadowTex;
uniform sampler2D shadowPrepassTex;
uniform sampler2D bakeShadow0Tex;
uniform sampler2D bakeShadow1Tex;
uniform sampler2D cubeMapTex;
uniform sampler2D user4Tex;
uniform sampler2D paintCoverageTex;
uniform sampler2D user1Tex;
uniform sampler2D user2Tex;
uniform sampler2D lightPrepassTex;
in vec4 fTexCoords01;
in vec4 fNormals;
in vec4 fTangents;
in vec4 fWorldPos;
in vec4 fViewDirection;
in vec4 fClipPos;
in vec4 fPaintUV;
in vec4 fPaintData;
in vec4 fShadowUV;
in vec4 fPaintUVXform;
in vec4 fBakeUV;
out vec4 oFragColor;

// Hue/saturation/value to RGB, hue as a per-channel triangle wave.
vec3 hsvToRgb(float hue, float sat, float value)
{
    vec3 ramp = fract(hue + vec3(1.0, 0.666666687, 0.333333343)) * 6.0 - 3.0;
    vec3 chroma = clamp(abs(ramp) - 1.0, 0.0, 1.0) - 1.0;
    return (chroma * clamp(sat, 0.0, 1.0) + 1.0) * value;
}

// RGB to hue/saturation/value. The hue comes out negated for
// blue-dominant colors; take abs() before feeding it back to hsvToRgb.
// Quirk kept from the original: whenever red is NOT the max channel the
// hue base collapses to -1/3, regardless of whether green or blue wins.
// The Grandfest glitter (ink 9) uses the standard select instead, so its
// hue extraction stays inline in that branch - do not unify the two.
vec3 rgbToHsv(vec3 c)
{
    float selGB = (c.g >= c.b) ? 1.0 : 0.0;
    float maxGB = (c.g - c.b) * selGB + c.b;
    float minGB = (c.b - c.g) * selGB + c.g;
    float hueBase = 0.666666687 - selGB;
    float selR = (c.r >= maxGB) ? 1.0 : 0.0;
    float value = (c.r - maxGB) * selR + maxGB;
    float minR = (maxGB - c.r) * selR + c.r;
    float hue = (selGB - 1.0) - hueBase * selR + hueBase;
    float chroma = value - min(minGB, minR);
    hue = (1.0 / (chroma * 6.0 + 1e-10)) * (minR - minGB) + hue;
    float sat = chroma * (1.0 / (value + 1e-10));
    return vec3(hue, sat, value);
}

// Cubic B-spline filtering on top of hardware bilinear: the four cubic
// weights per axis fold into two taps, four samples total.
vec3 textureBicubic(sampler2D tex, vec2 uv, int lod)
{
    vec2 texSize = vec2(textureSize(tex, lod));
    vec2 invSize = 1.0 / texSize;
    vec2 pixel = uv * texSize - 0.5;
    vec2 pixelFloor = floor(pixel);
    vec2 f = pixel - pixelFloor;

    vec2 t1 = 1.0 - f;
    vec2 t2 = 2.0 - f;
    vec2 t3 = 3.0 - f;
    vec2 c1 = t1 * (t1 * t1);
    vec2 c2 = t2 * (t2 * t2);
    vec2 p1 = c2 * -4.0 + t3 * (t3 * t3);
    vec2 p2 = c1 * -4.0 + c2;
    vec2 p3 = c1 * 6.0 + p1;
    vec2 w01 = c1 + p2;
    vec2 w23 = -p3 - c1 - p2 + 6.0;

    vec2 sample01 = (p2 * 0.166666701) * (1.0 / (w01 * 0.166666701)) + pixelFloor;
    vec2 sample23 = (w23 * 0.166666701) * (1.0 / ((p3 + w23) * 0.166666701)) + pixelFloor;
    vec2 uv01 = invSize * (sample01 - 0.5);
    vec2 uv23 = invSize * (sample23 + 1.5);
    vec2 blend = (w01 * 0.166666701) * (1.0 / ((w01 + (p3 + w23)) * 0.166666701));

    vec3 tap33 = texture(tex, vec2(uv23.x, uv23.y)).rgb;
    vec3 tap13 = texture(tex, vec2(uv01.x, uv23.y)).rgb;
    vec3 tap11 = texture(tex, vec2(uv01.x, uv01.y)).rgb;
    vec3 tap31 = texture(tex, vec2(uv23.x, uv01.y)).rgb;
    vec3 row23 = mix(tap33, tap13, blend.x);
    vec3 row01 = mix(tap31, tap11, blend.x);
    return mix(row23, row01, blend.y);
}

// One float from the packed light-cluster table (an array of vec4s
// addressed at float granularity).
float clusterFloat(int idx)
{
    return cLightClusterData[idx >> 2][idx & 3];
}

vec3 clusterVec3(int idx)
{
    return vec3(clusterFloat(idx), clusterFloat(idx + 1), clusterFloat(idx + 2));
}

// Per-light record accessors: light attributes live in parallel tables
// inside the cluster data, 4 floats per light record.
vec3  lightColor(int i)    { return clusterVec3(1600 + i * 4); }
float lightInvRange(int i) { return clusterFloat(1720 + i * 4); }
float lightFalloff(int i)  { return clusterFloat(1721 + i * 4); }
float lightSpotCos(int i)  { return clusterFloat(1722 + i * 4); }
float lightSpotExp(int i)  { return clusterFloat(1723 + i * 4); }
vec3  lightPosition(int i) { return clusterVec3(1840 + i * 4); }
vec3  lightSpotDir(int i)  { return clusterVec3(1960 + i * 4); }
bool  lightIsSpot(int i)   { return floatBitsToInt(clusterFloat(2080 + i * 4)) != 0; }

// Schlick fresnel weight in spherical-gaussian form,
// 2^(c * (-5.55473c - 6.98316)) ~= (1 - c)^5. Callers fold it into
// F = F0 + (1 - F0) * weight.
float fresnelWeight(float cosTheta)
{
    return exp2(cosTheta * (cosTheta * -5.554729939 + -6.98316002));
}

// GGX microfacet lobe shared by the sun, the cluster lights and the
// ink sparkle passes (inputs pre-clamped by the callers):
//   D   = a / (NdotH^2 * (a^2 - 1) + 1)            with a = roughness^2
//   vis = 1 / ((k + NdotV*(1-k)) * (k + NdotL*(1-k))),
//         k = (roughness*0.5 + 0.5)^2 * 0.5
// Returns D^2 * vis; callers apply fresnel and the 1/(4pi) factor.
float ggxSpecular(float NdotH, float NdotV, float NdotL, float roughness)
{
    float alphaSq = roughness * roughness;
    float kBase = roughness * 0.5 + 0.5;
    float k = kBase * 0.5 * kBase;
    float geoV = k * (-NdotV) + NdotV;
    float geoL = k * (-NdotL) + NdotL;
    float NdotHsq = NdotH * NdotH;
    float dNumer = (alphaSq * alphaSq) * NdotHsq + (-NdotHsq);
    float dPart = alphaSq * (1.0 / max(dNumer + 1.0, 9.999999939e-09));
    return ((1.0 / (k + geoV)) * (1.0 / (k + geoL))) * (dPart * dPart);
}

// Perturbs base normal n by a 2-channel tangent-space sample in the
// frame (t, b); the z component is reconstructed from unit length.
vec3 perturbNormal(vec3 n, vec3 t, vec3 b, vec2 s)
{
    float z = sqrt(clamp(1.0 - dot(s, s), 0.0, 1.0));
    return normalize(t * s.x + b * s.y + n * z);
}

// Sin-product hash shared by the glitter and sparkle randomizers.
float hash11(float x)
{
    return fract(sin(x) * 43758.5469);
}

// Second-order spherical-harmonic irradiance of a world-space normal.
vec3 shIrradiance(vec3 n)
{
    vec3 lin = vec3(dot(n, env.cSHAr.xyz), dot(n, env.cSHAg.xyz), dot(n, env.cSHAb.xyz));
    vec4 quadBasis = vec4(n.x * n.y, n.y * n.z, n.z * n.z, n.z * n.x);
    vec3 quad = vec3(dot(quadBasis, env.cSHBr), dot(quadBasis, env.cSHBg), dot(quadBasis, env.cSHBb));
    float diff = n.x * n.x + (-(n.y * n.y));
    return vec3(
        diff * env.cSHC.x + ((lin.r + env.cSHAr.w) + quad.r),
        diff * env.cSHC.y + ((lin.g + env.cSHAg.w) + quad.g),
        diff * env.cSHC.z + ((lin.b + env.cSHAb.w) + quad.b));
}

void main()
{
    // ------------------------------------------------------------------
    // Interpolated inputs
    // ------------------------------------------------------------------
    vec2 texUV = fTexCoords01.xy;
    vec3 rawNorm = fNormals.xyz;                    // world-space geometry normal (unnormalized)
    vec3 geomNormal = normalize(rawNorm);
    vec4 tangent = fTangents;                       // xyz: world tangent, w: bitangent sign
    vec3 paintTangent = fPaintUVXform.xyz;          // world direction of the paint-space U axis
    vec3 eyeDir = -normalize(fViewDirection.xyz);   // surface -> camera
    float viewDepth = fWorldPos.w;                  // view-space depth
    vec2 screenUV = (fClipPos.xy / fClipPos.w) * vec2(0.5, -0.5) + 0.5;

    // Mirrored geometry provides a flipped paint UV set in zw.
    vec2 paintUV = (fPaintData.w < 0.0) ? fPaintUV.zw : fPaintUV.xy;
    vec2 paintST = vec2(paintUV.x, 1.0 - paintUV.y);

    // ------------------------------------------------------------------
    // Material textures
    // ------------------------------------------------------------------
    vec3 albedo = texture(albedoTex, texUV).rgb;
    vec2 normalMapXY = texture(normalTex, texUV).rg;
    float roughnessMap = texture(roughnessTex, texUV).r;
    float metalnessMap = texture(metalnessTex, texUV).r;

    // ------------------------------------------------------------------
    // Paint coverage
    //
    // The coverage texture stores one channel per team (r: alpha,
    // g: bravo, b: charlie). Two extra taps, offset along the scrolling
    // paint axes, provide a finite-difference coverage gradient that
    // shapes the paint surface normal at ink edges.
    // ------------------------------------------------------------------
    vec2 covScroll = cPaintEdge.z * cPaintScroll.zw;
    vec3 cov = texture(paintCoverageTex, paintST).rgb;
    vec3 covV = texture(paintCoverageTex, vec2(paintST.x, paintST.y + covScroll.y)).rgb;
    vec3 covU = texture(paintCoverageTex, vec2(paintST.x + covScroll.x, paintST.y)).rgb;

    float maxCov = max(cov.r, max(cov.g, cov.b));
    // One-hot mask of whichever team's paint is on top.
    vec3 teamTopMask = clamp((cov - maxCov + 1e-4) * 1e8, 0.0, 1.0);
    // Soft "bravo wins over alpha" mask, used by a few ink styles.
    float bravoOverAlpha = clamp((cov.g - cov.r) * 1000.0, 0.0, 1.0);

    float paintAmount = maxCov - cPaintCoverage.w;
    float paintStrength = clamp(paintAmount, 0.0, 1.0);
    bool isPainted = min(paintStrength * 1000.0, 1.0) > 0.5;

    // ------------------------------------------------------------------
    // Surface normal (normal map over TBN) and paint normal
    // ------------------------------------------------------------------
    vec3 surfBitangent = cross(geomNormal, tangent.xyz);
    vec3 surfNormal = perturbNormal(geomNormal, tangent.xyz, surfBitangent * tangent.w, normalMapXY);

    // Bitangent of the paint projection; left unnormalized when degenerate.
    vec3 paintBitangent = cross(paintTangent, geomNormal);
    float paintBitanLenSq = dot(paintBitangent, paintBitangent);
    if (sqrt(paintBitanLenSq) > 0.1)
    {
        paintBitangent *= inversesqrt(paintBitanLenSq);
    }

    // Coverage gradient of the winning team's paint along each paint axis.
    float covGradV = dot(cov - covV, teamTopMask);
    float covGradU = dot(cov - covU, teamTopMask);
    vec3 paintPerturb = (covGradU * cInkSurface.y) * paintTangent
                      + (covGradV * cInkSurface.y) * paintBitangent;
    vec3 paintNormal = normalize(geomNormal + paintPerturb);

    // Blend between the mapped surface normal and the paint normal:
    // up-facing surfaces use cPaintEdge.x, walls use cPaintEdge.y.
    float paintNormalBlend = mix(cPaintEdge.y, cPaintEdge.x, clamp(geomNormal.y, 0.0, 1.0));

    // ------------------------------------------------------------------
    // Team ink colors
    // ------------------------------------------------------------------
    vec3 teamColorBright = user3.alphaTeamColorHueBright.xyz * teamTopMask.x
                         + user3.bravoTeamColorHueBright.xyz * teamTopMask.y
                         + user3.charlieTeamColorHueBright.xyz * teamTopMask.z;

    
    // ------------------------------------------------------------------
    // Ink Type enum
    // ------------------------------------------------------------------
    int inkType = int(trunc(cInkMode.x));

    // ------------------------------------------------------------------
    // Base surface attributes (paint overrides the base material)
    // ------------------------------------------------------------------
    float metalness;
    float roughness;
    vec3 emission = vec3(0.0);
    vec3 curAlbedo = albedo;
    vec3 shadingNormal = surfNormal;
    if (isPainted)
    {
        vec3 teamColorDark = user3.alphaTeamColorHueDark.xyz * teamTopMask.x
                           + user3.bravoTeamColorHueDark.xyz * teamTopMask.y
                           + user3.charlieTeamColorHueDark.xyz * teamTopMask.z;
        vec3 inkDarkColor = teamColorDark * cInkColorMix.y;
        float inkColorBlend = clamp(paintStrength * cInkColorMix.z, 0.0, 1.0);
        vec3 paintedAlbedo = mix(inkDarkColor, teamColorBright, inkColorBlend);

        shadingNormal = mix(surfNormal, paintNormal, paintNormalBlend);
        curAlbedo = paintedAlbedo;
        emission = paintedAlbedo * cInkSurface.z;
        metalness = 0.0;
        roughness = cInkSurface.x;

        // Side Order bravo ink lets the metallic base material show through.
        if (inkType == 2 && teamTopMask.y > 0.5)
        {
            float shine = exp2(paintStrength * cInkCustom1.y * 14.4269505);
            float baseShow = clamp(shine - shine * cInkCustom1.x, 0.0, 1.0);
            vec3 dielectricAlbedo = albedo - albedo * metalnessMap;
            curAlbedo = mix(paintedAlbedo, dielectricAlbedo, baseShow);
        }
    }
    else
    {
        metalness = metalnessMap;
        roughness = max(roughnessMap, 1e-4);
    }

    vec3 dielectric = curAlbedo - curAlbedo * metalness;
    vec3 specF0 = mix(vec3(0.04), curAlbedo, metalness);

    // ------------------------------------------------------------------
    // Shadowing
    // ------------------------------------------------------------------
    vec2 shadowMapUV = fShadowUV.xy / fShadowUV.z;
    float shadowMapVal = texture(bakeShadow0Tex, shadowMapUV).r;
    vec2 screenShadow = texture(bakeShadow1Tex, screenUV).rg;
    vec2 bakeShadow = texture(projShadowTex, fBakeUV.xy).rg;
    vec4 shadowPrepassSample = texture(shadowPrepassTex, fBakeUV.zw);
    float shadowPrepassA = shadowPrepassSample.w;
    float shadowProjW = fShadowUV.w;

    float shadowBase = ctx.cProjParams.x - ctx.cProjParams.x * shadowMapVal;
    float shadowDistFade = clamp(viewDepth + cShadowParams0.z, 0.0, 1.0);
    float screenShadowTerm = max(1.0 - screenShadow.x, 1.0 - screenShadow.y) * shadowDistFade;
    float bakeTermA = cShadowParams1.x - cShadowParams1.x * bakeShadow.x;
    float bakeTermB = cShadowParams0.y - cShadowParams0.y * bakeShadow.y;
    float bakeMaskA = clamp(clamp(bakeTermA + cShadowParams1.y, 0.0, 1.0) * shadowProjW, 0.0, 1.0);
    float bakeMaskB = clamp(clamp(bakeTermB + cShadowParams0.x, 0.0, 1.0) * shadowProjW, 0.0, 1.0);
    float totalShadow = bakeMaskA * cShadowParams1.w + (bakeMaskB + (screenShadowTerm + shadowBase));
    float lightAccessibility = clamp(1.0 - totalShadow, 0.0, 1.0);
    float projShadowVis = clamp(1.0 - bakeMaskA, 0.0, 1.0);

    // ------------------------------------------------------------------
    // Sun light
    // ------------------------------------------------------------------
    float NdotL = dot(shadingNormal, -env.cMainLightDir.xyz);
    float NdotV = dot(eyeDir, shadingNormal);
    vec3 sunDiffuse = clamp(NdotL, 0.0, 1.0) * env.cLightColor.xyz;

    // ------------------------------------------------------------------
    // Working registers for the ink styles and lighting stages below
    // ------------------------------------------------------------------
    float stSpecScaleFactor;
    vec3 shNorm;
    vec3 iblAcc;
    bool wasPainted = false;
    bool inkBranchDone = false;

    // Legacy register: the shading normal with components permuted as
    // (world Y, world Z, world X), as the ink stages consume it.
    vec3 curNorm = shadingNormal.yzx;

    vec3 stNorm = curNorm;
    float stNdotV = NdotV;
    float stRoughness = roughness;
    vec3 stDielec = dielectric;
    vec3 stEmit = emission;
    vec3 stLight = sunDiffuse;
    float stNdotL = NdotL;
    vec3 stExtra = vec3(0.0);
    vec3 st2Norm = curNorm;
    float st2NdotV = NdotV;
    float st2Roughness = roughness;
    vec3 st2Reflect = specF0.rbg;
    vec3 st2Dielec = dielectric;
    vec3 st2Emit = emission;
    vec3 st2Light = sunDiffuse;
    float st2NdotL = NdotL;
    vec3 stSpecAcc = vec3(0.0);
    vec3 stInkEmit = vec3(0.0);
    vec3 stInkEx = vec3(0.0);
    if (isPainted)
    {
        // Ink specular response defaults: flat F0 and a normal flattened
        // toward "straight up" by cInkSpecular.z (in permuted yzx space).
        vec3 inkReflect = vec3(cInkSpecular.x);
        vec3 inkNorm = vec3((curNorm.x - 1.0) * cInkSpecular.z + 1.0, curNorm.yz * cInkSpecular.z);
        stSpecScaleFactor = 1.0;
        if (inkType == 3)
        {
            // --- Oil ink ---------------------------------------------
            // Interfering sine waves over the paint UVs pick a band of
            // the user1 gradient; the band brightens F0 and the diffuse
            // color on the bravo-ink side only.
            float strengthBias = paintStrength * cInkCustom0.y;
            vec2 wavePhase = paintST * cInkCustom0.x * cInkCustom0.x + strengthBias + cInkSpecular.y;
            float band = clamp(sin(wavePhase.x) * sin(wavePhase.y), 0.0, 1.0);
            vec3 oil = bravoOverAlpha * texture(user1Tex, vec2(0.5, band)).rgb;
            inkReflect = oil * cInkCustom0.z + cInkSpecular.x;
            stDielec = oil * cInkCustom0.w + dielectric;
        }
        else if (inkType == 4)
        {
            // --- Keba ink --------------------------------------------
            // Sine-distorted, time-scrolled noise lookup remapped through
            // the user2 gradient. Alpha side keeps the plain ink color.
            if (bravoOverAlpha > 0.5)
            {
                float strengthBias = paintStrength * cInkCustom0.y;
                vec2 wavePhase = paintST * cInkCustom1.x + cInkSpecular.y;
                float wave = sin(wavePhase.x) * sin(wavePhase.y);
                float scrollTime = fract(cInkCustom1.z + cInkSpecular.y);
                vec2 noiseUV = paintST * cInkCustom0.x + strengthBias
                             + wave * cInkCustom1.y
                             + scrollTime * vec2(paintTangent.y, paintBitangent.y);
                float gradientPos = texture(user1Tex, noiseUV).r;
                stDielec = texture(user2Tex, vec2(0.5, gradientPos)).rgb;
            }
        }
        else if (inkType == 5)
        {
            // --- Spookyfest ink --------------------------------------
            // Noise-driven darkening that creeps in with coverage, plus
            // a dimmed emission.
            float strengthBias = paintStrength * cInkCustom0.y;
            vec2 noiseUV = paintST * cInkCustom0.x + strengthBias;
            float fade = clamp((paintStrength - cInkCustom0.w) * (1.0 / cInkCustom0.w), 0.0, 1.0);
            float darken = texture(user1Tex, noiseUV).r * fade * cInkCustom0.z;
            stDielec = dielectric - dielectric * darken;
            stEmit = emission - emission * cInkSpecular.y;
        }
        else if (inkType == 6)
        {
            // --- Frostyfest ink --------------------------------------
            // Snow: the team color is re-hued twice (a body color and
            // an edge color), a coverage ramp blends between them, and
            // a per-texel sparkle layer adds view-dependent glints.

            // Team color in HSV terms.
            float teamValue = max(teamColorBright.r, max(teamColorBright.g, teamColorBright.b));
            float teamChroma = teamValue - min(teamColorBright.r, min(teamColorBright.g, teamColorBright.b));
            float teamSat = teamChroma * (1.0 / (teamValue + 1e-10));

            // Per-team custom hues for the two recolorings.
            float bodyHue = dot(teamTopMask, cInkCustom2.xyz);
            float edgeHue = dot(teamTopMask, cInkCustom4.xyz);
            vec3 bodyColor = hsvToRgb(bodyHue, teamSat + cInkCustom1.z,
                                      clamp(teamValue + cInkCustom1.w, 0.0, 1.0));
            vec3 edgeColor = hsvToRgb(edgeHue, teamSat + cInkCustom2.w,
                                      clamp(teamValue + cInkCustom4.w, 0.0, 1.0));

            // Coverage ramp: 1 at thin paint (edges), 0 deep inside.
            float rampInvWidth = 1.0 / cInkCustom1.x;
            float rampCenter = 0.5 * cInkCustom1.x + cInkCustom0.x;
            float edgeBlend = clamp(clamp(rampCenter, 0.0, 1.0) * rampInvWidth
                                  - paintStrength * rampInvWidth, 0.0, 1.0);

            // Sparkle normal map with a manual, stochastically dithered
            // mip selection (user1's alpha is the dither threshold).
            // COMPAT: The mip level source is stubbed to 0
            vec2 sparkleUV = paintST * cInkMode.y * cInkCustom5.y;
            int ink6_lodInt = int(((0.0) * 256.0));
            float sparkleMip = max(0.0, min(float(ink6_lodInt & 65535) * 0.00234375009, 6.0));
            float sparkleMipFloor = floor(sparkleMip);
            vec4 sparkle0 = texture(user1Tex, sparkleUV * exp2(-sparkleMipFloor));
            vec3 sparkle1 = texture(user1Tex, sparkleUV * exp2(-(sparkleMipFloor + 1.0))).rgb;
            vec3 sparkleNorm = sparkle0.xyz;
            if (sparkle0.w < sparkleMip - sparkleMipFloor)
            {
                sparkleNorm = sparkle1;
            }

            // Perturb the shading normal by the sparkle normal map.
            vec3 sparkleBitan = cross(shadingNormal, tangent.xyz) * tangent.w;
            vec3 glintNormal = perturbNormal(shadingNormal, tangent.xyz, sparkleBitan, sparkleNorm.rg);

            // Half vectors toward and away from the sun, for front-lit
            // and back-lit glint lobes.
            vec3 sunDir = env.cMainLightDir.xyz;
            vec3 halfBack = normalize(eyeDir + sunDir);
            vec3 halfFront = normalize(eyeDir - sunDir);
            // GGX-style glint lobes (Schlick fresnel on the half
            // vectors, colored F0 from the body color).
            float NdotV_g = max(dot(eyeDir, glintNormal), 1e-8);
            float NdotHf = max(dot(glintNormal, halfFront), 1e-8);
            float NdotHb = max(dot(glintNormal, halfBack), 1e-8);
            float NdotLf = max(dot(glintNormal, -sunDir), 1e-8);
            float NdotLb = max(dot(glintNormal, sunDir), 1e-8);
            float VdotHf = max(dot(eyeDir, halfFront), 1e-8);
            float VdotHb = max(dot(eyeDir, halfBack), 1e-8);

            float visRough = cInkCustom0.z * 0.5 + 0.5;
            float visK = (visRough * 0.5) * visRough;
            float alpha2 = cInkCustom0.z * cInkCustom0.z;
            float alpha4 = alpha2 * alpha2;
            float visView = 1.0 / (visK + (NdotV_g - NdotV_g * visK));
            float ndfFront = alpha2 / max(NdotHf * NdotHf * alpha4 - NdotHf * NdotHf + 1.0, 1e-8);
            float ndfBack = alpha2 / max(NdotHb * NdotHb * alpha4 - NdotHb * NdotHb + 1.0, 1e-8);
            float specFront = (visView * (1.0 / (visK + (NdotLf - NdotLf * visK)))) * (ndfFront * ndfFront);
            float specBack = (visView * (1.0 / (visK + (NdotLb - NdotLb * visK)))) * (ndfBack * ndfBack);

            vec3 glintF0 = bodyColor * cInkCustom0.y;
            float fresnelFront = fresnelWeight(VdotHf);
            float fresnelBack = fresnelWeight(VdotHb);
            float frontSel = (NdotL > 0.0) ? 1.0 : 0.0;
            float backSel = (NdotL < 0.0) ? 1.0 : 0.0;
            vec3 glintSpec = (glintF0 + fresnelFront * (1.0 - glintF0)) * (specFront * frontSel)
                           + (glintF0 + fresnelBack * (1.0 - glintF0)) * (specBack * backSel);

            // Sparkles only live in a round core inside each texel of
            // the sparkle texture, fade with view angle and distance,
            // and are gated by the user2 ramp.
            float rampSample = texture(user2Tex, sparkleUV * (1.0 / cInkCustom5.y) * cInkCustom5.x).r;
            float rampOffset = rampSample * cInkMode.w + cInkMode.z;
            vec2 texelPos = fract(sparkleUV * vec2(textureSize(user1Tex, 0))) * 2.0 - 1.0;
            bool sparkleCore = sqrt(dot(texelPos, texelPos)) < 0.9499999881;
            float facing = dot(eyeDir, vec3(ctx.cViewInv[0].z, ctx.cViewInv[1].z, ctx.cViewInv[2].z));
            float glintGate = clamp(facing * 4.6875 + 4.375, 0.0, 1.0)
                            * (clamp(sparkleNorm.b - rampOffset, 0.0, 1.0)
                            * clamp(viewDepth * 0.01999999955 + 1.0, 0.0, 1.0));
            if (!sparkleCore)
            {
                glintGate = 0.0;
            }
            vec3 glint = glintSpec * glintGate * 0.0795774683;   // 1 / 4pi

            // Blend factors: edges take the edge color, the interior
            // takes the body color where the ramp allows it.
            float bodyAmount = clamp(1.0 - rampOffset, 0.0, 1.0) * cInkCustom0.w;
            float bodyBlend = bodyAmount - edgeBlend * bodyAmount;

            vec3 edgeSpecular = edgeColor - edgeColor * cInkMode.y;
            vec3 specBias = (edgeColor - 0.0399999991) * cInkMode.y - cInkSpecular.x;
            inkReflect = edgeBlend * (specBias + 0.0399999991) + cInkSpecular.x;
            stDielec = mix(mix(dielectric, edgeSpecular, edgeBlend), bodyColor, bodyBlend);
            stEmit = mix(mix(emission, edgeColor * cInkCustom1.y, edgeBlend),
                         bodyColor * cInkSurface.z, bodyBlend);
            stExtra = glint - glint * edgeBlend;
        }
        else if (inkType == 7)
        {
            // --- Springfest ink --------------------------------------
            // Candy sprinkles. A sprinkle sheet (user2: x hue shift,
            // y highlight, z mask) hue-shifts the ink color per
            // sprinkle, the matching normal map (user1) embosses each
            // piece, and highlights blend toward a fixed accent color.

            // Each team samples a different part of the sprinkle sheet.
            vec2 sprinkleUV = (paintST + 0.5 * teamTopMask.yz) * cInkCustom0.x;
            vec2 sprinkleNorm = texture(user1Tex, sprinkleUV).rg;
            vec3 sprinkle = texture(user2Tex, sprinkleUV).rgb;

            // Current ink diffuse / emission in HSV.
            vec3 dielecHsv = rgbToHsv(dielectric);
            vec3 emitHsv = rgbToHsv(emission);

            // Hue shift from the sprinkle sheet, scaled per team
            // (sheet value decoded from [0,1] to roughly [-1,1]).
            float shiftScale = dot(teamTopMask, vec3(cInkCustom0.y, cInkMode.w, cInkCustom1.w));
            float hueShift = sprinkle.x * 2.007874012 - 1.00787401;
            vec3 dielecShifted = hsvToRgb(shiftScale * hueShift + abs(dielecHsv.x),
                                          dielecHsv.y, dielecHsv.z);
            vec3 emitShifted = hsvToRgb(shiftScale * hueShift + abs(emitHsv.x),
                                        emitHsv.y, emitHsv.z);

            // Sprinkle mask, gated by coverage.
            float sprinkleBlend = sprinkle.z * clamp((paintStrength - cInkCustom0.z) * (1.0 / cInkCustom0.w), 0.0, 1.0);

            // Highlight overlay, then blend over the base ink.
            vec3 sprinkledDielec = mix(dielecShifted, cInkCustom1.xyz, sprinkle.y);
            vec3 sprinkledEmit = mix(emitShifted, cInkCustom1.xyz, sprinkle.y);
            stDielec = mix(dielectric, sprinkledDielec, sprinkleBlend);
            stEmit = mix(emission, sprinkledEmit * cInkMode.y, sprinkleBlend);

            // Embossed normal along the paint axes.
            vec3 embossed = perturbNormal(rawNorm, paintTangent, cross(rawNorm, paintTangent), sprinkleNorm);
            vec3 inkNormal = normalize(mix(shadingNormal, embossed, sprinkleBlend));
            float inkNdotL = dot(inkNormal, -env.cMainLightDir.xyz);

            stNorm = inkNormal.yzx;
            inkNorm = inkNormal.yzx;
            stNdotV = dot(eyeDir, inkNormal);
            stRoughness = mix(roughness, cInkMode.z, sprinkleBlend);
            stLight = clamp(inkNdotL, 0.0, 1.0) * env.cLightColor.xyz;
            stNdotL = inkNdotL;
        }
        else if (inkType == 8)
        {
            // --- Summerfest ink --------------------------------------
            // Water caustics. A flow map (user2.rg) warps the UVs of a
            // caustics texture (user1, bicubic-filtered), which is
            // gamma-decoded and added to diffuse and emission in a
            // per-team color, gated by a blotch mask (user2.r).
            vec2 flowUV = (paintST + cInkSpecular.y * vec2(cInkCustom1.w, cInkCustom2.w)) * cInkCustom0.z;
            vec2 flow = texture(user2Tex, flowUV).rg;
            vec2 causticsUV = (paintST + cInkSpecular.y * vec2(cInkMode.z, cInkMode.w)
                         + flow * cInkCustom0.w) * cInkCustom0.x;

            // COMPAT: Caustics mip source is stubbed to 0 
            int ink8_lodInt = int(((0.0) * 256.0));
            int causticsLod = int(trunc(float(uint(ink8_lodInt)) * 0.00390625));
            vec3 causticsTex = textureBicubic(user1Tex, causticsUV, causticsLod);
            vec3 caustics = exp2(log2(abs(causticsTex)) * 0.454545438);   // ^(1/2.2)

            float fade = clamp((paintStrength - cInkCustom4.w) * (1.0 / cInkCustom4.w), 0.0, 1.0);
            float rampMask = clamp(texture(user2Tex, paintST * cInkCustom5.x).r
                                 - cInkCustom5.z * (1.0 / (cInkCustom5.y - cInkCustom5.z)), 0.0, 1.0) * cInkMode.y;
            vec3 causticsColor = cInkCustom1.xyz * teamTopMask.x
                           + cInkCustom2.xyz * teamTopMask.y
                           + cInkCustom4.xyz * teamTopMask.z;
            vec3 burst = causticsColor * (caustics * (fade * rampMask));

            stDielec = burst + dielectric;
            stEmit = burst + emission;
        }
        else if (inkType == 10)
        {
            // --- Grandfest Plaza Ink -----------------------------
            // Screen-space Voronoi mosaic: a jittered grid of cells,
            // warped by a distortion texture, where each cell picks a
            // random hue. The mosaic replaces the ink color wherever
            // no team hue is flagged for the covering paint.
            float teamHue = dot(teamTopMask, mat.team_flag.xyz);

            // Cell-space sample position, warped by the distortion map.
            vec2 cellPos = texUV * cInkCustom0.x + cInkMode.zw;
            vec2 warp = texture(user1Tex, texUV * cInkCustom0.y).rg;
            vec2 samplePos = warp * cInkCustom0.z + cellPos;
            vec2 baseCell = floor(cellPos);

            // Nearest jittered feature point among the 3x3 neighbouring
            // cells decides which cell this pixel belongs to.
            float bestDist = 9999.0;
            float cellHash = 0.0;
            for (int dx = -1; dx <= 1; dx++)
            {
                for (int dy = -1; dy <= 1; dy++)
                {
                    vec2 cell = baseCell + vec2(float(dx), float(dy));

                    // Cheap per-cell jitter hash built on 1/pi and 1/e.
                    vec2 seed = cell * vec2(0.3183099031, 0.3678793907)
                              + vec2(0.367879391, 0.318309903);
                    float jitter = fract((seed.x + seed.y) * (seed.x * seed.y));
                    vec2 feature = cell + fract(jitter * vec2(5.09295845, 5.88607025));

                    vec2 toFeature = samplePos - feature;
                    float dist2 = dot(toFeature, toFeature);
                    if (dist2 < bestDist)
                    {
                        bestDist = dist2;
                        cellHash = hash11(dot(cell, vec2(12.9898005, 78.23300171)));
                    }
                }
            }

            // Random hue per cell, applied to diffuse and emission,
            // fading up with paint coverage.
            vec3 cellDielec = hsvToRgb(cellHash, cInkCustom1.x, cInkCustom0.w);
            vec3 cellEmit = hsvToRgb(cellHash, cInkCustom1.x, cInkMode.y);
            float fade = clamp(paintStrength * cInkColorMix.z, 0.0, 1.0);
            vec3 mosaic = mix(cellEmit * cInkColorMix.y, cellDielec, fade);

            if (teamHue > 0.1000000015)
            {
                // A real team hue is painted here: keep the normal ink.
                stDielec = dielectric;
                stEmit = emission;
            }
            else
            {
                stDielec = mosaic;
                stEmit = mosaic * cInkSurface.z;
            }
            inkBranchDone = true;
        }
        else
        {
            // Perspective-correct tangent frame and view depth, shared
            // with the fallback branch below.
            float ink9_invFragW = 1.0 / gl_FragCoord.w;
            vec4 ink9_tan = (fTangents * gl_FragCoord.w) * ink9_invFragW;
            float ink9_worldW = (fWorldPos.w * gl_FragCoord.w) * ink9_invFragW;
            if (inkType == 9)
            {
                // --- Grandfest ink ---------------------------------------
                // Rainbow glitter. A fine glitter sheet (user1: xy
                // normal, z mask) bumps the surface, a swirl overlay
                // (user2.r) shapes where the effect shows, and the ink
                // color is re-tinted at a fixed saturation/brightness
                // (keeping only its hue). Rare glitter texels get a
                // strong specular glint.

                // The swirl overlay drives all the blends below.
                float swirl = texture(user2Tex, paintST * cInkCustom1.w).r;

                // COMPAT: Glitter sheet LOD source is stubbed to 0.
                int ink9_lodInt = int(((0.0) * 256.0));
                float mipLevel = max(0.0, min(float(ink9_lodInt & 65535) * 0.00234375009, 6.0));
                float mipFloor = floor(mipLevel);
                vec2 glitterUV = paintST * 500.0;
                vec4 glitter0 = texture(user1Tex, glitterUV * exp2(-mipFloor));
                vec3 glitter = texture(user1Tex, glitterUV * exp2(-(mipFloor + 1.0))).rgb;
                // Dithered mip blend: the sheet's alpha picks the tap.
                if (glitter0.a >= mipLevel - mipFloor)
                {
                    glitter = glitter0.rgb;
                }

                // Team-weighted parameters: ink color, "pop" color and
                // glint gate sharpness.
                vec3 inkColor = cInkCustom0.xyz * teamTopMask.x
                              + cInkCustom1.xyz * teamTopMask.y
                              + cInkCustom4.xyz * teamTopMask.z;
                vec3 popColor = cInkMode.yzw * teamTopMask.x
                              + cInkCustom2.xyz * teamTopMask.y
                              + cInkCustom5.xyz * teamTopMask.z;
                float sparkleSharp = cInkCustom2.w * teamTopMask.x
                                   + cInkCustom6.z * teamTopMask.y
                                   + cInkCustom6.w * teamTopMask.z;

                // Ink color over the base paint (soft swirl fade), then
                // the pop color on top (smoothstepped swirl).
                float inkFade = clamp((swirl - cInkCustom4.w) * (1.0 / cInkCustom5.w), 0.0, 1.0);
                float popRamp = clamp((swirl - cInkCustom6.x) * (1.0 / cInkCustom6.y), 0.0, 1.0);
                float popFade = (popRamp * popRamp) * (3.0 - popRamp * 2.0);
                vec3 inkBlend = mix(dielectric, inkColor, inkFade);
                inkBlend = mix(inkBlend, popColor, popFade);

                // Hue of the blended ink color. This branch carries its own
                // RGB->hue selection tree: unlike rgbToHsv() it takes the
                // hue base from whichever channel actually is the max, so
                // blue-dominant colors resolve differently. Do not unify.
                float selGB = (inkBlend.g >= inkBlend.b) ? 1.0 : 0.0;
                float maxGB = (inkBlend.g - inkBlend.b) * selGB + inkBlend.b;
                float minGB = (inkBlend.b - inkBlend.g) * selGB + inkBlend.g;
                float hueBase = 0.666666687 - selGB;
                float selR = (inkBlend.r >= maxGB) ? 1.0 : 0.0;
                float inkValue = (inkBlend.r - maxGB) * selR + maxGB;
                float minR = (maxGB - inkBlend.r) * selR + inkBlend.r;
                float chroma = inkValue - min(minGB, minR);
                float inkHue = ((selGB - 1.0) - hueBase) * selR + hueBase;
                inkHue = (1.0 / (chroma * 6.0 + 1.00000001e-10)) * (minR - minGB) + inkHue;

                // Re-tint at fixed saturation / brightness.
                vec3 glitterColor = hsvToRgb(abs(inkHue), cInkCustom7.y, cInkCustom7.z);

                // Glitter normal: perturb the surface normal by the
                // sheet's xy in the mesh tangent frame.
                vec3 tangentDir = ink9_tan.xyz;
                vec3 bitanDir = ink9_tan.w * cross(shadingNormal, tangentDir);
                vec3 glitterNorm = perturbNormal(shadingNormal, tangentDir, bitanDir, glitter.rg);

                // Glint geometry: half vector between the view ray and the
                // main light (the light direction flips on back faces).
                bool isBackFace = NdotL < 0.0;
                vec3 glintLightDir = isBackFace ? env.cMainLightDir.xyz : -env.cMainLightDir.xyz;
                vec3 glintHalfDir = normalize(eyeDir + glintLightDir);
                float VdotH = max(dot(eyeDir, glintHalfDir), 9.999999939e-09);
                float NdotH = max(dot(glitterNorm, glintHalfDir), 9.999999939e-09);
                float glintNdotL = max(dot(glitterNorm, glintLightDir), 9.999999939e-09);
                float glintNdotV = max(dot(eyeDir, glitterNorm), 9.999999939e-09);

                // Schlick fresnel and a fixed-roughness GGX lobe.
                float fresnel = fresnelWeight(VdotH);
                float geoV = glintNdotV * 0.6879500151 + 0.312049955;
                float geoL = glintNdotL * 0.6879500151 + 0.312049955;
                float ndf = (1.0 / max((NdotH * NdotH) * -0.8868350387 + 1.0, 9.999999939e-09)) * 0.336399972;
                float glintBrdf = ((1.0 / geoV) * (1.0 / geoL)) * (ndf * ndf);

                // Rare glitter pieces (hash of the sheet texel) get their
                // tint boosted 100x before the fresnel term.
                float sparkleHash = hash11(glitter.r * 78.23300171 + glitter.b * 12.9898005);
                vec3 sparkleColor = glitterColor;
                if (sparkleHash <= 0.004999999888)
                {
                    sparkleColor = glitterColor * 100.0;
                }
                vec3 sparkleF0 = sparkleColor * cInkCustom7.w;
                vec3 sparkleFresnel = sparkleF0 * (-fresnel) + vec3(fresnel);

                // Where the effect applies: a gate from the swirl overlay,
                // faded out with view distance.
                float distFade = clamp(ink9_worldW * 0.01999999955 + 1.0, 0.0, 1.0);
                float sparkleGate = (-clamp((swirl - cInkCustom0.w) * sparkleSharp, 0.0, 1.0)) + 1.0;
                float tintMask = (distFade * clamp(0.5 - sparkleGate, 0.0, 1.0)) * cInkCustom7.x;
                float glintMask = distFade * clamp(glitter.b - sparkleGate, 0.0, 1.0);

                // Tint diffuse / emission toward the glitter color and
                // emit the glint layer.
                stDielec = mix(inkBlend, glitterColor, tintMask);
                vec3 emitBase = inkBlend * cInkSurface.z;
                stEmit = mix(emitBase, glitterColor * cInkSurface.z, tintMask);
                stExtra = (glintMask * ((sparkleF0 + sparkleFresnel) * glintBrdf)) * 7.95774698;
                inkBranchDone = true;
            }
            else if (true) // sdodr ink originally only applied to alpha, but we want for all teams
            {
                // --- Side Order ink ----------------------------------
                // Glitter ink. A fine glitter sheet (user1, mesh tangent
                // frame, manually mip-selected) sits under everything.
                // On top, the per-subtex overlay map (user2) shapes the
                // response: gb tilt the view-facing term and r marks
                // where the glitter is damped or boosted.

                vec2 inkUV = paintST * cInkMode.y;

                // COMPAT: Sparkle sheet LOD source stubbed as 0.
                int ink2_fb_lodInt = int(((0.0) * 256.0));
                float mipLevel = max(0.0, min(float(ink2_fb_lodInt & 65535) * 0.00234375009, 6.0));
                float mipFloor = floor(mipLevel);
                vec4 sparkle0 = texture(user1Tex, inkUV * exp2(-mipFloor));
                vec3 sparkle = texture(user1Tex, inkUV * exp2(-(mipFloor + 1.0))).rgb;
                if (sparkle0.a >= mipLevel - mipFloor)
                {
                    sparkle = sparkle0.rgb;
                }

                // Overlay tilt, decoded from [0,1] to ~[-1,1], and the
                // damp/boost mask back at base paint scale.
                vec2 overlayNorm = texture(user2Tex, inkUV * cInkCustom5.x).gb * 2.007874012 - 1.00787401;
                float detailScale = 1.0 / cInkMode.y;
                float detail = texture(user2Tex, (inkUV * detailScale) * cInkCustom2.x).r;

                // The overlay tilt lives in the paint frame; it only
                // tilts the facing term that drives the color blend.
                vec3 paintAxis = (fPaintUVXform.xyz * gl_FragCoord.w) * ink9_invFragW;
                vec3 overlayWorld = perturbNormal(shadingNormal, paintAxis, cross(shadingNormal, paintAxis), overlayNorm);
                float overlayFacing = -dot(eyeDir, overlayWorld);

                // Sparkle normal in the mesh tangent frame.
                vec3 tangentDir = ink9_tan.xyz;
                vec3 bitanDir = ink9_tan.w * cross(shadingNormal, tangentDir);
                vec3 sparkleNorm = perturbNormal(shadingNormal, tangentDir, bitanDir, sparkle.rg);

                // Half vector against the main light (flipped on back
                // faces) and the standard dot products.
                bool isBackFace = NdotL < 0.0;
                vec3 glintLightDir = isBackFace ? env.cMainLightDir.xyz : -env.cMainLightDir.xyz;
                vec3 glintHalfDir = normalize(eyeDir + glintLightDir);
                float VdotH = max(dot(eyeDir, glintHalfDir), 9.999999939e-09);
                float NdotH = max(dot(sparkleNorm, glintHalfDir), 9.999999939e-09);
                float NdotLs = max(dot(sparkleNorm, glintLightDir), 9.999999939e-09);
                float NdotVs = max(dot(eyeDir, sparkleNorm), 9.999999939e-09);

                // GGX specular, roughness driven by cInkCustom0.w.
                float specBrdf = ggxSpecular(NdotH, NdotVs, NdotLs, cInkCustom0.w);
                float fresnel = fresnelWeight(VdotH);

                // Hash-selected sparkle texels boost the spec color.
                float sparkleHash = hash11(sparkle.r * 78.23300171 + sparkle.b * 12.9898005);
                vec3 glitterSpecColor = cInkCustom3.xyz;
                if (sparkleHash <= cInkCustom4.w)
                {
                    glitterSpecColor = cInkCustom0.x * cInkCustom3.xyz;
                }
                vec3 sparkleF0 = glitterSpecColor * cInkCustom0.y;
                vec3 sparkleFresnel = sparkleF0 * (-fresnel) + vec3(fresnel);

                // Specular gates from the damp/boost mask, paint
                // coverage and the overlay facing term.
                float fadeFactor = clamp((paintStrength - cInkMode.w) * (1.0 / cInkMode.z), 0.0, 1.0);
                float detailOffset = detail * cInkCustom2.z + cInkCustom2.y;
                float detailMaskLo = clamp(0.5 - detailOffset, 0.0, 1.0);
                float detailMaskHi = clamp(sparkle.b - detailOffset, 0.0, 1.0);
                float specWLo = (-detailMaskLo) + cInkCustom2.w;
                float specWHi = (-detailMaskHi) + cInkCustom2.w;
                float specWLoFaded = fadeFactor * (-specWLo) + specWLo;
                float specWHiFaded = fadeFactor * (-specWHi) + specWHi;
                float facingBias = (clamp(overlayFacing * 0.5 + 0.5, 0.0, 1.0)) * cInkCustom5.y + (-cInkCustom5.y);
                float facingGain = facingBias + 1.0;

                // Distance and view-plane fades.
                float distFade = clamp(ink9_worldW * 0.01999999955 + 1.0, 0.0, 1.0);
                float viewZ = dot(eyeDir, vec3(ctx.cViewInv[0].z, ctx.cViewInv[1].z, ctx.cViewInv[2].z));
                float viewFade = clamp(viewZ * cInkCustom1.z + cInkCustom1.w, 0.0, 1.0);

                // Blend diffuse / emission toward the iridescent color
                // and emit the sparkle layer.
                float colorBlend = (distFade * ((facingGain * (detailMaskLo + specWLoFaded)) * viewFade)) * cInkCustom0.z;
                float specTotal = distFade * ((facingGain * (detailMaskHi + specWHiFaded)) * viewFade);
                stDielec = mix(dielectric, cInkCustom3.xyz, colorBlend);
                stEmit = mix(emission, cInkCustom3.xyz, colorBlend);
                stExtra = (specTotal * ((sparkleF0 + sparkleFresnel) * specBrdf)) * 0.0795774683;
            }
        }
        inkBranchDone = false;

        // --------------------------------------------------------------
        // Painted: hand the ink result to the lighting stage
        // --------------------------------------------------------------
        // Reflection of the view ray for the environment probe. The cube
        // map itself is stubbed out, but the direction and face-selection
        // terms stay so the minimap probe can be plugged back in.
        float reflFacing = -dot(eyeDir, stNorm.zxy);
        float reflDirX = (reflFacing * stNorm.z) * -2.0 + (-eyeDir.x);
        float reflDirY = (reflFacing * stNorm.x) * -2.0 + (-eyeDir.y);
        float reflDirZ = (reflFacing * stNorm.y) * -2.0 + (-eyeDir.z);
        float invMaxRefl = 1.0 / max(abs(reflDirZ), max(abs(reflDirX), abs(reflDirY)));
        vec3 cubeSample = vec3(0.0);    // environment cube stubbed out

        // Split-sum fresnel from the BRDF LUT (user4).
        vec2 brdfLut = texture(user4Tex, vec2(max(stNdotV, 9.999999939e-09), -stRoughness)).rg;
        vec3 fresnelIbl = inkReflect * brdfLut.x + vec3(brdfLut.y);
        iblAcc = fresnelIbl * cubeSample;

        // Lighting inputs. Note the historical channel swap on the
        // reflectance (rbg) -- the lighting stage below compensates.
        shNorm = inkNorm;
        st2Norm = stNorm;
        st2NdotV = stNdotV;
        st2Roughness = stRoughness;
        st2Reflect = inkReflect.rbg;
        st2Dielec = stDielec;
        st2Emit = stEmit;
        st2Light = stLight;
        st2NdotL = stNdotL;
        stSpecAcc = stExtra;
        wasPainted = true;
    }
    else
    {
        // --------------------------------------------------------------
        // Unpainted: environment probe terms for the base surface
        // --------------------------------------------------------------
        // Reflection direction and cube mip index are kept (the probe is
        // stubbed out) so the minimap hookup can be restored.
        float NdotV_u = dot(eyeDir, curNorm.zxy);
        float reflFacingU = -NdotV_u;
        vec3 reflDir_u = (curNorm.zxy * reflFacingU) * -2.0 + (-eyeDir);
        float invMaxRefl_u = 1.0 / max(abs(reflDir_u.z), max(abs(reflDir_u.x), abs(reflDir_u.y)));
        float cubeMipFloat = cos(roughness * 3.14159274) * -5.5 + 5.5;
        uint cubeMipUint = uint(max(roundEven(roundEven(cubeMipFloat)), 0.0));
        uint cubeMipIdx = clamp(cubeMipUint, 0u, 0xFFFFu);
        vec3 cubeSampleU = vec3(0.0);   // environment cube stubbed out

        vec2 brdfLutU = texture(user4Tex, vec2(max(NdotV_u, 9.999999939e-09), -roughness)).rg;
        vec3 fresnelU = specF0.rbg * brdfLutU.x + vec3(brdfLutU.y);
        shNorm = curNorm;
        iblAcc = cubeSampleU * fresnelU;

        // Right at the edge of painted regions (negative coverage) the
        // specular is damped based on how much the paint normal faces
        // the sun, scaled by the surface "up" component.
        float paintNdotL = dot(paintNormal, -env.cMainLightDir.xyz);
        float upDamp = paintNdotL * (-curNorm.x) + curNorm.x;
        float dampBlend = upDamp * clamp(paintAmount * -7.0, 0.0, 1.0) + (-upDamp);
        stSpecScaleFactor = clamp(dampBlend + 1.159999967, 0.0, 1.0);
    }
    wasPainted = false;
    // ------------------------------------------------------------------
    // Sun specular + spherical-harmonics ambient for the shaded surface
    // ------------------------------------------------------------------
    float fragWinv = 1.0 / gl_FragCoord.w;
    vec3 worldPos = fWorldPos.xyz * gl_FragCoord.w * fragWinv;
    float shadowUV_corr = fShadowUV.w * gl_FragCoord.w * fragWinv;

    // World normals for lighting; the sh*/st2Norm* registers hold them
    // permuted as (Y, Z, X), so swizzle back to world (X, Y, Z).
    vec3 shN = shNorm.zxy;
    vec3 litN = st2Norm.zxy;

    // --- Sun GGX specular ---------------------------------------------
    vec3 sunHalfDir = normalize(eyeDir - env.cMainLightDir.xyz);
    float sunVdotH = max(dot(eyeDir, sunHalfDir), 9.999999939e-09);
    float sunNdotH = max(dot(litN, sunHalfDir), 9.999999939e-09);
    float st2NdotV_clamped = max(st2NdotV, 9.999999939e-09);
    float st2NdotL_raw = dot(litN, -env.cMainLightDir.xyz);
    float st2NdotL_clamped = max(st2NdotL_raw, 9.999999939e-09);

    float sunBrdf = ggxSpecular(sunNdotH, st2NdotV_clamped, st2NdotL_clamped, st2Roughness);
    float sunFresnel = fresnelWeight(sunVdotH);

    // --- Second-order SH irradiance ------------------------------------
    vec3 shTotal = shIrradiance(shN);

    // --- Sun + ambient irradiance --------------------------------------
    // st2Reflect was stored channel-swapped (rbg); the swizzles below
    // undo it so diffuse albedo and the specular sum use true RGB.
    vec3 diffAlbedo = st2Dielec * (-st2Reflect.rbg) + st2Dielec;
    vec3 sunFresnelC = st2Reflect * (-sunFresnel) + vec3(sunFresnel);
    vec3 sunSpecSum = (sunFresnelC + st2Reflect).rbg;
    vec3 specIrrad = (sunSpecSum * sunBrdf) * 0.07957746834 + (st2Dielec * 0.318309873);

    // Sun diffuse uses the prepass shadow term; ambient adds the SH
    // irradiance (clamped) plus the (stubbed) IBL accumulators.
    vec3 shadowX32 = (shadowUV_corr * (shadowPrepassSample.xyz * shadowPrepassA)) * 32.0;
    vec3 diffLit = diffAlbedo * shadowX32 + (diffAlbedo * max(vec3(0.0), shTotal) + iblAcc);

    // --- Light-cluster lookup (20x20 XZ grid over the stage) -----------
    int gridX = max(0, min(int(trunc((worldPos.x - cLightClusterData[550].x) * cLightClusterData[551].x)), 19));
    int gridZ = max(0, min(int(trunc(((worldPos.z - cLightClusterData[550].z) * cLightClusterData[551].z))), 19));
    int gridCell = gridZ * 20 + gridX;
    float lightListEntry = clusterFloat(gridCell * 4);
    int lightBits = floatBitsToInt(lightListEntry);

    // Accumulators for the cluster-light walk below.
    vec3 accLit = diffLit;
    vec3 accLtEmit = st2Emit;
    if (lightBits != -1)
    {
        // --------------------------------------------------------------
        // Cluster lights: the cell entry packs up to 4 light indices,
        // 8 bits each. Index 30 marks the stage's "extra light" (handled
        // after the walk); any index >= 30 terminates the list.
        // --------------------------------------------------------------
        int curLightIdx = 0;
        for (int i = 0; i < 4; i++)
        {
            curLightIdx = lightBits & 255;
            if (uint(curLightIdx) >= 30u)
            {
                break;
            }

            vec3 lightPos = lightPosition(curLightIdx);
            float lightRange = lightInvRange(curLightIdx);
            float lightFalloffExp = lightFalloff(curLightIdx);
            vec3 litColor = lightColor(curLightIdx);
            bool isSpot = lightIsSpot(curLightIdx);

            // Direction and distance from the fragment to the light.
            vec3 lightVec = lightPos - worldPos;
            float lightDistSq = dot(lightVec, lightVec);
            vec3 lightDir = lightVec * inversesqrt(lightDistSq);

            // Standard GGX inputs against the lit normal.
            vec3 halfDir = normalize(eyeDir + lightDir);
            float NdotH = max(dot(litN, halfDir), 9.999999939e-09);
            float VdotH = max(dot(eyeDir, halfDir), 9.999999939e-09);
            float NdotL_raw = dot(litN, lightDir);
            float NdotL = max(NdotL_raw, 9.999999939e-09);

            float lightBrdf = ggxSpecular(NdotH, st2NdotV_clamped, NdotL, st2Roughness);
            float fresnelWt = fresnelWeight(VdotH);

            // Diffuse + specular response (st2Reflect stored rbg).
            vec3 fresnelC = st2Reflect * (-fresnelWt) + vec3(fresnelWt);
            vec3 specSum = (fresnelC + st2Reflect).rbg;
            vec3 fullSpec = st2Dielec * 0.3183098733 + (specSum * lightBrdf) * 0.0795774683;

            // Range falloff (pow via exp2/log2) and optional spot cone.
            float distAttenRaw = (lightRange * (-(sqrt(lightDistSq))) + 1.0);
            float spotAtten = 1.0;
            if (isSpot)
            {
                vec3 spotDir = lightSpotDir(curLightIdx);
                float spotInnerCos = lightSpotCos(curLightIdx);
                float spotFalloff = lightSpotExp(curLightIdx);
                float spotDot = dot(lightDir, -spotDir);
                spotAtten = (exp2(((log2((clamp(((spotDot + (-spotInnerCos)) * (1.0 / ((-spotInnerCos) + 1.0))), 0.0, 1.0)))) * spotFalloff)));
            }
            float lightAtten = (clamp(NdotL_raw, 0.0, 1.0)) * ((exp2((lightFalloffExp * (log2((clamp(distAttenRaw, 0.0, 1.0))))))) * spotAtten);

            // Accumulate the lit response and the raw ink light term.
            vec3 lit = lightAtten * litColor;
            accLit = lit * fullSpec + accLit;
            stInkEmit = lit + stInkEmit;

            lightBits = int(uint(lightBits) >> 8);
        }

        // Index 30 in the list flags that this cell sees the extra light.
        if (curLightIdx == 30)
        {
            // ----------------------------------------------------------
            // "Extra light": one stage-wide capsule light with its own
            // shadow map. Parameters live in cluster table rows 557-565:
            //   557 center, 558 axis, 559 color (+intensity in w),
            //   560 falloff/cone, 561 emitter offset / end fade,
            //   562-565 shadow view-projection matrix rows.
            // ----------------------------------------------------------
            vec4 exCenter = cLightClusterData[557];   // capsule center
            vec4 exAxis = cLightClusterData[558];     // capsule axis (y: tilt)
            vec4 exColor = cLightClusterData[559];    // rgb * w = light color
            vec4 exAtten = cLightClusterData[560];    // x invRange, y falloffExp,
                                                      // z cosCone, w spotExp
            vec4 exShape = cLightClusterData[561];    // x width, y sideScale,
                                                      // z axialStart, w axialRange

            // Project into the light's shadow map (rows 562-565 hold the
            // shadow view-projection matrix).
            float shadowU = dot(worldPos, cLightClusterData[562].xyz);
            float shadowV = dot(worldPos, cLightClusterData[563].xyz);
            float shadowZ = dot(worldPos, cLightClusterData[564].xyz);
            float shadowW = dot(worldPos, cLightClusterData[565].xyz);
            float shadowInvW = 1.0 / (shadowW + cLightClusterData[565].w);
            float shadowUVu = (shadowU + cLightClusterData[562].w) * shadowInvW * 0.5 + 0.5;
            float shadowUVv = (shadowV + cLightClusterData[563].w) * shadowInvW * 0.5 + 0.5;
            float shadowUVz = (shadowZ + cLightClusterData[564].w) * shadowInvW * 0.5 + 0.5;

            // Planar (XZ) offset from the light center, and from the
            // emitter point pushed back along the axis by width/sideScale.
            vec2 delta = worldPos.xz - exCenter.xz;
            float invSideScale = 1.0 / exShape.y;
            vec2 adjCenter = (exShape.x * exAxis.xz) * (-invSideScale) + exCenter.xz;
            vec2 toAdj = adjCenter - worldPos.xz;
            float adjDistSq = toAdj.y * toAdj.y + toAdj.x * toAdj.x;

            // The emitter floats above the floor: its height grows with
            // the planar distance along the axis' negative y.
            float heightOffset = sqrt(adjDistSq) * (-exAxis.y);
            float fullInvDist = inversesqrt(toAdj.y * toAdj.y + (heightOffset * heightOffset + toAdj.x * toAdj.x));
            vec3 adjDir = vec3(toAdj.x, heightOffset, toAdj.y) * fullInvDist;

            // Which side of the axis the fragment is on, and how far
            // along it (front half uses real distance falloff).
            float crossXZ = delta.x * exAxis.z;
            float crossZX = delta.y * exAxis.x;
            float gridFacing = (-((crossZX < crossXZ) ? 1.0 : 0.0)) + ((crossZX > crossXZ) ? 1.0 : 0.0) * exShape.y;
            float distSq = delta.y * delta.y + delta.x * delta.x;
            float invDist = inversesqrt(distSq);
            float dotDirAxis = (delta.y * invDist) * exAxis.z + (delta.x * invDist) * exAxis.x;
            float projAxis = delta.y * exAxis.z + delta.x * exAxis.x;
            float axialBlendX = exAtten.z * exAxis.x - gridFacing * exAxis.z;
            float axialBlendZ = gridFacing * exAxis.x + exAtten.z * exAxis.z;
            float facingDot = delta.x * axialBlendZ - delta.y * axialBlendX;
            bool isBehindAxis = dotDirAxis < exAtten.z;
            bool isForward = projAxis > 0.0;
            bool isBackward = projAxis <= 0.0;

            // GGX response against the lit normal.
            vec3 halfDir2 = normalize(eyeDir + adjDir);
            float NdotH2 = max(dot(litN, halfDir2), 9.999999939e-09);
            float VdotH2 = max(dot(eyeDir, halfDir2), 9.999999939e-09);
            float NdotL2_raw = dot(litN, adjDir);
            float NdotL2 = max(NdotL2_raw, 9.999999939e-09);
            float lightBrdf2 = ggxSpecular(NdotH2, st2NdotV_clamped, NdotL2, st2Roughness);
            float fresnelWt2 = fresnelWeight(VdotH2);
            vec3 fresnelC2 = st2Reflect * (-fresnelWt2) + vec3(fresnelWt2);
            vec3 specSum2 = (fresnelC2 + st2Reflect).rbg;
            vec3 fullSpec2 = st2Dielec * 0.3183098733 + (lightBrdf2 * specSum2) * 0.0795774683;

            // Attenuation: axial end fade, behind-the-axis side fade,
            // distance falloff and a cone term on the planar direction.
            float endAtten = clamp((projAxis - exShape.z) * (-(1.0 / exShape.w)) + 1.0, 0.0, 1.0);
            float endAttenSq = endAtten * endAtten;
            float endAttenSmooth = endAttenSq * (-endAttenSq) + 1.0;
            float endFade = endAttenSmooth * endAttenSmooth;

            float facingFactor = clamp((1.0 / exShape.x) * abs(facingDot), 0.0, 1.0);
            float facingFacSq = facingFactor * facingFactor;
            float facingSmooth = facingFacSq * (-facingFacSq) + 1.0;
            float sideFade = isBehindAxis ? (facingSmooth * facingSmooth) : 1.0;

            float effectDist = isForward ? sqrt(distSq) : 1.0;
            float distAttenRaw2 = effectDist * (-exAtten.x) + 1.0;
            float distFade = exp2(log2(clamp(distAttenRaw2, 0.0, 1.0)) * exAtten.y);

            float planarInvLen = inversesqrt(adjDir.z * adjDir.z + adjDir.x * adjDir.x);
            float spotDot2 = (planarInvLen * adjDir.z) * (-exAxis.z) + (planarInvLen * adjDir.x) * (-exAxis.x);
            float coneRamp = clamp((spotDot2 - exAtten.z) * (1.0 / ((-exAtten.z) + 1.0)), 0.0, 1.0);
            float coneFade = exp2(log2(coneRamp) * exAtten.w);

            float totalAtten = min(endFade, sideFade) * (distFade * coneFade);
            float NdotLxAtten2 = totalAtten * clamp(NdotL2_raw, 0.0, 1.0);

            // Lit color and the shadow test. The back half is always
            // "lit": the mask only shadows the front-facing side.
            vec3 lit2 = (exColor.w * exColor.xyz) * NdotLxAtten2;
            bool shadowPass = (texture(lightPrepassTex, vec2(shadowUVu, ((-shadowUVv) + 1.0))).b) > shadowUVz;
            float shadowMask2 = (shadowPass || isBackward) ? 1.0 : 0.0;

            // Side Order ink answers this light with its own sparkle
            // pass on painted alpha-team ground.
            bool isPainted2 = (min((paintStrength * 1000.0), 1.0)) > 0.5;
            bool isAlphaTeam = teamTopMask.x > 0.5;
            bool doPaintInk = (isPainted2 && isAlphaTeam) && (inkType == 2);
            if (doPaintInk)
            {
                // --- Side Order sparkle under the extra light ----------
                // Same layers as the main Side Order branch: user1 is the
                // mip-dithered glitter sheet (mesh tangent frame), user2
                // carries the overlay tilt (paint frame) plus the
                // damp/boost mask.
                vec2 inkUV = paintST * cInkMode.y;

                // Sparkle sheet with the stubbed manual mip chain.
                int extraInk_lodInt = int(((0.0) * 256.0));
                float mipLevel = max(0.0, (min(((float((extraInk_lodInt & 65535))) * 0.00234375009), 6.0)));
                float mipFloor = floor(mipLevel);
                vec4 sparkle0 = texture(user1Tex, inkUV * exp2(-mipFloor));
                vec3 sparkle = texture(user1Tex, inkUV * exp2(-(mipFloor + 1.0))).rgb;
                if (sparkle0.a >= (mipLevel - mipFloor))
                {
                    sparkle = sparkle0.rgb;
                }

                // Overlay tilt (decoded to ~[-1,1]) and damp/boost mask.
                vec2 overlayNorm = texture(user2Tex, inkUV * cInkCustom5.x).gb * 2.007874012 - 1.00787401;
                float invDetailScale = 1.0 / cInkMode.y;
                float detailMask = texture(user2Tex, (inkUV * invDetailScale) * cInkCustom2.x).r;

                // Perspective-corrected tangent and paint-axis frames.
                vec4 tanRow = (fTangents * gl_FragCoord.w) * fragWinv;
                vec3 paintAxis2 = (fPaintUVXform.xyz * gl_FragCoord.w) * fragWinv;
                vec3 tangentDir2 = tanRow.xyz;
                vec3 bitanDir2 = tanRow.w * cross(litN, tangentDir2);

                // Sparkle normal in the tangent frame.
                vec3 sparkleNorm = perturbNormal(litN, tangentDir2, bitanDir2, sparkle.rg);

                // The overlay tilt lives in the paint frame; it only
                // drives the rim term (viewed against the eye ray).
                vec3 overlayWorld = perturbNormal(litN, paintAxis2, cross(litN, paintAxis2), overlayNorm);
                float rimFacing = dot(eyeDir, -overlayWorld);
                float rimFactor = clamp(rimFacing * 0.5 + 0.5, 0.0, 1.0);
                float rimGain = (rimFactor * cInkCustom5.y - cInkCustom5.y) + 1.0;

                // Flip the light through the surface on back faces.
                vec3 effectDir = (NdotL2_raw < 0.0) ? (-adjDir) : adjDir;

                // GGX terms against the sparkle normal, with the ink's
                // own roughness (cInkCustom0.w).
                vec3 halfDirInk = normalize(eyeDir + effectDir);
                float VdotHi = max(dot(eyeDir, halfDirInk), 9.999999939e-09);
                float NdotHi = max(dot(sparkleNorm, halfDirInk), 9.999999939e-09);
                float NdotLi = max(dot(sparkleNorm, effectDir), 9.999999939e-09);
                float NdotVi = max(dot(eyeDir, sparkleNorm), 9.999999939e-09);
                float inkBrdf = ggxSpecular(NdotHi, NdotVi, NdotLi, cInkCustom0.w);
                float inkFresnelWt = fresnelWeight(VdotHi);

                // Distance and view-plane fades.
                float viewZ2 = dot(eyeDir, vec3(ctx.cViewInv[0].z, ctx.cViewInv[1].z, ctx.cViewInv[2].z));
                float depthBlend = clamp((((fWorldPos.w * gl_FragCoord.w) * fragWinv) * 0.01999999955 + 1.0), 0.0, 1.0);
                float viewBlend = clamp((viewZ2 * cInkCustom1.z + cInkCustom1.w), 0.0, 1.0);

                // Hash-dithered sparkle boost and coverage gates.
                bool ditherPass = hash11(sparkle.r * 78.23300171 + (sparkle.b * 12.9898005)) <= cInkCustom4.w;
                vec3 inkSpecBase = ditherPass ? (cInkCustom0.x * cInkCustom3.xyz) : cInkCustom3.xyz;
                float threshValue = detailMask * cInkCustom2.z + cInkCustom2.y;
                float covA = clamp(sparkle.b - threshValue, 0.0, 1.0);
                float covB = clamp(0.5 - threshValue, 0.0, 1.0);
                float blendFactor = clamp((paintStrength - cInkMode.w) * (1.0 / cInkMode.z), 0.0, 1.0);
                float covGapA = cInkCustom2.w - covA;
                float covGapB = cInkCustom2.w - covB;
                float covBlendA = blendFactor * (-covGapA) + covGapA;
                float covBlendB = blendFactor * (-covGapB) + covGapB;

                // Specular sparkle layer and the emissive push toward the
                // ink's pop color.
                vec3 inkSpecColor = inkSpecBase * cInkCustom0.y;
                vec3 inkSpecFres = inkSpecColor * (-inkFresnelWt) + vec3(inkFresnelWt);
                float covFinalA = depthBlend * (viewBlend * (rimGain * (covA + covBlendA)));
                vec3 inkSpecOut = covFinalA * ((inkSpecColor + inkSpecFres) * inkBrdf);
                float emitStrength = (depthBlend * (viewBlend * ((covB + covBlendB) * rimGain))) * cInkCustom0.z;
                vec3 emitDelta = cInkCustom3.xyz - st2Emit;
                vec3 inkEmit = emitDelta * emitStrength + st2Emit;
                vec3 litSpec = inkSpecOut * (lit2 * shadowMask2);
                stInkEx = litSpec * 0.0795774683;
                accLtEmit = inkEmit;
            }

            // Shadowed extra-light response on top of the cluster walk.
            accLit = lit2 * fullSpec2 * shadowMask2 + accLit;
        }
    }
    // ------------------------------------------------------------------
    // Final compose: sun + ambient + cluster lights + rim, then fog
    // ------------------------------------------------------------------
    bool isInkSpecial = (inkType == 2) || (inkType == 6);
    bool isInkAnySpec = (inkType == 9) || isInkSpecial;
    float inkEmitMask = isInkSpecial ? 1.0 : 0.0;

    // Total sun response (prepass shadow + ink stage light).
    vec3 litTotal = shadowX32 + st2Light;

    // For the special inks the rim base adds the cluster-walk ink light
    // on top of the sun shadow term.
    vec3 litWithInk = shadowX32 * inkEmitMask + inkEmitMask * stInkEmit;

    // Rim light: a minimum ambient color (ink-driven for the special
    // inks), shaped by the sun shadow and normalized by scene luma.
    float luma = dot(env.cLightColor.xyz, vec3(0.298911989, 0.5866109729, 0.1144779995));
    float invLuma = 1.0 / luma;
    vec3 rimMin = isInkSpecial ? cInkCustom4.yzx : vec3(0.0627499968, 0.0627499968, 0.0610000007);
    float shadowFogFull = lightAccessibility * (clamp((st2NdotL), 0.0, 1.0));
    float rimMask = (shadowFogFull * (-rimMin.b) + shadowFogFull);
    float rimTotal = rimMask + rimMin.b;
    float rimIntensity = (((rimMin.g - rimMin.r) * ((max(luma, 2.0)) + -2.0)) * 0.200000003 + rimMin.r);
    vec3 rim = (invLuma * env.cLightColor.xyz) * rimIntensity;
    vec3 rimLit = rim * rimTotal + litWithInk;

    // Specular sources are exclusive: the special inks bring their own
    // spec response (stSpecAcc against the rim and the extra-light
    // sparkle), everything else takes the sun GGX irradiance.
    vec3 specSun = isInkAnySpec ? vec3(0.0) : litTotal * stSpecAcc;
    vec3 specInk = isInkAnySpec ? rimLit * stSpecAcc : vec3(0.0);
    vec3 inkExtra = isInkAnySpec ? stInkEx : vec3(0.0);

    // Per-channel compose: shadowed diffuse + scaled specular + the ink
    // layers, plus the (possibly ink-replaced) emissive.
    vec3 outColor = (projShadowVis * accLit) + (((lightAccessibility * (((specIrrad * litTotal) + specSun) * stSpecScaleFactor)) + specInk) + inkExtra);
    vec3 composite = outColor + accLtEmit;

    // ------------------------------------------------------------------
    // Fog: height/distance fog (fog0) and directional fog (fog1)
    // ------------------------------------------------------------------
    vec3 camDelta = worldPos - vec3(ctx.cViewInv[0].w, ctx.cViewInv[1].w, ctx.cViewInv[2].w);
    float fogDistSq = dot(camDelta, camDelta);
    float fogDist = sqrt(fogDistSq);
    float fogDistInvLen = inversesqrt(fogDistSq);

    // Sun alignment of the view offset drives the fog height blend.
    float fogNdotL = dot(camDelta * fogDistInvLen, env.cMainLightDir.xyz);
    float fogHeightBlend = fogNdotL * (-cFogDensity.y) + cFogDensity.y;
    float fogDirDot = dot(worldPos, env.cFog1DirStart.xyz);

    // fog0 color: pow(distance ramp, density) * sun-alignment boost,
    // damped where the sun shadow keeps the air dark.
    float fogDistRamp = exp2(log2(clamp(fogDist * ctx.cScreen.x, 0.0, 1.0)) * cFogDensity.x);
    vec3 fogColor = (fogDistRamp * exp2(fogHeightBlend)) * cFogColor.xyz;
    float fogShadowDamp = clamp((lightAccessibility * projShadowVis) * cFogDensity.w + (1.0 - cFogDensity.w), 0.0, 1.0);
    vec3 fogScaled = fogColor * fogShadowDamp;
    vec3 fog0 = (fogScaled * vec3(cFogDensity.z) - env.cFog0Color.xyz) * vec3(cFogRange.w) + env.cFog0Color.xyz;

    // Directional fog1 first: blend the composite toward the fog1 color
    // by how far the fragment sits along the fog direction.
    float fog1Amount = clamp(fogDirDot * (-env.cFog1EndDamp.x) + env.cFog1DirStart.w, 0.0, 1.0) * env.cFog1Color.w;
    vec3 preFog = (env.cFog1Color.xyz - composite) * vec3(fog1Amount) + composite;

    // Then fog0 on top: exponential distance fade toward the fog0 color
    // (exp(-x * cFogRange.x), spelled via exp2 with log2(e)).
    float fog0Ramp = clamp(fogDist * env.cFog0EndDamp.x + env.cFog0DirStart.w, 0.0, 1.0);
    float fog0Amount = clamp(1.0 - exp2(fog0Ramp * (-cFogRange.x) * 1.44269502), 0.0, 1.0) * env.cFog0Color.w;
    vec3 finalColor = (fog0 - preFog) * vec3(fog0Amount) + preFog;

    oFragColor = vec4(finalColor, 1.0);
}
