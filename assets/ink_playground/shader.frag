#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
precision highp samplerCube;
struct EXTRA_BLOCK
{
    vec4 selectionColor;
}; 
uniform EXTRA_BLOCK extraBlock;
const int undef = 0;
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
    vec4 _env_rest[266];
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
    vec4 fp_c7_data[96];
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
    vec4 fp_c10_data[576];
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
uniform bool is_bgra[8];
void main()
{
    float metalness;
    float emissionR;
    float emissionG;
    float emissionB;
    float roughness;
    float stSpecScaleFactor;
    float shNormX;
    float shNormZ;
    float shNormY;
    float iblAccB;
    float iblAccG;
    float iblAccR;
    bool final_bgraHandledB = false;
    bool final_bgraHandledR = false;
    bool loop_shouldBreak = false;
    bool wasPainted = false;
    bool inkBranchDone = false;
    bool skipInkMetalness = false;
    float invW = 1.0 / gl_FragCoord.w;
    float texU = fTexCoords01.x * gl_FragCoord.w * invW;
    float texV = fTexCoords01.y * gl_FragCoord.w * invW;
    bool shouldFlipPaint = (fPaintData.w * gl_FragCoord.w * invW) < 0.0;
    float paintV = (fPaintUV.y * gl_FragCoord.w * invW);
    float paintU = (fPaintUV.x * gl_FragCoord.w * invW);
    if (shouldFlipPaint)
    {
        paintV = ((fPaintUV.w * gl_FragCoord.w) * invW);
    }
    if (shouldFlipPaint)
    {
        paintU = ((fPaintUV.z * gl_FragCoord.w) * invW);
    }
    float paintV_inv = 1.0 - paintV;
    float paintU_off = (fp_c7_data[20].z * fp_c7_data[22].z + paintU);
    vec3 cov = texture(paintCoverageTex, vec2(paintU, paintV_inv)).rgb;
    float paintV_off = (fp_c7_data[20].z * fp_c7_data[22].w + paintV_inv);
    vec3 cov2 = texture(paintCoverageTex, vec2(paintU, paintV_off)).rgb;
    vec3 cov3 = texture(paintCoverageTex, vec2(paintU_off, paintV_inv)).rgb;
    vec2 normalMap = texture(normalTex, vec2(texU, texV)).rg;
    vec3 albedo = texture(albedoTex, vec2(texU, texV)).rgb;
    float perspCorr = gl_FragCoord.w * invW;
    vec3 rawNorm = fNormals.xyz * perspCorr;
    vec3 paintXfm = fPaintUVXform.xyz * perspCorr;
    vec4 tan = fTangents * perspCorr;
    vec3 normDir = rawNorm * (inversesqrt((rawNorm.z * rawNorm.z + (rawNorm.y * rawNorm.y + rawNorm.x * rawNorm.x))));
    vec3 crossP = normDir.yzx * paintXfm.zxy;
    vec3 rawBitan = vec3(
        (normDir.z * paintXfm.y + -crossP.x),
        (normDir.x * paintXfm.z + -crossP.y),
        (normDir.y * paintXfm.x + -crossP.z));
    float bitanLenSq_p = (rawBitan.y * rawBitan.y + rawBitan.x * rawBitan.x);
    float bitanLenSq = (rawBitan.z * rawBitan.z + bitanLenSq_p);
    bool hasBitangent = (sqrt(bitanLenSq)) > 0.1000000015;
    vec3 bitan = rawBitan * (hasBitangent ? inversesqrt(bitanLenSq) : 1.0);
    float maxCov = max(cov.b, max(cov.r, cov.g));
    float alphaWeight = clamp((cov.g - cov.r) * 1000.0, 0.0, 1.0);
    float bravoWeight = clamp(((cov.g - maxCov) + 9.99999975E-05) * 100000000.0, 0.0, 1.0);
    float alphaWeightFine = clamp(((cov.r - maxCov) + 9.99999975E-05) * 100000000.0, 0.0, 1.0);
    float paintCovRaw = maxCov - fp_c7_data[21].w;
    float covBlendAlpha_p = ((cov.r - cov2.r) * alphaWeightFine + ((cov.g - cov2.g) * bravoWeight));
    float charlieWeight = clamp(((cov.b - maxCov) + 9.99999975E-05) * 100000000.0, 0.0, 1.0);
    float paintThreshold = (((-fp_c7_data[20].y) + fp_c7_data[20].x) * (clamp(normDir.y, 0.0, 1.0)) + fp_c7_data[20].y);
    float tangentCrossY = (normDir.z * tan.x + (-(normDir.x * tan.z)));
    float covBlendAlpha3_p = ((cov.r - cov3.r) * alphaWeightFine + ((cov.g - cov3.g) * bravoWeight));
    float tangentCrossX = (normDir.y * tan.z + (-(normDir.z * tan.y)));
    float blendAlpha = ((cov.b - cov2.b) * charlieWeight + covBlendAlpha_p);
    float tangentCrossZ = (normDir.x * tan.y + (-(normDir.y * tan.x)));
    float blendBravo = ((cov.b - cov3.b) * charlieWeight + covBlendAlpha3_p);
    float normalMapLenSq = (normalMap.r * normalMap.r + (normalMap.g * normalMap.g));
    float paintNormAlphaScale = blendAlpha * fp_c7_data[18].y;
    float teamBrightG_ab = (alphaWeightFine * user3.alphaTeamColorHueBright.y + (bravoWeight * user3.bravoTeamColorHueBright.y));
    float paintNormBravoScale = blendBravo * fp_c7_data[18].y;
    float normalMapZ = sqrt((clamp(1.0 - normalMapLenSq, 0.0, 1.0)));
    float surfNormX_tbn = (normalMap.r * tan.y + (normalMap.g * (tangentCrossY * tan.w)));
    float paintPerturbX = (paintNormBravoScale * paintXfm.x + (paintNormAlphaScale * bitan.x));
    float paintPerturbY = (paintNormBravoScale * paintXfm.y + (paintNormAlphaScale * bitan.y));
    float surfNormZ_tbn = (normalMap.r * tan.x + (normalMap.g * (tangentCrossX * tan.w)));
    float paintPerturbZ = (paintNormBravoScale * paintXfm.z + (paintNormAlphaScale * bitan.z));
    float paintNormX_raw = normDir.x + paintPerturbX;
    float invClipW = 1.0 / (fClipPos.w * gl_FragCoord.w * invW);
    float paintNormY_raw = normDir.y + paintPerturbY;
    float surfNormZ_raw = (normDir.x * normalMapZ + surfNormZ_tbn);
    float surfNormY_tbn = (normalMap.r * tan.z + (normalMap.g * (tangentCrossZ * tan.w)));
    float surfNormX_raw = (normDir.y * normalMapZ + surfNormX_tbn);
    float paintNormZ_raw = normDir.z + paintPerturbZ;
    float paintStrength = clamp((paintCovRaw), 0.0, 1.0);
    float surfNormY_raw = (normDir.z * normalMapZ + surfNormY_tbn);
    float teamBrightR_ab = (alphaWeightFine * user3.alphaTeamColorHueBright.x + (bravoWeight * user3.bravoTeamColorHueBright.x));
    float teamBrightB_ab = (alphaWeightFine * user3.alphaTeamColorHueBright.z + (bravoWeight * user3.bravoTeamColorHueBright.z));
    float paintNormXYsq = (paintNormY_raw * paintNormY_raw + (paintNormX_raw * paintNormX_raw));
    float surfNormXZsq = (surfNormX_raw * surfNormX_raw + (surfNormZ_raw * surfNormZ_raw));
    float teamColorR = (charlieWeight * user3.charlieTeamColorHueBright.x + teamBrightR_ab);
    float teamColorG = (charlieWeight * user3.charlieTeamColorHueBright.y + teamBrightG_ab);
    float teamColorB = (charlieWeight * user3.charlieTeamColorHueBright.z + teamBrightB_ab);
    float screenU = (((fClipPos.x * gl_FragCoord.w * invW) * invClipW) * 0.5 + 0.5);
    bool isPainted = min((paintStrength * 1000.0), 1.0) > 0.5;
    vec3 paintNorm = vec3(paintNormX_raw, paintNormY_raw, paintNormZ_raw) * (inversesqrt((paintNormZ_raw * paintNormZ_raw + paintNormXYsq)));
    vec3 surfNorm = vec3(surfNormX_raw, surfNormY_raw, surfNormZ_raw) * (inversesqrt((surfNormY_raw * surfNormY_raw + surfNormXZsq)));
    float screenV = (((fClipPos.y * gl_FragCoord.w * invW) * invClipW) * -0.5 + 0.5);
    vec3 curAlbedo = albedo;
    vec3 curNorm = surfNorm;
    if (isPainted)
    {
        bool isBravoActive = bravoWeight > 0.5;
        int inkType = int(trunc(fp_c7_data[49].x));
        vec3 paintDelta = paintNorm.yzx - surfNorm.xyz;
        vec3 teamDark_ab = (vec3(alphaWeightFine) * user3.alphaTeamColorHueDark.xyz + vec3((bravoWeight * user3.bravoTeamColorHueDark.x), (bravoWeight * user3.bravoTeamColorHueDark.y), (bravoWeight * user3.bravoTeamColorHueDark.z)));
        vec3 teamDark = (vec3(charlieWeight) * user3.charlieTeamColorHueDark.xyz + teamDark_ab);
        vec3 paintedNorm = (vec3(paintThreshold) * paintDelta + surfNorm.xyz);
        bool isInkType2 = inkType == 2;
        bool isInkType2Bravo = isInkType2 && isBravoActive;
        vec3 teamColor = vec3(teamColorR, teamColorG, teamColorB);
        vec3 paintAlbDelta = (teamDark * vec3(-fp_c7_data[45].y) + teamColor);
        vec3 paintAlbBase = teamDark * fp_c7_data[45].y;
        vec3 paintedAlbedo = (paintAlbDelta * vec3((clamp(paintStrength * fp_c7_data[45].z, 0.0, 1.0))) + paintAlbBase);
        vec3 paintEmit = paintedAlbedo * fp_c7_data[18].z;
        metalness = 0.0;
        curAlbedo = paintedAlbedo;
        curNorm = paintedNorm;
        emissionR = paintEmit.r;
        emissionG = paintEmit.g;
        emissionB = paintEmit.b;
        roughness = fp_c7_data[18].x;
        skipInkMetalness = !isInkType2Bravo;
        if (!skipInkMetalness)
        {
            float inkMetalExp = exp2(((paintStrength * fp_c7_data[50].y) * 14.4269505));
            float inkMetalRaw = (inkMetalExp * (-fp_c7_data[50].x) + inkMetalExp);
            vec3 dielecAlbedo = (albedo * vec3(-(texture(metalnessTex, vec2(texU, texV)).r)) + albedo);
            vec3 metalDelta = paintedAlbedo - dielecAlbedo;
            vec3 metalRemain = (metalDelta * vec3(-(clamp(inkMetalRaw, 0.0, 1.0))) + metalDelta);
            curAlbedo = dielecAlbedo + metalRemain;
            skipInkMetalness = true;
        }
    }
    else
    {
        metalness = texture(metalnessTex, vec2(texU, texV)).r;
        emissionR = 0.0; emissionG = 0.0; emissionB = 0.0;
        roughness = max(texture(roughnessTex, vec2(texU, texV)).r, 9.999999747e-05);
    }
    skipInkMetalness = false;
    vec2 bakeShadow1Sample = texture(bakeShadow1Tex, vec2(screenU, screenV)).rg;
    vec3 dielectric;
    dielectric.b = (metalness * (-curAlbedo.b) + curAlbedo.b);
    float invBakeShadow1 = 1.0 / (fShadowUV.z * gl_FragCoord.w);
    float bakeShadowVal = texture(bakeShadow0Tex, vec2(fShadowUV.x * gl_FragCoord.w * invBakeShadow1, fShadowUV.y * gl_FragCoord.w * invBakeShadow1)).r;
    vec2 projShadowSample = texture(projShadowTex, vec2((fBakeUV.x * gl_FragCoord.w * invW), (fBakeUV.y * gl_FragCoord.w * invW))).rg;
    vec4 shadowPrepassSample = texture(shadowPrepassTex, vec2((fBakeUV.z * gl_FragCoord.w * invW), (fBakeUV.w * gl_FragCoord.w * invW))).rgba;
    float shadowPrepassA = shadowPrepassSample.w;
    vec3 viewDir = fViewDirection.xyz * perspCorr;
    float viewPosW = fWorldPos.w * gl_FragCoord.w * invW;
    float shadowUV_W = fShadowUV.w * gl_FragCoord.w * invW;
    dielectric.g = (metalness * (-curAlbedo.g) + curAlbedo.g);
    vec3 reflect;
    reflect.b = ((curAlbedo.g + -0.0399999991) * metalness + 0.03999999911);
    vec3 eyeDir = viewDir * (-(inversesqrt((viewDir.z * viewDir.z + (viewDir.y * viewDir.y + viewDir.x * viewDir.x)))));
    float bakeShadowBlend = (bakeShadowVal * (-ctx.cProjParams.x) + ctx.cProjParams.x);
    float projShadowBlend = (projShadowSample.x * (-fp_c7_data[37].x) + fp_c7_data[37].x);
    float projShadowG_blend = (projShadowSample.y * (-fp_c7_data[36].y) + fp_c7_data[36].y);
    dielectric.r = (metalness * (-curAlbedo.r) + curAlbedo.r);
    float shadowAccum = ((max((1.0 - bakeShadow1Sample.x), (1.0 - bakeShadow1Sample.y))) * (clamp((viewPosW + fp_c7_data[36].z), 0.0, 1.0)) + bakeShadowBlend);
    reflect.r = ((curAlbedo.r + -0.0399999991) * metalness + 0.03999999911);
    reflect.g = ((curAlbedo.b + -0.0399999991) * metalness + 0.03999999911);
    float projShadowMask = clamp((clamp((projShadowBlend + fp_c7_data[37].y), 0.0, 1.0)) * shadowUV_W, 0.0, 1.0);
    float NdotL_p2 = (curNorm.x * (-env._env_rest[1].y) + (curNorm.z * (-env._env_rest[1].x)));
    float eyeDotNorm_p2 = (eyeDir.y * curNorm.x + (eyeDir.x * curNorm.z));
    float NdotL_raw = (curNorm.y * (-env._env_rest[1].z) + NdotL_p2);
    float NdotV = (eyeDir.z * curNorm.y + eyeDotNorm_p2);
    float totalShadow = (projShadowMask * fp_c7_data[37].w + ((clamp((clamp((projShadowG_blend + fp_c7_data[36].x), 0.0, 1.0)) * shadowUV_W, 0.0, 1.0)) + shadowAccum));
    float shadowInvTotal = clamp(1.0 - projShadowMask, 0.0, 1.0);
    vec3 directLight = clamp((NdotL_raw), 0.0, 1.0) * env.cLightColor.xyz;
    float lightAccessibility = clamp(1.0 - totalShadow, 0.0, 1.0);
    float stNormZ = curNorm.z;
    float stNdotV = NdotV;
    float stRoughness = roughness;
    float stNormX = curNorm.x;
    float stNormY = curNorm.y;
    vec3 stDielec = dielectric;
    vec3 stEmit = vec3(emissionR, emissionG, emissionB);
    vec3 stLight = directLight;
    float stNdotL = NdotL_raw;
    vec3 stExtra = vec3(0.0);
    float st2NormZ = curNorm.z;
    float st2NdotV = NdotV;
    float st2NormX = curNorm.x;
    float st2NormY = curNorm.y;
    float st2Roughness = roughness;
    vec3 st2Reflect = reflect;
    vec3 st2Dielec = dielectric;
    vec3 st2Emit = vec3(emissionR, emissionG, emissionB);
    vec3 st2Light = directLight;
    float st2NdotL = NdotL_raw;
    vec3 stSpecAcc = vec3(0.0);
    vec3 stInkSpec = vec3(0.0);
    vec3 stInkEmit = vec3(0.0);
    vec3 stInkEx = vec3(0.0);
    if (isPainted)
    {
        int inkTypeInt = int(trunc(fp_c7_data[49].x));
        float normX_inkBias = ((curNorm.x + -1.0) * fp_c7_data[19].z + 1.0);
        bool isInkType3 = inkTypeInt == 3;
        vec3 inkReflect = vec3(fp_c7_data[19].x);
        float inkNormX = normX_inkBias;
        float inkNormZ = (curNorm.z * fp_c7_data[19].z);
        float inkNormY = (curNorm.y * fp_c7_data[19].z);
        stSpecScaleFactor = 1.0;
        if (isInkType3)
        {
            float ink3_strength_bias = paintStrength * fp_c7_data[48].y;
            float ink3_u_param = ((paintU * fp_c7_data[48].x) * fp_c7_data[48].x + ink3_strength_bias);
            float ink3_v_param = ((paintV_inv * fp_c7_data[48].x) * fp_c7_data[48].x + ink3_strength_bias);
            vec3 user1Sample_907 = texture(user1Tex, vec2(0.5, (clamp((sin(ink3_u_param + fp_c7_data[19].y) * sin(ink3_v_param + fp_c7_data[19].y)), 0.0, 1.0)))).rgb;
            float ink3_weighted_r = alphaWeight * user1Sample_907.x;
            float ink3_weighted_b = alphaWeight * user1Sample_907.z;
            float ink3_weighted_g = alphaWeight * user1Sample_907.y;
            vec3 ink3_stDielec;
            ink3_stDielec.r = (ink3_weighted_r * fp_c7_data[48].w + dielectric.r);
            ink3_stDielec.b = (ink3_weighted_b * fp_c7_data[48].w + dielectric.b);
            vec3 ink3_spec = vec3((ink3_weighted_r * fp_c7_data[48].z + fp_c7_data[19].x), (ink3_weighted_g * fp_c7_data[48].z + fp_c7_data[19].x), (ink3_weighted_b * fp_c7_data[48].z + fp_c7_data[19].x));
            ink3_stDielec.g = (ink3_weighted_g * fp_c7_data[48].w + dielectric.g);
            inkReflect = ink3_spec;
            stDielec = ink3_stDielec;
            inkBranchDone = true;
        }
        else
        {
            bool ink4_is_inkType4 = inkTypeInt == 4;
            if (ink4_is_inkType4)
            {
                bool ink4_is_alphaAboveHalf = alphaWeight > 0.5;
                inkBranchDone = !ink4_is_alphaAboveHalf;
                if (!inkBranchDone)
                {
                    float ink4_strength_bias = paintStrength * fp_c7_data[48].y;
                    float ink4_uPhase = (paintU * fp_c7_data[50].x + fp_c7_data[19].y);
                    float ink4_vPhase = (paintV_inv * fp_c7_data[50].x + fp_c7_data[19].y);
                    float ink4_uOffset = (paintU * fp_c7_data[48].x + ink4_strength_bias);
                    float ink4_timeParam = fp_c7_data[50].z + fp_c7_data[19].y;
                    float ink4_sinProduct = sin(ink4_uPhase) * sin(ink4_vPhase);
                    float ink4_vOffset = (paintV_inv * fp_c7_data[48].x + ink4_strength_bias);
                    float ink4_timeFrac = ink4_timeParam + (-(floor(ink4_timeParam)));
                    float ink4_distortedU = (ink4_sinProduct * fp_c7_data[50].y + ink4_uOffset);
                    float ink4_distortedV = (ink4_sinProduct * fp_c7_data[50].y + ink4_vOffset);
                    float ink4_finalU = (paintXfm.y * ink4_timeFrac + ink4_distortedU);
                    float ink4_finalV = (ink4_timeFrac * bitan.y + ink4_distortedV);
                    vec3 user2Sample_953 = texture(user2Tex, vec2(0.5, (texture(user1Tex, vec2(ink4_finalU, ink4_finalV)).r))).rgb;
                    stDielec.b = user2Sample_953.z;
                    stDielec.r = user2Sample_953.x;
                    stDielec.g = user2Sample_953.y;
                    inkBranchDone = true;
                }
            }
            else
            {
                bool ink5_is_inkType5 = inkTypeInt == 5;
                if (ink5_is_inkType5)
                {
                    float ink5_strength_bias = paintStrength * fp_c7_data[48].y;
                    float ink5_u = (paintU * fp_c7_data[48].x + ink5_strength_bias);
                    float ink5_v = (paintV_inv * fp_c7_data[48].x + ink5_strength_bias);
                    vec3 ink5_stEmit = vec3((emissionR * (-fp_c7_data[19].y) + emissionR), (emissionG * (-fp_c7_data[19].y) + emissionG), (emissionB * (-fp_c7_data[19].y) + emissionB));
                    float ink5_blend_factor = ((texture(user1Tex, vec2(ink5_u, ink5_v)).r) * (clamp(((paintStrength + (-fp_c7_data[48].w)) * (1.0 / fp_c7_data[48].w)), 0.0, 1.0))) * fp_c7_data[48].z;
                    vec3 ink5_stDielec = vec3((ink5_blend_factor * (-dielectric.r) + dielectric.r), (ink5_blend_factor * (-dielectric.g) + dielectric.g), (ink5_blend_factor * (-dielectric.b) + dielectric.b));
                    stDielec = ink5_stDielec;
                    stEmit = ink5_stEmit;
                    inkBranchDone = true;
                }
                else
                {
                    bool ink6_is_inkType6 = inkTypeInt == 6;
                    if (ink6_is_inkType6)
                    {
                        float ink6_texU = (paintU * fp_c7_data[49].y) * fp_c7_data[78].y;
                        float ink6_texV = (paintV_inv * fp_c7_data[49].y) * fp_c7_data[78].y;
                        int ink6_lodInt = int(((0.0) * 256.0));
                        bool ink6_is_G_ge_B = teamColorG >= teamColorB;
                        float ink6_G_ge_B_select = ink6_is_G_ge_B ? 1.0 : 0.0;
                        float ink6_invRampWidth = 1.0 / fp_c7_data[50].x;
                        float ink6_teamMaxGB = ((teamColorG + (-teamColorB)) * ink6_G_ge_B_select + teamColorB);
                        float ink6_teamMinGB = (((-teamColorG) + teamColorB) * ink6_G_ge_B_select + teamColorG);
                        float ink6_hueAccumG_p1 = (alphaWeightFine * fp_c7_data[51].x + (bravoWeight * fp_c7_data[51].y));
                        float ink6_hue2AccumG_p1 = (alphaWeightFine * fp_c7_data[77].x + (bravoWeight * fp_c7_data[77].y));
                        float ink6_crossZX = (tan.z * curNorm.x + (-(tan.y * curNorm.y)));
                        bool ink6_is_R_ge_maxGB = teamColorR >= ink6_teamMaxGB;
                        float ink6_R_ge_maxGB_select = ink6_is_R_ge_maxGB ? 1.0 : 0.0;
                        float ink6_hueAccum = (charlieWeight * fp_c7_data[51].z + ink6_hueAccumG_p1);
                        float ink6_crossXY = (tan.x * curNorm.y + (-(tan.z * curNorm.z)));
                        float ink6_hue2Accum = (charlieWeight * fp_c7_data[77].z + ink6_hue2AccumG_p1);
                        float ink6_teamValue = ((teamColorR + (-ink6_teamMaxGB)) * ink6_R_ge_maxGB_select + ink6_teamMaxGB);
                        float ink6_teamMinR = (((-teamColorR) + ink6_teamMaxGB) * ink6_R_ge_maxGB_select + teamColorR);
                        float ink6_rampCenter = (0.5 * fp_c7_data[50].x + fp_c7_data[48].x);
                        float ink6_hue1_plus1 = ink6_hueAccum + 1.0;
                        float ink6_hue1_plus23 = ink6_hueAccum + 0.666666687;
                        float ink6_invTeamValue = 1.0 / (ink6_teamValue + 1.00000001E-10);
                        float ink6_hue1_plus13 = ink6_hueAccum + 0.333333343;
                        float ink6_teamChroma = ink6_teamValue + (-(min(ink6_teamMinGB, ink6_teamMinR)));
                        float ink6_rampOffsetRaw = (paintStrength * (-ink6_invRampWidth) + ((clamp(ink6_rampCenter, 0.0, 1.0)) * ink6_invRampWidth));
                        float ink6_rampFade = clamp(ink6_rampOffsetRaw, 0.0, 1.0);
                        float ink6_crossYZ = (tan.y * curNorm.z + (-(tan.x * curNorm.x)));
                        float ink6_satRaw = (ink6_teamChroma * ink6_invTeamValue + fp_c7_data[50].z);
                        float ink6_satClamped = clamp(ink6_satRaw, 0.0, 1.0);
                        float ink6_sat2Raw = (ink6_teamChroma * ink6_invTeamValue + fp_c7_data[51].w);
                        float ink6_sat2Clamped = clamp(ink6_sat2Raw, 0.0, 1.0);
                        float ink6_hue2_plus1 = ink6_hue2Accum + 1.0;
                        float ink6_hue2_plus23 = ink6_hue2Accum + 0.666666687;
                        float ink6_hue2_plus13 = ink6_hue2Accum + 0.333333343;
                        float ink6_hue1R_ramp = ((ink6_hue1_plus1 + (-(floor(ink6_hue1_plus1)))) * 6.0 + -3.0);
                        float ink6_hue1G_ramp = ((ink6_hue1_plus23 + (-(floor(ink6_hue1_plus23)))) * 6.0 + -3.0);
                        float ink6_hue1B_ramp = ((ink6_hue1_plus13 + (-(floor(ink6_hue1_plus13)))) * 6.0 + -3.0);
                        float ink6_hue2R_ramp = ((ink6_hue2_plus1 + (-(floor(ink6_hue2_plus1)))) * 6.0 + -3.0);
                        float ink6_hue2G_ramp = ((ink6_hue2_plus23 + (-(floor(ink6_hue2_plus23)))) * 6.0 + -3.0);
                        float ink6_hue2B_ramp = ((ink6_hue2_plus13 + (-(floor(ink6_hue2_plus13)))) * 6.0 + -3.0);
                        float ink6_value1 = clamp((ink6_teamValue + fp_c7_data[50].w), 0.0, 1.0);
                        float ink6_sat1R_delta = (ink6_satClamped * (clamp(((abs(ink6_hue1R_ramp)) + -1.0), 0.0, 1.0)) + (-ink6_satClamped));
                        float ink6_sat1G_delta = (ink6_satClamped * (clamp(((abs(ink6_hue1G_ramp)) + -1.0), 0.0, 1.0)) + (-ink6_satClamped));
                        float ink6_sat1B_delta = (ink6_satClamped * (clamp(((abs(ink6_hue1B_ramp)) + -1.0), 0.0, 1.0)) + (-ink6_satClamped));
                        float ink6_sat2R_delta = (ink6_sat2Clamped * (clamp(((abs(ink6_hue2R_ramp)) + -1.0), 0.0, 1.0)) + (-ink6_sat2Clamped));
                        float ink6_value2 = clamp((ink6_teamValue + fp_c7_data[77].w), 0.0, 1.0);
                        float ink6_sat2G_delta = (ink6_sat2Clamped * (clamp(((abs(ink6_hue2G_ramp)) + -1.0), 0.0, 1.0)) + (-ink6_sat2Clamped));
                        vec3 ink6_hsv1 = vec3((ink6_sat1R_delta * ink6_value1 + ink6_value1), (ink6_sat1G_delta * ink6_value1 + ink6_value1), (ink6_sat1B_delta * ink6_value1 + ink6_value1));
                        vec3 ink6_hsv2;
                        ink6_hsv2.r = (ink6_sat2R_delta * ink6_value2 + ink6_value2);
                        ink6_hsv2.g = (ink6_sat2G_delta * ink6_value2 + ink6_value2);
                        float ink6_sat2B_delta = (ink6_sat2Clamped * (clamp(((abs(ink6_hue2B_ramp)) + -1.0), 0.0, 1.0)) + (-ink6_sat2Clamped));
                        vec3 ink6_emitBlend;
                        ink6_emitBlend.r = (ink6_hsv2.r * fp_c7_data[50].y + (-emissionR));
                        float ink6_hsv2R_specR = (ink6_hsv2.r * (-fp_c7_data[49].y) + ink6_hsv2.r);
                        ink6_emitBlend.g = (ink6_hsv2.g * fp_c7_data[50].y + (-emissionG));
                        ink6_hsv2.b = (ink6_sat2B_delta * ink6_value2 + ink6_value2);
                        float ink6_stEmitR_partial = (ink6_rampFade * ink6_emitBlend.r + emissionR);
                        float ink6_hsv2G_specG = (ink6_hsv2.g * (-fp_c7_data[49].y) + ink6_hsv2.g);
                        float ink6_stEmitG_partial = (ink6_rampFade * ink6_emitBlend.g + emissionG);
                        vec3 ink6_specBias;
                        ink6_specBias.r = ((ink6_hsv2.r + -0.0399999991) * fp_c7_data[49].y + (-fp_c7_data[19].x));
                        float ink6_hsv2B_specB = (ink6_hsv2.b * (-fp_c7_data[49].y) + ink6_hsv2.b);
                        ink6_emitBlend.b = (ink6_hsv2.b * fp_c7_data[50].y + (-emissionB));
                        float ink6_stDielecR_partial = ((ink6_hsv2R_specR + (-dielectric.r)) * ink6_rampFade + dielectric.r);
                        ink6_specBias.g = ((ink6_hsv2.g + -0.0399999991) * fp_c7_data[49].y + (-fp_c7_data[19].x));
                        float ink6_invTexScale = 1.0 / fp_c7_data[78].y;
                        float ink6_stEmitB_partial = (ink6_rampFade * ink6_emitBlend.b + emissionB);
                        float ink6_stDielecG_partial = ((ink6_hsv2G_specG + (-dielectric.g)) * ink6_rampFade + dielectric.g);
                        ink6_specBias.b = ((ink6_hsv2.b + -0.0399999991) * fp_c7_data[49].y + (-fp_c7_data[19].x));
                        float ink6_stDielecB_partial = ((ink6_hsv2B_specB + (-dielectric.b)) * ink6_rampFade + dielectric.b);
                        int ink6_lodBits = (ink6_lodInt & 65535);
                        float ink6_mipSafe = max(0.0, (min(((float(ink6_lodBits)) * 0.00234375009), 6.0)));
                        float ink6_mipFloor = floor(ink6_mipSafe);
                        float ink6_mipScale0 = exp2(-ink6_mipFloor);
                        float ink6_mipScale1 = exp2((-(ink6_mipFloor + 1.0)));
                        vec4 user1Sample_1185 = texture(user1Tex, vec2((ink6_texU * ink6_mipScale0), (ink6_texV * ink6_mipScale0))).rgba;
                        vec3 user1Sample_1189 = texture(user1Tex, vec2((ink6_texU * ink6_mipScale1), (ink6_texV * ink6_mipScale1))).rgb;
                        float ink6_rampSample = texture(user2Tex, vec2(((ink6_texU * ink6_invTexScale) * fp_c7_data[78].x), ((ink6_texV * ink6_invTexScale) * fp_c7_data[78].x))).r;
                        int ink6_texWidthI = textureSize(user1Tex, 0).r;
                        int ink6_texHeightI = textureSize(user1Tex, 0).g;
                        float ink6_distFadeRaw = (viewPosW * 0.01999999955 + 1.0);
                        bool ink6_is_mip0 = user1Sample_1185.w >= (ink6_mipSafe + (-ink6_mipFloor));
                        float ink6_envReflY = eyeDir.y + env._env_rest[1].y;
                        vec3 ink6_norm = user1Sample_1185.xyz;
                        if (!ink6_is_mip0)
                        {
                            ink6_norm.g = user1Sample_1189.y;
                        }
                        if (!ink6_is_mip0)
                        {
                            ink6_norm.r = user1Sample_1189.x;
                        }
                        if (!ink6_is_mip0)
                        {
                            ink6_norm.b = user1Sample_1189.z;
                        }
                        float ink6_perturbedNormZ = (tan.x * ink6_norm.r + ((tan.w * ink6_crossZX) * ink6_norm.g));
                        float ink6_perturbedNormX = (tan.y * ink6_norm.r + ((tan.w * ink6_crossXY) * ink6_norm.g));
                        float ink6_envReflX = eyeDir.x + env._env_rest[1].x;
                        float ink6_perturbedNormY = (tan.z * ink6_norm.r + ((tan.w * ink6_crossYZ) * ink6_norm.g));
                        float ink6_normRG_sqSum = (ink6_norm.r * ink6_norm.r + (ink6_norm.g * ink6_norm.g));
                        float ink6_normB_val = sqrt((clamp(((-ink6_normRG_sqSum) + 1.0), 0.0, 1.0)));
                        float ink6_envReflXY_sq = (ink6_envReflY * ink6_envReflY + (ink6_envReflX * ink6_envReflX));
                        float ink6_envReflZ = eyeDir.z + env._env_rest[1].z;
                        float ink6_envReflLen_sq = (ink6_envReflZ * ink6_envReflZ + ink6_envReflXY_sq);
                        float ink6_envReflInvLen = inversesqrt(ink6_envReflLen_sq);
                        float ink6_finalNormZ = (ink6_normB_val * curNorm.z + ink6_perturbedNormZ);
                        float ink6_finalNormX = (ink6_normB_val * curNorm.x + ink6_perturbedNormX);
                        float ink6_finalNormY = (ink6_normB_val * curNorm.y + ink6_perturbedNormY);
                        float ink6_envDirX = ink6_envReflX * ink6_envReflInvLen;
                        float ink6_lightDirX = eyeDir.x + (-env._env_rest[1].x);
                        float ink6_envDirY = ink6_envReflY * ink6_envReflInvLen;
                        float ink6_envDirZ = ink6_envReflZ * ink6_envReflInvLen;
                        float ink6_lightDirY = eyeDir.y + (-env._env_rest[1].y);
                        float ink6_normXZ_sq = (ink6_finalNormX * ink6_finalNormX + (ink6_finalNormZ * ink6_finalNormZ));
                        float ink6_normLen_sq = (ink6_finalNormY * ink6_finalNormY + ink6_normXZ_sq);
                        float ink6_VdotEnv_p2 = (eyeDir.y * ink6_envDirY + (eyeDir.x * ink6_envDirX));
                        float ink6_normInvLen = inversesqrt(ink6_normLen_sq);
                        float ink6_lightDirXY_sq = (ink6_lightDirY * ink6_lightDirY + (ink6_lightDirX * ink6_lightDirX));
                        float ink6_lightDirZ = eyeDir.z + (-env._env_rest[1].z);
                        float ink6_NdotEnv = (eyeDir.z * ink6_envDirZ + ink6_VdotEnv_p2);
                        float ink6_lightDirLen_sq = (ink6_lightDirZ * ink6_lightDirZ + ink6_lightDirXY_sq);
                        float ink6_lightInvLen = inversesqrt(ink6_lightDirLen_sq);
                        float ink6_NdotEnv_clamped = max(ink6_NdotEnv, 9.999999939e-09);
                        float ink6_unitNormZ = ink6_finalNormZ * ink6_normInvLen;
                        float ink6_unitNormX = ink6_finalNormX * ink6_normInvLen;
                        float ink6_unitNormY = ink6_finalNormY * ink6_normInvLen;
                        float ink6_envFresnel_exp = (ink6_NdotEnv_clamped * -5.554729939 + -6.98316002);
                        float ink6_unitLightX = ink6_lightDirX * ink6_lightInvLen;
                        float ink6_unitLightY = ink6_lightDirY * ink6_lightInvLen;
                        float ink6_unitLightZ = ink6_lightDirZ * ink6_lightInvLen;
                        float ink6_NenvXZ_p2 = (ink6_unitNormX * ink6_envDirY + (ink6_unitNormZ * ink6_envDirX));
                        float ink6_NdotEnv_full = (ink6_unitNormY * ink6_envDirZ + ink6_NenvXZ_p2);
                        float ink6_VdotN_p2 = (eyeDir.y * ink6_unitNormX + (eyeDir.x * ink6_unitNormZ));
                        float ink6_VdotL_p2 = (eyeDir.y * ink6_unitLightY + (eyeDir.x * ink6_unitLightX));
                        float ink6_NdotL_p2 = (ink6_unitNormX * ink6_unitLightY + (ink6_unitNormZ * ink6_unitLightX));
                        float ink6_NenvXY_p2 = (ink6_unitNormX * (-env._env_rest[1].y) + (ink6_unitNormZ * (-env._env_rest[1].x)));
                        float ink6_fresnel1B = ink6_hsv1.b * fp_c7_data[48].y;
                        float ink6_NdotV = (eyeDir.z * ink6_unitNormY + ink6_VdotN_p2);
                        float ink6_NdotL_env = (eyeDir.z * ink6_unitLightZ + ink6_VdotL_p2);
                        float ink6_NdotL_light = (ink6_unitNormY * ink6_unitLightZ + ink6_NdotL_p2);
                        float ink6_NdotEnvDir = (ink6_unitNormY * (-env._env_rest[1].z) + ink6_NenvXY_p2);
                        float ink6_roughnessParam = (fp_c7_data[48].z * 0.5 + 0.5);
                        float ink6_fresnel1G = ink6_hsv1.g * fp_c7_data[48].y;
                        float ink6_NdotL_env_clamped = max(ink6_NdotL_env, 9.999999939e-09);
                        float ink6_envFresnel = exp2(ink6_NdotEnv_clamped * ink6_envFresnel_exp);
                        float ink6_NdotV_clamped = max(ink6_NdotV, 9.999999939e-09);
                        float ink6_roughSq = (ink6_roughnessParam * 0.5) * ink6_roughnessParam;
                        float ink6_NdotEnv_clamped2 = max(ink6_NdotEnv_full, 9.999999939e-09);
                        float ink6_lightFresnel_exp = (ink6_NdotL_env_clamped * -5.554729939 + -6.98316002);
                        float ink6_geoV_raw = (ink6_NdotV_clamped * (-ink6_roughSq) + ink6_NdotV_clamped);
                        float ink6_pixelU = ink6_texU * (float(ink6_texWidthI));
                        float ink6_pixelV = ink6_texV * (float(ink6_texHeightI));
                        float ink6_fresnelBlendB_env = (ink6_fresnel1B * (-ink6_envFresnel) + ink6_envFresnel);
                        float ink6_roughness_sq = fp_c7_data[48].z * fp_c7_data[48].z;
                        float ink6_NdotEnv_sq = ink6_NdotEnv_clamped2 * ink6_NdotEnv_clamped2;
                        float ink6_NdotL_clamped = max(ink6_NdotL_light, 9.999999939e-09);
                        float ink6_invGeoV = 1.0 / (ink6_roughSq + ink6_geoV_raw);
                        float ink6_absNdotEnv_pos = max((-ink6_NdotEnvDir), 9.999999939e-09);
                        float ink6_lightFresnel = exp2(ink6_NdotL_env_clamped * ink6_lightFresnel_exp);
                        float ink6_NdotEnvDir_pos = max(ink6_NdotEnvDir, 9.999999939e-09);
                        float ink6_NdotL_sq = ink6_NdotL_clamped * ink6_NdotL_clamped;
                        float ink6_geoEnv_raw1 = (ink6_roughSq * (-ink6_absNdotEnv_pos) + ink6_absNdotEnv_pos);
                        float ink6_geoEnv_raw2 = (ink6_roughSq * (-ink6_NdotEnvDir_pos) + ink6_NdotEnvDir_pos);
                        float ink6_ndfDenom_raw = ((ink6_roughness_sq * ink6_roughness_sq) * ink6_NdotL_sq + (-ink6_NdotL_sq));
                        float ink6_fresnelBlendB_light = (ink6_fresnel1B * (-ink6_lightFresnel) + ink6_lightFresnel);
                        float ink6_pixelNormU = ((ink6_pixelU + (-(floor(ink6_pixelU)))) * 2.0 + -1.0);
                        float ink6_ndf2Denom_raw = (ink6_NdotEnv_sq * (ink6_roughness_sq * ink6_roughness_sq) + (-ink6_NdotEnv_sq));
                        float ink6_fresnel1R = ink6_hsv1.r * fp_c7_data[48].y;
                        float ink6_fresnelBlendR_env = (ink6_fresnel1R * (-ink6_envFresnel) + ink6_envFresnel);
                        float ink6_fresnelBlendR_light = (ink6_fresnel1R * (-ink6_lightFresnel) + ink6_lightFresnel);
                        float ink6_fresnelBlendG_env = (ink6_fresnel1G * (-ink6_envFresnel) + ink6_envFresnel);
                        float ink6_fresnelBlendG_light = (ink6_fresnel1G * (-ink6_lightFresnel) + ink6_lightFresnel);
                        float ink6_pixelNormV = ((ink6_pixelV + (-(floor(ink6_pixelV)))) * 2.0 + -1.0);
                        float ink6_viewZXY = (eyeDir.y * ctx.cViewInv[1].z + (eyeDir.x * ctx.cViewInv[0].z));
                        float ink6_pixelNorm_sq = (ink6_pixelNormV * ink6_pixelNormV + (ink6_pixelNormU * ink6_pixelNormU));
                        float ink6_ndf2_partial = ink6_roughness_sq * (1.0 / (max((ink6_ndf2Denom_raw + 1.0), 9.999999939e-09)));
                        float ink6_ndf1_partial = ink6_roughness_sq * (1.0 / (max((ink6_ndfDenom_raw + 1.0), 9.999999939e-09)));
                        float ink6_viewZ = (eyeDir.z * ctx.cViewInv[2].z + ink6_viewZXY);
                        float ink6_rampOffset = (ink6_rampSample * fp_c7_data[49].w + fp_c7_data[49].z);
                        float ink6_specEnv = (ink6_invGeoV * (1.0 / (ink6_roughSq + ink6_geoEnv_raw1))) * (ink6_ndf2_partial * ink6_ndf2_partial);
                        bool ink6_is_closePixel = (sqrt(ink6_pixelNorm_sq)) < 0.9499999881;
                        float ink6_specLight = (ink6_invGeoV * (1.0 / (ink6_roughSq + ink6_geoEnv_raw2))) * (ink6_ndf1_partial * ink6_ndf1_partial);
                        float ink6_ditherParam = (ink6_viewZ * 4.6875 + 4.375);
                        bool ink6_is_NdotL_pos = NdotL_raw >= 0.0;
                        bool ink6_is_NdotL_nan = isnan(NdotL_raw);
                        bool ink6_is_frontFace = ink6_is_NdotL_pos || ink6_is_NdotL_nan;
                        float ink6_backFaceWeight = ink6_is_frontFace ? 0.0 : 1.0;
                        bool ink6_is_NdotL_positive = NdotL_raw > 0.0;
                        float ink6_frontFaceSelect = ink6_is_NdotL_positive ? 1.0 : 0.0;
                        float ink6_rampBlendFactor = (clamp(((-ink6_rampOffset) + 1.0), 0.0, 1.0)) * fp_c7_data[48].w;
                        float ink6_ditherNormB = (clamp(ink6_ditherParam, 0.0, 1.0)) * ((clamp(((-ink6_rampOffset) + ink6_norm.b), 0.0, 1.0)) * (clamp(ink6_distFadeRaw, 0.0, 1.0)));
                        vec3 ink6_totalSpec;
                        ink6_totalSpec.r = (((ink6_fresnel1R + ink6_fresnelBlendR_light) * ink6_specLight) * ink6_frontFaceSelect + (ink6_backFaceWeight * ((ink6_fresnel1R + ink6_fresnelBlendR_env) * ink6_specEnv)));
                        ink6_totalSpec.g = (((ink6_fresnel1G + ink6_fresnelBlendG_light) * ink6_specLight) * ink6_frontFaceSelect + (ink6_backFaceWeight * ((ink6_fresnel1G + ink6_fresnelBlendG_env) * ink6_specEnv)));
                        float ink6_ditherFinal = ink6_ditherNormB;
                        if (!ink6_is_closePixel)
                        {
                            ink6_ditherFinal = 0.0;
                        }
                        ink6_totalSpec.b = (((ink6_fresnel1B + ink6_fresnelBlendB_light) * ink6_specLight) * ink6_frontFaceSelect + (ink6_backFaceWeight * ((ink6_fresnel1B + ink6_fresnelBlendB_env) * ink6_specEnv)));
                        vec3 ink6_emitDelta;
                        ink6_emitDelta.r = (ink6_hsv1.r * fp_c7_data[18].z + (-ink6_stEmitR_partial));
                        float ink6_rampMask = (ink6_rampFade * (-ink6_rampBlendFactor) + ink6_rampBlendFactor);
                        ink6_emitDelta.b = (ink6_hsv1.b * fp_c7_data[18].z + (-ink6_stEmitB_partial));
                        ink6_emitDelta.g = (ink6_hsv1.g * fp_c7_data[18].z + (-ink6_stEmitG_partial));
                        vec3 ink6_stEmit;
                        ink6_stEmit.r = (ink6_emitDelta.r * ink6_rampMask + ink6_stEmitR_partial);
                        ink6_stEmit.b = (ink6_emitDelta.b * ink6_rampMask + ink6_stEmitB_partial);
                        vec3 ink6_extraSpec = vec3((ink6_totalSpec.r * ink6_ditherFinal) * 0.0795774683, (ink6_totalSpec.g * ink6_ditherFinal) * 0.0795774683, (ink6_totalSpec.b * ink6_ditherFinal) * 0.0795774683);
                        ink6_stEmit.g = (ink6_emitDelta.g * ink6_rampMask + ink6_stEmitG_partial);
                        vec3 ink6_stDielec;
                        ink6_stDielec.b = ((ink6_hsv1.b + (-ink6_stDielecB_partial)) * ink6_rampMask + ink6_stDielecB_partial);
                        vec3 ink6_stExtra;
                        ink6_stExtra.r = (ink6_rampFade * (-ink6_extraSpec.r) + ink6_extraSpec.r);
                        ink6_stDielec.r = ((ink6_hsv1.r + (-ink6_stDielecR_partial)) * ink6_rampMask + ink6_stDielecR_partial);
                        vec3 ink6_stSpec = vec3((ink6_rampFade * (ink6_specBias.r + 0.0399999991) + fp_c7_data[19].x), (ink6_rampFade * (ink6_specBias.g + 0.0399999991) + fp_c7_data[19].x), (ink6_rampFade * (ink6_specBias.b + 0.0399999991) + fp_c7_data[19].x));
                        ink6_stExtra.g = (ink6_rampFade * (-ink6_extraSpec.g) + ink6_extraSpec.g);
                        ink6_stExtra.b = (ink6_rampFade * (-ink6_extraSpec.b) + ink6_extraSpec.b);
                        ink6_stDielec.g = ((ink6_hsv1.g + (-ink6_stDielecG_partial)) * ink6_rampMask + ink6_stDielecG_partial);
                        inkReflect = ink6_stSpec;
                        stDielec = ink6_stDielec;
                        stEmit = ink6_stEmit;
                        stExtra = ink6_stExtra;
                        inkBranchDone = true;
                    }
                    else
                    {
                        bool ink7_is_inkType7 = inkTypeInt == 7;
                        if (ink7_is_inkType7)
                        {
                            float ink7_uBiased = (bravoWeight * 0.5 + paintU);
                            float ink7_vBiased = (charlieWeight * 0.5 + paintV_inv);
                            float ink7_texU = ink7_uBiased * fp_c7_data[48].x;
                            float ink7_texV = ink7_vBiased * fp_c7_data[48].x;
                            vec2 user1Sample_1467 = texture(user1Tex, vec2(ink7_texU, ink7_texV)).rg;
                            vec3 user2Sample_1469 = texture(user2Tex, vec2(ink7_texU, ink7_texV)).rgb;
                            bool ink7_is_dG_ge_dB = dielectric.g >= dielectric.b;
                            float ink7_dG_ge_dB_sel = ink7_is_dG_ge_dB ? 1.0 : 0.0;
                            bool ink7_is_eG_ge_eB = emissionG >= emissionB;
                            float ink7_eG_ge_eB_sel = ink7_is_eG_ge_eB ? 1.0 : 0.0;
                            float ink7_dielecMaxGB = ((dielectric.g + (-dielectric.b)) * ink7_dG_ge_dB_sel + dielectric.b);
                            float ink7_emitMaxGB = ((emissionG + (-emissionB)) * ink7_eG_ge_eB_sel + emissionB);
                            float ink7_dielecMinGB = (((-dielectric.g) + dielectric.b) * ink7_dG_ge_dB_sel + dielectric.g);
                            float ink7_dielecHueBase = (-ink7_dG_ge_dB_sel) + 0.666666687;
                            bool ink7_is_dR_ge_maxGB = dielectric.r >= ink7_dielecMaxGB;
                            float ink7_dR_ge_maxGB_sel = ink7_is_dR_ge_maxGB ? 1.0 : 0.0;
                            bool ink7_is_eR_ge_emitMaxGB = emissionR >= ink7_emitMaxGB;
                            float ink7_eR_ge_emitMaxGB_sel = ink7_is_eR_ge_emitMaxGB ? 1.0 : 0.0;
                            float ink7_emitMinGB = (((-emissionG) + emissionB) * ink7_eG_ge_eB_sel + emissionG);
                            float ink7_dielecMinR_raw = ((ink7_dielecMaxGB + (-dielectric.r)) * ink7_dR_ge_maxGB_sel + dielectric.r);
                            float ink7_dielecValue = (((-ink7_dielecMaxGB) + dielectric.r) * ink7_dR_ge_maxGB_sel + ink7_dielecMaxGB);
                            float ink7_emitMinR_raw = (((-emissionR) + ink7_emitMaxGB) * ink7_eR_ge_emitMaxGB_sel + emissionR);
                            float ink7_dielecHue = ((ink7_dG_ge_dB_sel + -1.0) + (-ink7_dielecHueBase) * ink7_dR_ge_maxGB_sel + ink7_dielecHueBase);
                            float ink7_emitValue = ((emissionR + (-ink7_emitMaxGB)) * ink7_eR_ge_emitMaxGB_sel + ink7_emitMaxGB);
                            float ink7_emitHueBase = (-ink7_eG_ge_eB_sel) + 0.666666687;
                            float ink7_dielecChroma = ink7_dielecValue + (-(min(ink7_dielecMinGB, ink7_dielecMinR_raw)));
                            float ink7_emitChroma = ink7_emitValue + (-(min(ink7_emitMinGB, ink7_emitMinR_raw)));
                            float ink7_dielecHueRange = (ink7_dielecChroma * 6.0 + 1.00000001E-10);
                            float ink7_emitHueRange = (ink7_emitChroma * 6.0 + 1.00000001E-10);
                            float ink7_emitHue = ((ink7_eG_ge_eB_sel + -1.0) + (-ink7_emitHueBase) * ink7_eR_ge_emitMaxGB_sel + ink7_emitHueBase);
                            float ink7_blendWeight_p1 = (alphaWeightFine * fp_c7_data[48].y + (bravoWeight * fp_c7_data[49].w));
                            float ink7_crossYZ = (rawNorm.y * paintXfm.z + (-(rawNorm.z * paintXfm.y)));
                            float ink7_totalWeight = (charlieWeight * fp_c7_data[50].w + ink7_blendWeight_p1);
                            float ink7_dielecSaturation = ink7_dielecChroma * (1.0 / (ink7_dielecValue + 1.00000001E-10));
                            float ink7_dielecHueFull = ((1.0 / ink7_dielecHueRange) * ((-ink7_dielecMinGB) + ink7_dielecMinR_raw) + ink7_dielecHue);
                            float ink7_emitHueFull = ((1.0 / ink7_emitHueRange) * ((-ink7_emitMinGB) + ink7_emitMinR_raw) + ink7_emitHue);
                            float ink7_crossXY = (rawNorm.x * paintXfm.y + (-(rawNorm.y * paintXfm.x)));
                            float ink7_crossZX = (rawNorm.z * paintXfm.x + (-(rawNorm.x * paintXfm.z)));
                            float ink7_colorR_decoded = (user2Sample_1469.x * 2.007874012 + -1.00787401);
                            float ink7_normRG_sqSum = (user1Sample_1467.x * user1Sample_1467.x + (user1Sample_1467.y * user1Sample_1467.y));
                            float ink7_pertNormXY_r = (paintXfm.z * user1Sample_1467.x + (user1Sample_1467.y * ink7_crossXY));
                            float ink7_hueShiftDielec = (ink7_totalWeight * ink7_colorR_decoded + (abs(ink7_dielecHueFull)));
                            float ink7_emitSaturation = ink7_emitChroma * (1.0 / (ink7_emitValue + 1.00000001E-10));
                            float ink7_normB_val = sqrt((clamp(((-ink7_normRG_sqSum) + 1.0), 0.0, 1.0)));
                            float ink7_pertNormYZ_r = (paintXfm.x * user1Sample_1467.x + (user1Sample_1467.y * ink7_crossYZ));
                            float ink7_pertNormZX_r = (paintXfm.y * user1Sample_1467.x + (user1Sample_1467.y * ink7_crossZX));
                            float ink7_hueShiftEmit = (ink7_totalWeight * ink7_colorR_decoded + (abs(ink7_emitHueFull)));
                            float ink7_perturbedNormZ = (rawNorm.x * ink7_normB_val + ink7_pertNormYZ_r);
                            float ink7_perturbedNormX = (rawNorm.y * ink7_normB_val + ink7_pertNormZX_r);
                            float ink7_perturbedNormY = (rawNorm.z * ink7_normB_val + ink7_pertNormXY_r);
                            float ink7_hueFracDielec = ink7_hueShiftDielec + (-(floor(ink7_hueShiftDielec)));
                            float ink7_pNormXZ_sq = (ink7_perturbedNormX * ink7_perturbedNormX + (ink7_perturbedNormZ * ink7_perturbedNormZ));
                            float ink7_hueFracEmit = ink7_hueShiftEmit + (-(floor(ink7_hueShiftEmit)));
                            float ink7_blendAmount = user2Sample_1469.z * (clamp(((paintStrength + (-fp_c7_data[48].z)) * (1.0 / fp_c7_data[48].w)), 0.0, 1.0));
                            float ink7_hueD_plus1 = ink7_hueFracDielec + 1.0;
                            float ink7_hueD_plus23 = ink7_hueFracDielec + 0.666666687;
                            float ink7_pNormLen_sq = (ink7_perturbedNormY * ink7_perturbedNormY + ink7_pNormXZ_sq);
                            float ink7_hueD_plus13 = ink7_hueFracDielec + 0.333333343;
                            float ink7_pNormInvLen = inversesqrt(ink7_pNormLen_sq);
                            float ink7_hueE_plus1 = ink7_hueFracEmit + 1.0;
                            float ink7_hueE_plus23 = ink7_hueFracEmit + 0.666666687;
                            float ink7_hueE_plus13 = ink7_hueFracEmit + 0.333333343;
                            float ink7_stRoughness = (ink7_blendAmount * ((-roughness) + fp_c7_data[49].z) + roughness);
                            float ink7_normDeltaZ = (ink7_perturbedNormZ * ink7_pNormInvLen + (-curNorm.z));
                            float ink7_normDeltaX = (ink7_perturbedNormX * ink7_pNormInvLen + (-curNorm.x));
                            float ink7_normDeltaY = (ink7_perturbedNormY * ink7_pNormInvLen + (-curNorm.y));
                            float ink7_stNormZ = (ink7_blendAmount * ink7_normDeltaZ + curNorm.z);
                            float ink7_stNormX = (ink7_blendAmount * ink7_normDeltaX + curNorm.x);
                            float ink7_stNormY = (ink7_blendAmount * ink7_normDeltaY + curNorm.y);
                            float ink7_hueDR_ramp = ((ink7_hueD_plus1 + (-(floor(ink7_hueD_plus1)))) * 6.0 + -3.0);
                            float ink7_hueDG_ramp = ((ink7_hueD_plus23 + (-(floor(ink7_hueD_plus23)))) * 6.0 + -3.0);
                            float ink7_hueDB_ramp = ((ink7_hueD_plus13 + (-(floor(ink7_hueD_plus13)))) * 6.0 + -3.0);
                            float ink7_hueER_ramp = ((ink7_hueE_plus1 + (-(floor(ink7_hueE_plus1)))) * 6.0 + -3.0);
                            float ink7_stNormXZ_sq = (ink7_stNormX * ink7_stNormX + (ink7_stNormZ * ink7_stNormZ));
                            float ink7_hueEG_ramp = ((ink7_hueE_plus23 + (-(floor(ink7_hueE_plus23)))) * 6.0 + -3.0);
                            float ink7_hueEB_ramp = ((ink7_hueE_plus13 + (-(floor(ink7_hueE_plus13)))) * 6.0 + -3.0);
                            float ink7_dielecR_delta = ((clamp(((abs(ink7_hueDR_ramp)) + -1.0), 0.0, 1.0)) * ink7_dielecSaturation + (-ink7_dielecSaturation));
                            float ink7_dielecG_delta = ((clamp(((abs(ink7_hueDG_ramp)) + -1.0), 0.0, 1.0)) * ink7_dielecSaturation + (-ink7_dielecSaturation));
                            float ink7_dielecB_delta = ((clamp(((abs(ink7_hueDB_ramp)) + -1.0), 0.0, 1.0)) * ink7_dielecSaturation + (-ink7_dielecSaturation));
                            float ink7_stNormLen_sq = (ink7_stNormY * ink7_stNormY + ink7_stNormXZ_sq);
                            float ink7_emitR_delta = (ink7_emitSaturation * (clamp(((abs(ink7_hueER_ramp)) + -1.0), 0.0, 1.0)) + (-ink7_emitSaturation));
                            float ink7_stNormInvLen = inversesqrt(ink7_stNormLen_sq);
                            float ink7_dielecG_shifted = (ink7_dielecValue * ink7_dielecG_delta + ink7_dielecValue);
                            float ink7_dielecB_shifted = (ink7_dielecValue * ink7_dielecB_delta + ink7_dielecValue);
                            float ink7_dielecR_shifted = (ink7_dielecValue * ink7_dielecR_delta + ink7_dielecValue);
                            float ink7_emitG_delta = (ink7_emitSaturation * (clamp(((abs(ink7_hueEG_ramp)) + -1.0), 0.0, 1.0)) + (-ink7_emitSaturation));
                            float ink7_emitR_shifted = (ink7_emitValue * ink7_emitR_delta + ink7_emitValue);
                            float ink7_emitB_delta = (ink7_emitSaturation * (clamp(((abs(ink7_hueEB_ramp)) + -1.0), 0.0, 1.0)) + (-ink7_emitSaturation));
                            float ink7_emitG_shifted = (ink7_emitValue * ink7_emitG_delta + ink7_emitValue);
                            float ink7_emitB_shifted = (ink7_emitValue * ink7_emitB_delta + ink7_emitValue);
                            float ink7_unitNormZ = ink7_stNormZ * ink7_stNormInvLen;
                            float ink7_stDielecG_raw = (user2Sample_1469.y * ((-ink7_dielecG_shifted) + fp_c7_data[50].y) + ink7_dielecG_shifted);
                            float ink7_unitNormX = ink7_stNormX * ink7_stNormInvLen;
                            float ink7_stDielecB_raw = (user2Sample_1469.y * ((-ink7_dielecB_shifted) + fp_c7_data[50].z) + ink7_dielecB_shifted);
                            float ink7_stEmitR_raw = (user2Sample_1469.y * ((-ink7_emitR_shifted) + fp_c7_data[50].x) + ink7_emitR_shifted);
                            float ink7_stDielecR_raw = (user2Sample_1469.y * ((-ink7_dielecR_shifted) + fp_c7_data[50].x) + ink7_dielecR_shifted);
                            float ink7_stEmitB_raw = (user2Sample_1469.y * ((-ink7_emitB_shifted) + fp_c7_data[50].z) + ink7_emitB_shifted);
                            float ink7_unitNormY = ink7_stNormY * ink7_stNormInvLen;
                            float ink7_normXY_envXY = (ink7_unitNormX * (-env._env_rest[1].y) + (ink7_unitNormZ * (-env._env_rest[1].x)));
                            float ink7_stEmitG_raw = (user2Sample_1469.y * ((-ink7_emitG_shifted) + fp_c7_data[50].y) + ink7_emitG_shifted);
                            vec3 ink7_stDielec;
                            ink7_stDielec.b = ((ink7_stDielecB_raw + (-dielectric.b)) * ink7_blendAmount + dielectric.b);
                            float ink7_emitR_blend = (ink7_stEmitR_raw * fp_c7_data[49].y + (-emissionR));
                            float ink7_NdotL = (ink7_unitNormY * (-env._env_rest[1].z) + ink7_normXY_envXY);
                            float ink7_emitG_blend = (ink7_stEmitG_raw * fp_c7_data[49].y + (-emissionG));
                            float ink7_VdotN_p2 = (eyeDir.y * ink7_unitNormX + (eyeDir.x * ink7_unitNormZ));
                            float ink7_emitB_blend = (ink7_stEmitB_raw * fp_c7_data[49].y + (-emissionB));
                            ink7_stDielec.r = ((ink7_stDielecR_raw + (-dielectric.r)) * ink7_blendAmount + dielectric.r);
                            ink7_stDielec.g = ((ink7_stDielecG_raw + (-dielectric.g)) * ink7_blendAmount + dielectric.g);
                            float ink7_NdotL_clamped = clamp(ink7_NdotL, 0.0, 1.0);
                            vec3 ink7_stEmit;
                            ink7_stEmit.g = (ink7_blendAmount * ink7_emitG_blend + emissionG);
                            float ink7_NdotV = (eyeDir.z * ink7_unitNormY + ink7_VdotN_p2);
                            ink7_stEmit.r = (ink7_blendAmount * ink7_emitR_blend + emissionR);
                            ink7_stEmit.b = (ink7_blendAmount * ink7_emitB_blend + emissionB);
                            stNormZ = ink7_unitNormZ;
                            stNdotV = ink7_NdotV;
                            stRoughness = ink7_stRoughness;
                            stNormX = ink7_unitNormX;
                            stNormY = ink7_unitNormY;
                            inkNormX = ink7_unitNormX;
                            inkNormZ = ink7_unitNormZ;
                            inkNormY = ink7_unitNormY;
                            stDielec = ink7_stDielec;
                            stEmit = ink7_stEmit;
                            stLight = vec3((ink7_NdotL_clamped * env.cLightColor.x), (ink7_NdotL_clamped * env.cLightColor.y), (ink7_NdotL_clamped * env.cLightColor.z));
                            stNdotL = ink7_NdotL;
                            inkBranchDone = true;
                        }
                        else
                        {
                            bool ink8_is_inkType8 = inkTypeInt == 8;
                            if (ink8_is_inkType8)
                            {
                                float ink8_distortU_base = (fp_c7_data[19].y * fp_c7_data[50].w + paintU);
                                float ink8_distortV_base = (fp_c7_data[19].y * fp_c7_data[51].w + paintV_inv);
                                vec2 user2Sample_1752 = texture(user2Tex, vec2((ink8_distortU_base * fp_c7_data[48].z), (ink8_distortV_base * fp_c7_data[48].z))).rg;
                                float ink8_baseU = (fp_c7_data[19].y * fp_c7_data[49].z + paintU);
                                float ink8_baseV = (fp_c7_data[19].y * fp_c7_data[49].w + paintV_inv);
                                float ink8_warpedU = (user2Sample_1752.x * fp_c7_data[48].w + ink8_baseU);
                                float ink8_warpedV = (user2Sample_1752.y * fp_c7_data[48].w + ink8_baseV);
                                float ink8_texU = ink8_warpedU * fp_c7_data[48].x;
                                float ink8_texV = ink8_warpedV * fp_c7_data[48].x;
                                int ink8_lodInt = int(((0.0) * 256.0));
                                int ink8_mipInt = int(trunc(((float(uint(ink8_lodInt))) * 0.00390625)));
                                int ink8_mipWidthI = textureSize(user1Tex, ink8_mipInt).r;
                                int ink8_mipHeightI = textureSize(user1Tex, ink8_mipInt).g;
                                float ink8_mipWidth = float(ink8_mipWidthI);
                                float ink8_mipHeight = float(ink8_mipHeightI);
                                float ink8_pixelU = (ink8_texU * ink8_mipWidth + -0.5);
                                float ink8_invWidth = 1.0 / ink8_mipWidth;
                                float ink8_pixelV = (ink8_texV * ink8_mipHeight + -0.5);
                                float ink8_invHeight = 1.0 / ink8_mipHeight;
                                float ink8_pixelU_floor = floor(ink8_pixelU);
                                float ink8_pixelV_floor = floor(ink8_pixelV);
                                float ink8_fracU = ink8_pixelU + (-ink8_pixelU_floor);
                                float ink8_fracV = ink8_pixelV + (-ink8_pixelV_floor);
                                float ink8_wU2 = (-ink8_fracU) + 2.0;
                                float ink8_wU3 = (-ink8_fracU) + 3.0;
                                float ink8_wU1 = (-ink8_fracU) + 1.0;
                                float ink8_wV2 = (-ink8_fracV) + 2.0;
                                float ink8_wV3 = (-ink8_fracV) + 3.0;
                                float ink8_wV1 = (-ink8_fracV) + 1.0;
                                float ink8_wU2_cb = ink8_wU2 * (ink8_wU2 * ink8_wU2);
                                float ink8_wU1_cb = ink8_wU1 * (ink8_wU1 * ink8_wU1);
                                float ink8_wV2_cb = ink8_wV2 * (ink8_wV2 * ink8_wV2);
                                float ink8_wV1_cb = ink8_wV1 * (ink8_wV1 * ink8_wV1);
                                float ink8_bspU_p1 = (ink8_wU2_cb * -4.0 + (ink8_wU3 * (ink8_wU3 * ink8_wU3)));
                                float ink8_bspU_p2 = (ink8_wU1_cb * -4.0 + ink8_wU2_cb);
                                float ink8_bspV_p1 = (ink8_wV2_cb * -4.0 + (ink8_wV3 * (ink8_wV3 * ink8_wV3)));
                                float ink8_bspV_p2 = (ink8_wV1_cb * -4.0 + ink8_wV2_cb);
                                float ink8_bspU_p3 = (ink8_wU1_cb * 6.0 + ink8_bspU_p1);
                                float ink8_bspU_w01 = ink8_wU1_cb + ink8_bspU_p2;
                                float ink8_bspV_p3 = (ink8_wV1_cb * 6.0 + ink8_bspV_p1);
                                float ink8_bspV_w01 = ink8_wV1_cb + ink8_bspV_p2;
                                float ink8_bspU_w01_6th = ink8_bspU_w01 * 0.166666701;
                                float ink8_bspV_w01_6th = ink8_bspV_w01 * 0.166666701;
                                float ink8_bspU_w23 = (-ink8_bspU_p3) + (-ink8_wU1_cb) + (-ink8_bspU_p2) + 6.0;
                                float ink8_bspV_w23 = (-ink8_bspV_p3) + (-ink8_wV1_cb) + (-ink8_bspV_p2) + 6.0;
                                float ink8_bspU_wTotal_23 = ink8_bspU_p3 + ink8_bspU_w23;
                                float ink8_bspV_wTotal_23 = ink8_bspV_p3 + ink8_bspV_w23;
                                float ink8_sampleU01 = ((ink8_bspU_p2 * 0.166666701) * (1.0 / ink8_bspU_w01_6th) + ink8_pixelU_floor);
                                float ink8_sampleV01 = ((ink8_bspV_p2 * 0.166666701) * (1.0 / ink8_bspV_w01_6th) + ink8_pixelV_floor);
                                float ink8_texV01 = ink8_invHeight * (ink8_sampleV01 + -0.5);
                                float ink8_sampleU23 = ((ink8_bspU_w23 * 0.166666701) * (1.0 / (ink8_bspU_wTotal_23 * 0.166666701)) + ink8_pixelU_floor);
                                float ink8_texU01 = ink8_invWidth * (ink8_sampleU01 + -0.5);
                                float ink8_sampleV23 = ((ink8_bspV_w23 * 0.166666701) * (1.0 / (ink8_bspV_wTotal_23 * 0.166666701)) + ink8_pixelV_floor);
                                float ink8_texU23 = ink8_invWidth * (ink8_sampleU23 + 1.5);
                                float ink8_texV23 = ink8_invHeight * (ink8_sampleV23 + 1.5);
                                vec3 user1Sample_1853 = texture(user1Tex, vec2(ink8_texU23, ink8_texV23)).rgb;
                                vec3 user1Sample_1856 = texture(user1Tex, vec2(ink8_texU01, ink8_texV23)).rgb;
                                vec3 user1Sample_1859 = texture(user1Tex, vec2(ink8_texU01, ink8_texV01)).rgb;
                                vec3 user1Sample_1862 = texture(user1Tex, vec2(ink8_texU23, ink8_texV01)).rgb;
                                float ink8_blendU = ink8_bspU_w01_6th * (1.0 / ((ink8_bspU_w01 + ink8_bspU_wTotal_23) * 0.166666701));
                                float ink8_blendV = ink8_bspV_w01_6th * (1.0 / ((ink8_bspV_w01 + ink8_bspV_wTotal_23) * 0.166666701));
                                float ink8_interpR_row23 = (((-user1Sample_1853.x) + user1Sample_1856.x) * ink8_blendU + user1Sample_1853.x);
                                float ink8_interpB_row23 = (((-user1Sample_1853.z) + user1Sample_1856.z) * ink8_blendU + user1Sample_1853.z);
                                float ink8_interpR_row01 = (ink8_blendU * (user1Sample_1859.x + (-user1Sample_1862.x)) + user1Sample_1862.x);
                                float ink8_interpB_row01 = (ink8_blendU * (user1Sample_1859.z + (-user1Sample_1862.z)) + user1Sample_1862.z);
                                float ink8_interpG_row23 = (((-user1Sample_1853.y) + user1Sample_1856.y) * ink8_blendU + user1Sample_1853.y);
                                float ink8_interpG_row01 = (ink8_blendU * (user1Sample_1859.y + (-user1Sample_1862.y)) + user1Sample_1862.y);
                                vec3 ink8_bicubic;
                                ink8_bicubic.r = ((ink8_interpR_row01 + (-ink8_interpR_row23)) * ink8_blendV + ink8_interpR_row23);
                                ink8_bicubic.b = ((ink8_interpB_row01 + (-ink8_interpB_row23)) * ink8_blendV + ink8_interpB_row23);
                                vec3 ink8_log;
                                ink8_log.r = log2((abs(ink8_bicubic.r)));
                                ink8_bicubic.g = ((ink8_interpG_row01 + (-ink8_interpG_row23)) * ink8_blendV + ink8_interpG_row23);
                                ink8_log.b = log2((abs(ink8_bicubic.b)));
                                ink8_log.g = log2((abs(ink8_bicubic.g)));
                                float ink8_fadeFactor = clamp(((paintStrength + (-fp_c7_data[77].w)) * (1.0 / fp_c7_data[77].w)), 0.0, 1.0);
                                float ink8_emitGAccum = (alphaWeightFine * fp_c7_data[50].y + (bravoWeight * fp_c7_data[51].y));
                                float ink8_rampIntensity = (clamp(((texture(user2Tex, vec2((paintU * fp_c7_data[78].x), (paintV_inv * fp_c7_data[78].x))).r) + (-fp_c7_data[78].z) * (1.0 / ((-fp_c7_data[78].z) + fp_c7_data[78].y))), 0.0, 1.0)) * fp_c7_data[49].y;
                                float ink8_emitRAccum = (alphaWeightFine * fp_c7_data[50].x + (bravoWeight * fp_c7_data[51].x));
                                float ink8_emitBAccum = (alphaWeightFine * fp_c7_data[50].z + (bravoWeight * fp_c7_data[51].z));
                                float ink8_emitGFinal = (charlieWeight * fp_c7_data[77].y + ink8_emitGAccum);
                                float ink8_emitRFinal = (charlieWeight * fp_c7_data[77].x + ink8_emitRAccum);
                                float ink8_emitBFinal = (charlieWeight * fp_c7_data[77].z + ink8_emitBAccum);
                                vec3 ink8_color = vec3(((exp2(ink8_log.r * 0.454545438)) * ink8_fadeFactor) * ink8_rampIntensity, (ink8_fadeFactor * (exp2(ink8_log.g * 0.454545438))) * ink8_rampIntensity, (ink8_fadeFactor * (exp2(ink8_log.b * 0.454545438))) * ink8_rampIntensity);
                                vec3 ink8_stEmit;
                                ink8_stEmit.r = (ink8_emitRFinal * ink8_color.r + emissionR);
                                vec3 ink8_stDielec;
                                ink8_stDielec.r = (ink8_emitRFinal * ink8_color.r + dielectric.r);
                                ink8_stDielec.b = (ink8_emitBFinal * ink8_color.b + dielectric.b);
                                ink8_stEmit.b = (ink8_emitBFinal * ink8_color.b + emissionB);
                                ink8_stEmit.g = (ink8_emitGFinal * ink8_color.g + emissionG);
                                ink8_stDielec.g = (ink8_emitGFinal * ink8_color.g + dielectric.g);
                                stDielec = ink8_stDielec;
                                stEmit = ink8_stEmit;
                                inkBranchDone = true;
                            }
                            else
                            {
                                bool ink10_is_inkType10 = inkTypeInt == 10;
                                if (ink10_is_inkType10)
                                {
                                    float ink10_screenU = (fTexCoords01.x * gl_FragCoord.w) * invW;
                                    float ink10_screenV = (fTexCoords01.y * gl_FragCoord.w) * invW;
                                    vec2 user1Sample_1966 = texture(user1Tex, vec2((ink10_screenU * fp_c7_data[48].y), (ink10_screenV * fp_c7_data[48].y))).rg;
                                    float ink10_cellU = (ink10_screenU * fp_c7_data[48].x + fp_c7_data[49].z);
                                    float ink10_cellV = (ink10_screenV * fp_c7_data[48].x + fp_c7_data[49].w);
                                    float ink10_cellFloorU = floor(ink10_cellU);
                                    float ink10_cellFloorV = floor(ink10_cellV);
                                    float ink10_teamBlend_xy = (bravoWeight * mat.team_flag.y + (alphaWeightFine * mat.team_flag.x));
                                    float ink10_cellU_m1 = ink10_cellFloorU + -1.0;
                                    float ink10_cellV_m1 = ink10_cellFloorV + -1.0;
                                    float ink10_hashSeedV = (ink10_cellFloorV * 0.3678793907 + 0.318309903);
                                    float ink10_teamHue = (charlieWeight * mat.team_flag.z + ink10_teamBlend_xy);
                                    float ink10_hashSeedU = (ink10_cellFloorU * 0.3183099031 + 0.367879391);
                                    float ink10_hashSeedU_m1 = (ink10_cellU_m1 * 0.3183099031 + 0.367879391);
                                    float ink10_hashSeedV_m1 = (ink10_cellV_m1 * 0.3678793907 + 0.318309903);
                                    float ink10_hComb_m1_0 = (ink10_hashSeedU_m1 + ink10_hashSeedV) * (ink10_hashSeedU_m1 * ink10_hashSeedV);
                                    float ink10_hComb_m1_m1 = (ink10_hashSeedU_m1 + ink10_hashSeedV_m1) * (ink10_hashSeedU_m1 * ink10_hashSeedV_m1);
                                    float ink10_hFrac_m1_0 = ink10_hComb_m1_0 + (-(floor(ink10_hComb_m1_0)));
                                    float ink10_hFrac_m1_m1 = ink10_hComb_m1_m1 + (-(floor(ink10_hComb_m1_m1)));
                                    float ink10_cellV_p1 = ink10_cellFloorV + 1.0;
                                    float ink10_hFrac_m1_0_s1 = ink10_hFrac_m1_0 * 5.88607025;
                                    float ink10_hFrac_m1_m1_s2 = ink10_hFrac_m1_m1 * 5.09295845;
                                    float ink10_hFrac_m1_m1_s1 = ink10_hFrac_m1_m1 * 5.88607025;
                                    float ink10_hashSeedV_p1 = (ink10_cellV_p1 * 0.3678793907 + 0.318309903);
                                    float ink10_hComb_m1_p1 = (ink10_hashSeedU_m1 + ink10_hashSeedV_p1) * (ink10_hashSeedU_m1 * ink10_hashSeedV_p1);
                                    float ink10_hComb_0_0 = (ink10_hashSeedV + ink10_hashSeedU) * (ink10_hashSeedV * ink10_hashSeedU);
                                    float ink10_distortedU = (user1Sample_1966.x * fp_c7_data[48].z + ink10_cellU);
                                    float ink10_cellV_m1b = ink10_cellFloorV + -1.0;
                                    float ink10_distortedV = (user1Sample_1966.y * fp_c7_data[48].z + ink10_cellV);
                                    float ink10_hComb_0_m1 = (ink10_hashSeedV_m1 + ink10_hashSeedU) * (ink10_hashSeedV_m1 * ink10_hashSeedU);
                                    float ink10_deltaU_m1_m1 = ink10_distortedU + (-(ink10_cellU_m1 + (ink10_hFrac_m1_m1_s2 + (-(floor(ink10_hFrac_m1_m1_s2))))));
                                    float ink10_hComb_0_p1 = (ink10_hashSeedU + ink10_hashSeedV_p1) * (ink10_hashSeedU * ink10_hashSeedV_p1);
                                    float ink10_deltaV_m1_m1 = ink10_distortedV + (-(ink10_cellV_m1b + (ink10_hFrac_m1_m1_s1 + (-(floor(ink10_hFrac_m1_m1_s1))))));
                                    float ink10_hFrac_m1_p1 = ink10_hComb_m1_p1 + (-(floor(ink10_hComb_m1_p1)));
                                    float ink10_dist2_m1_m1 = (ink10_deltaU_m1_m1 * ink10_deltaU_m1_m1 + (ink10_deltaV_m1_m1 * ink10_deltaV_m1_m1));
                                    float ink10_hFrac_m1_0_s2 = ink10_hFrac_m1_0 * 5.09295845;
                                    float ink10_hFrac_m1_p1_s2 = ink10_hFrac_m1_p1 * 5.09295845;
                                    float ink10_cellU_p1 = ink10_cellFloorU + 1.0;
                                    bool ink10_is_cell0_valid = ink10_dist2_m1_m1 < 9999.0;
                                    float ink10_hashSeedU_p1 = (ink10_cellU_p1 * 0.3183099031 + 0.367879391);
                                    float ink10_deltaV_m1_0 = ink10_distortedV + (-(ink10_cellFloorV + (ink10_hFrac_m1_0_s1 + (-(floor(ink10_hFrac_m1_0_s1))))));
                                    float ink10_hFrac_m1_p1_s1 = ink10_hFrac_m1_p1 * 5.88607025;
                                    float ink10_hComb_p1_m1 = (ink10_hashSeedV_m1 + ink10_hashSeedU_p1) * (ink10_hashSeedV_m1 * ink10_hashSeedU_p1);
                                    float ink10_deltaU_m1_0 = ink10_distortedU + (-(ink10_cellU_m1 + (ink10_hFrac_m1_0_s2 + (-(floor(ink10_hFrac_m1_0_s2))))));
                                    float ink10_deltaU_m1_p1 = ink10_distortedU + (-(ink10_cellU_m1 + (ink10_hFrac_m1_p1_s2 + (-(floor(ink10_hFrac_m1_p1_s2))))));
                                    float ink10_dist2_m1_0 = (ink10_deltaU_m1_0 * ink10_deltaU_m1_0 + (ink10_deltaV_m1_0 * ink10_deltaV_m1_0));
                                    float ink10_colorSeedU_m1 = ink10_cellU_m1 * 12.9898005;
                                    float ink10_bestCandidate0 = ink10_cellU_m1;
                                    if (ink10_is_cell0_valid)
                                    {
                                        ink10_bestCandidate0 = ink10_dist2_m1_m1;
                                    }
                                    float ink10_bestDist0 = ink10_bestCandidate0;
                                    if (!ink10_is_cell0_valid)
                                    {
                                        ink10_bestDist0 = 9999.0;
                                    }
                                    float ink10_colorInput_m1_m1 = (ink10_cellV_m1b * 78.23300171 + ink10_colorSeedU_m1);
                                    bool ink10_is_cell1_closer = ink10_dist2_m1_0 < ink10_bestDist0;
                                    float ink10_colorInput_m1_0 = (ink10_cellFloorV * 78.23300171 + ink10_colorSeedU_m1);
                                    float ink10_colorInput_m1_p1 = (ink10_cellV_p1 * 78.23300171 + ink10_colorSeedU_m1);
                                    float ink10_deltaV_m1_p1 = ink10_distortedV + (-(ink10_cellV_p1 + (ink10_hFrac_m1_p1_s1 + (-(floor(ink10_hFrac_m1_p1_s1))))));
                                    float ink10_hComb_p1_0 = (ink10_hashSeedU_p1 + ink10_hashSeedV) * (ink10_hashSeedU_p1 * ink10_hashSeedV);
                                    float ink10_bestDist1 = ink10_bestDist0;
                                    if (ink10_is_cell1_closer)
                                    {
                                        ink10_bestDist1 = ink10_dist2_m1_0;
                                    }
                                    float ink10_colorHash_m1_m1_raw = sin(ink10_colorInput_m1_m1) * 43758.5469;
                                    float ink10_hComb_p1_p1 = (ink10_hashSeedU_p1 + ink10_hashSeedV_p1) * (ink10_hashSeedU_p1 * ink10_hashSeedV_p1);
                                    float ink10_colorHash_m1_0_raw = sin(ink10_colorInput_m1_0) * 43758.5469;
                                    float ink10_dist2_m1_p1 = (ink10_deltaU_m1_p1 * ink10_deltaU_m1_p1 + (ink10_deltaV_m1_p1 * ink10_deltaV_m1_p1));
                                    float ink10_colorHash_m1_p1_raw = sin(ink10_colorInput_m1_p1) * 43758.5469;
                                    float ink10_bestHash0 = (ink10_colorHash_m1_m1_raw + (-(floor(ink10_colorHash_m1_m1_raw))));
                                    float ink10_bestDist2 = ink10_bestDist1;
                                    if (!ink10_is_cell0_valid)
                                    {
                                        ink10_bestHash0 = 0.0;
                                    }
                                    float ink10_hFrac_0_0 = ink10_hComb_0_0 + (-(floor(ink10_hComb_0_0)));
                                    float ink10_hFrac_0_p1 = ink10_hComb_0_p1 + (-(floor(ink10_hComb_0_p1)));
                                    bool ink10_is_cell2_closer = ink10_dist2_m1_p1 < ink10_bestDist1;
                                    float ink10_bestHash1 = ink10_bestHash0;
                                    if (ink10_is_cell1_closer)
                                    {
                                        ink10_bestHash1 = (ink10_colorHash_m1_0_raw + (-(floor(ink10_colorHash_m1_0_raw))));
                                    }
                                    float ink10_hFrac_0_0_s2 = ink10_hFrac_0_0 * 5.09295845;
                                    float ink10_hFrac_0_0_s1 = ink10_hFrac_0_0 * 5.88607025;
                                    float ink10_hFrac_0_p1_s2 = ink10_hFrac_0_p1 * 5.09295845;
                                    float ink10_hFrac_0_m1 = ink10_hComb_0_m1 + (-(floor(ink10_hComb_0_m1)));
                                    float ink10_hFrac_0_p1_s1 = ink10_hFrac_0_p1 * 5.88607025;
                                    float ink10_hFrac_0_m1_s2 = ink10_hFrac_0_m1 * 5.09295845;
                                    float ink10_bestHash2 = ink10_bestHash1;
                                    if (ink10_is_cell2_closer)
                                    {
                                        ink10_bestHash2 = (ink10_colorHash_m1_p1_raw + (-(floor(ink10_colorHash_m1_p1_raw))));
                                    }
                                    float ink10_hFrac_0_m1_s1 = ink10_hFrac_0_m1 * 5.88607025;
                                    float ink10_bestHashTracker = ink10_bestHash2;
                                    if (ink10_is_cell2_closer)
                                    {
                                        ink10_bestDist2 = ink10_dist2_m1_p1;
                                    }
                                    float ink10_hFrac_p1_m1 = ink10_hComb_p1_m1 + (-(floor(ink10_hComb_p1_m1)));
                                    float ink10_hFrac_p1_m1_s2 = ink10_hFrac_p1_m1 * 5.09295845;
                                    float ink10_hFrac_p1_p1 = ink10_hComb_p1_p1 + (-(floor(ink10_hComb_p1_p1)));
                                    float ink10_deltaU_0_0 = ink10_distortedU + (-(ink10_cellFloorU + (ink10_hFrac_0_0_s2 + (-(floor(ink10_hFrac_0_0_s2))))));
                                    float ink10_hFrac_p1_0 = ink10_hComb_p1_0 + (-(floor(ink10_hComb_p1_0)));
                                    float ink10_deltaU_0_p1 = ink10_distortedU + (-(ink10_cellFloorU + (ink10_hFrac_0_p1_s2 + (-(floor(ink10_hFrac_0_p1_s2))))));
                                    float ink10_hFrac_p1_0_s2 = ink10_hFrac_p1_0 * 5.09295845;
                                    float ink10_hFrac_p1_0_s1 = ink10_hFrac_p1_0 * 5.88607025;
                                    float ink10_deltaU_p1_m1 = ink10_distortedU + (-(ink10_cellU_p1 + (ink10_hFrac_p1_m1_s2 + (-(floor(ink10_hFrac_p1_m1_s2))))));
                                    float ink10_hFrac_p1_p1_s2 = ink10_hFrac_p1_p1 * 5.09295845;
                                    float ink10_hFrac_p1_p1_s1 = ink10_hFrac_p1_p1 * 5.88607025;
                                    float ink10_deltaU_p1_0 = ink10_distortedU + (-(ink10_cellU_p1 + (ink10_hFrac_p1_0_s2 + (-(floor(ink10_hFrac_p1_0_s2))))));
                                    float ink10_deltaU_0_m1 = ink10_distortedU + (-(ink10_cellFloorU + (ink10_hFrac_0_m1_s2 + (-(floor(ink10_hFrac_0_m1_s2))))));
                                    float ink10_colorSeedU_0 = ink10_cellFloorU * 12.9898005;
                                    float ink10_colorSeedU_p1 = ink10_cellU_p1 * 12.9898005;
                                    float ink10_deltaV_0_m1 = ink10_distortedV + (-(ink10_cellV_m1b + (ink10_hFrac_0_m1_s1 + (-(floor(ink10_hFrac_0_m1_s1))))));
                                    float ink10_deltaV_0_0 = ink10_distortedV + (-(ink10_cellFloorV + (ink10_hFrac_0_0_s1 + (-(floor(ink10_hFrac_0_0_s1))))));
                                    float ink10_colorInput_0_0 = (ink10_cellFloorV * 78.23300171 + ink10_colorSeedU_0);
                                    float ink10_deltaU_p1_p1 = ink10_distortedU + (-(ink10_cellU_p1 + (ink10_hFrac_p1_p1_s2 + (-(floor(ink10_hFrac_p1_p1_s2))))));
                                    float ink10_dist2_0_m1 = (ink10_deltaU_0_m1 * ink10_deltaU_0_m1 + (ink10_deltaV_0_m1 * ink10_deltaV_0_m1));
                                    float ink10_dist2_0_0 = (ink10_deltaU_0_0 * ink10_deltaU_0_0 + (ink10_deltaV_0_0 * ink10_deltaV_0_0));
                                    bool ink10_is_cell_0_m1_closer = ink10_dist2_0_m1 < ink10_bestDist2;
                                    float ink10_bestDist3 = ink10_bestDist2;
                                    if (ink10_is_cell_0_m1_closer)
                                    {
                                        ink10_bestDist3 = ink10_dist2_0_m1;
                                    }
                                    float ink10_hFrac_p1_m1_s1 = ink10_hFrac_p1_m1 * 5.88607025;
                                    bool ink10_is_cell_0_0_closer = ink10_dist2_0_0 < ink10_bestDist3;
                                    float ink10_deltaV_0_p1 = ink10_distortedV + (-(ink10_cellV_p1 + (ink10_hFrac_0_p1_s1 + (-(floor(ink10_hFrac_0_p1_s1))))));
                                    float ink10_dist2_0_p1 = (ink10_deltaU_0_p1 * ink10_deltaU_0_p1 + (ink10_deltaV_0_p1 * ink10_deltaV_0_p1));
                                    float ink10_bestDist4 = ink10_bestDist3;
                                    if (ink10_is_cell_0_0_closer)
                                    {
                                        ink10_bestDist4 = ink10_dist2_0_0;
                                    }
                                    float ink10_colorInput_0_m1 = (ink10_cellV_m1 * 78.23300171 + ink10_colorSeedU_0);
                                    float ink10_colorInput_0_p1 = (ink10_cellV_p1 * 78.23300171 + ink10_colorSeedU_0);
                                    bool ink10_is_cell_0_p1_closer = ink10_dist2_0_p1 < ink10_bestDist4;
                                    float ink10_deltaV_p1_m1 = ink10_distortedV + (-(ink10_cellV_m1b + (ink10_hFrac_p1_m1_s1 + (-(floor(ink10_hFrac_p1_m1_s1))))));
                                    float ink10_colorInput_p1_m1 = (ink10_cellV_m1b * 78.23300171 + ink10_colorSeedU_p1);
                                    float ink10_colorInput_p1_p1 = (ink10_cellV_p1 * 78.23300171 + ink10_colorSeedU_p1);
                                    float ink10_colorInput_p1_0 = (ink10_cellFloorV * 78.23300171 + ink10_colorSeedU_p1);
                                    float ink10_deltaV_p1_0 = ink10_distortedV + (-(ink10_cellFloorV + (ink10_hFrac_p1_0_s1 + (-(floor(ink10_hFrac_p1_0_s1))))));
                                    float ink10_deltaV_p1_p1 = ink10_distortedV + (-(ink10_cellV_p1 + (ink10_hFrac_p1_p1_s1 + (-(floor(ink10_hFrac_p1_p1_s1))))));
                                    float ink10_bestDist5 = ink10_bestDist4;
                                    if (ink10_is_cell_0_p1_closer)
                                    {
                                        ink10_bestDist5 = ink10_dist2_0_p1;
                                    }
                                    float ink10_dist2_p1_m1 = (ink10_deltaU_p1_m1 * ink10_deltaU_p1_m1 + (ink10_deltaV_p1_m1 * ink10_deltaV_p1_m1));
                                    float ink10_colorHash_0_m1_raw = sin(ink10_colorInput_0_m1) * 43758.5469;
                                    bool ink10_is_cell_p1_m1_closer = ink10_dist2_p1_m1 < ink10_bestDist5;
                                    float ink10_colorHash_0_0_raw = sin(ink10_colorInput_0_0) * 43758.5469;
                                    float ink10_dist2_p1_0 = (ink10_deltaU_p1_0 * ink10_deltaU_p1_0 + (ink10_deltaV_p1_0 * ink10_deltaV_p1_0));
                                    float ink10_colorHash_p1_p1_raw = sin(ink10_colorInput_p1_p1) * 43758.5469;
                                    float ink10_dist2_p1_p1 = (ink10_deltaU_p1_p1 * ink10_deltaU_p1_p1 + (ink10_deltaV_p1_p1 * ink10_deltaV_p1_p1));
                                    float ink10_colorHash_p1_m1_raw = sin(ink10_colorInput_p1_m1) * 43758.5469;
                                    float ink10_bestDist6 = ink10_bestDist5;
                                    if (ink10_is_cell_p1_m1_closer)
                                    {
                                        ink10_bestDist6 = ink10_dist2_p1_m1;
                                    }
                                    float ink10_colorHash_0_p1_raw = sin(ink10_colorInput_0_p1) * 43758.5469;
                                    float ink10_bestDist7 = ink10_bestDist6;
                                    if (ink10_is_cell_0_m1_closer)
                                    {
                                        ink10_bestHashTracker = (ink10_colorHash_0_m1_raw + (-(floor(ink10_colorHash_0_m1_raw))));
                                    }
                                    bool ink10_is_cell_p1_0_closer = ink10_dist2_p1_0 < ink10_bestDist6;
                                    float ink10_colorHash_p1_0_raw = sin(ink10_colorInput_p1_0) * 43758.5469;
                                    float ink10_bestHash3 = ink10_bestHashTracker;
                                    if (ink10_is_cell_p1_0_closer)
                                    {
                                        ink10_bestDist7 = ink10_dist2_p1_0;
                                    }
                                    if (ink10_is_cell_0_0_closer)
                                    {
                                        ink10_bestHash3 = (ink10_colorHash_0_0_raw + (-(floor(ink10_colorHash_0_0_raw))));
                                    }
                                    bool ink10_is_cell_p1_p1_closer = ink10_dist2_p1_p1 < ink10_bestDist7;
                                    float ink10_bestHash4 = ink10_bestHash3;
                                    if (ink10_is_cell_0_p1_closer)
                                    {
                                        ink10_bestHash4 = (ink10_colorHash_0_p1_raw + (-(floor(ink10_colorHash_0_p1_raw))));
                                    }
                                    float ink10_bestHash5 = ink10_bestHash4;
                                    if (ink10_is_cell_p1_m1_closer)
                                    {
                                        ink10_bestHash5 = (ink10_colorHash_p1_m1_raw + (-(floor(ink10_colorHash_p1_m1_raw))));
                                    }
                                    bool ink10_is_teamHueAboveThresh = ink10_teamHue > 0.1000000015;
                                    float ink10_bestHash6 = ink10_bestHash5;
                                    if (ink10_is_cell_p1_0_closer)
                                    {
                                        ink10_bestHash6 = (ink10_colorHash_p1_0_raw + (-(floor(ink10_colorHash_p1_0_raw))));
                                    }
                                    float ink10_finalCellHash = ink10_bestHash6;
                                    if (ink10_is_cell_p1_p1_closer)
                                    {
                                        ink10_finalCellHash = (ink10_colorHash_p1_p1_raw + (-(floor(ink10_colorHash_p1_p1_raw))));
                                    }
                                    float ink10_hue_plus1 = ink10_finalCellHash + 1.0;
                                    float ink10_hue_plus23 = ink10_finalCellHash + 0.666666687;
                                    float ink10_hue_plus13 = ink10_finalCellHash + 0.333333343;
                                    float ink10_hueR_ramp = ((ink10_hue_plus1 + (-(floor(ink10_hue_plus1)))) * 6.0 + -3.0);
                                    float ink10_hueG_ramp = ((ink10_hue_plus23 + (-(floor(ink10_hue_plus23)))) * 6.0 + -3.0);
                                    float ink10_hueB_ramp = ((ink10_hue_plus13 + (-(floor(ink10_hue_plus13)))) * 6.0 + -3.0);
                                    vec3 ink10_satDelta = vec3(((clamp(((abs(ink10_hueR_ramp)) + -1.0), 0.0, 1.0)) * fp_c7_data[50].x + (-fp_c7_data[50].x)), ((clamp(((abs(ink10_hueG_ramp)) + -1.0), 0.0, 1.0)) * fp_c7_data[50].x + (-fp_c7_data[50].x)), ((clamp(((abs(ink10_hueB_ramp)) + -1.0), 0.0, 1.0)) * fp_c7_data[50].x + (-fp_c7_data[50].x)));
                                    float ink10_dielecR_raw = (ink10_satDelta.r * fp_c7_data[48].w + fp_c7_data[48].w);
                                    float ink10_emitR_raw = (ink10_satDelta.r * fp_c7_data[49].y + fp_c7_data[49].y);
                                    float ink10_dielecG_raw = (ink10_satDelta.g * fp_c7_data[48].w + fp_c7_data[48].w);
                                    float ink10_emitG_raw = (ink10_satDelta.g * fp_c7_data[49].y + fp_c7_data[49].y);
                                    float ink10_dielecB_raw = (ink10_satDelta.b * fp_c7_data[48].w + fp_c7_data[48].w);
                                    float ink10_emitB_raw = (ink10_satDelta.b * fp_c7_data[49].y + fp_c7_data[49].y);
                                    float ink10_paintFade = clamp((paintStrength * fp_c7_data[45].z), 0.0, 1.0);
                                    vec3 ink10_colorDelta = vec3((ink10_emitR_raw * (-fp_c7_data[45].y) + ink10_dielecR_raw), (ink10_emitG_raw * (-fp_c7_data[45].y) + ink10_dielecG_raw), (ink10_emitB_raw * (-fp_c7_data[45].y) + ink10_dielecB_raw));
                                    vec3 ink10_dielec = vec3((ink10_paintFade * ink10_colorDelta.r + (ink10_emitR_raw * fp_c7_data[45].y)), (ink10_paintFade * ink10_colorDelta.g + (ink10_emitG_raw * fp_c7_data[45].y)), (ink10_paintFade * ink10_colorDelta.b + (ink10_emitB_raw * fp_c7_data[45].y)));
                                    vec3 ink10_stEmit;
                                    ink10_stEmit.r = (ink10_dielec.r * fp_c7_data[18].z);
                                    vec3 ink10_stDielec = ink10_dielec;
                                    if (ink10_is_teamHueAboveThresh)
                                    {
                                        ink10_stEmit.r = emissionR;
                                    }
                                    ink10_stEmit.g = (ink10_dielec.g * fp_c7_data[18].z);
                                    if (ink10_is_teamHueAboveThresh)
                                    {
                                        ink10_stEmit.g = emissionG;
                                    }
                                    ink10_stEmit.b = (ink10_dielec.b * fp_c7_data[18].z);
                                    if (ink10_is_teamHueAboveThresh)
                                    {
                                        ink10_stDielec.b = dielectric.b;
                                    }
                                    if (ink10_is_teamHueAboveThresh)
                                    {
                                        ink10_stEmit.b = emissionB;
                                    }
                                    if (ink10_is_teamHueAboveThresh)
                                    {
                                        ink10_stDielec.r = dielectric.r;
                                    }
                                    if (ink10_is_teamHueAboveThresh)
                                    {
                                        ink10_stDielec.g = dielectric.g;
                                    }
                                    stDielec = ink10_stDielec;
                                    stEmit = ink10_stEmit;
                                    inkBranchDone = true;
                                }
                                else
                                {
                                    bool ink9_is_inkType9 = inkTypeInt == 9;
                                    float ink9_invFragW = 1.0 / gl_FragCoord.w;
                                    float ink9_tanZ = (fTangents.z * gl_FragCoord.w) * ink9_invFragW;
                                    float ink9_tanW = (fTangents.w * gl_FragCoord.w) * ink9_invFragW;
                                    float ink9_worldW = (fWorldPos.w * gl_FragCoord.w) * ink9_invFragW;
                                    float ink9_tanY = (fTangents.y * gl_FragCoord.w) * ink9_invFragW;
                                    float ink9_tanX = (fTangents.x * gl_FragCoord.w) * ink9_invFragW;
                                    if (ink9_is_inkType9)
                                    {
                                        float ink9_paintU_500 = paintU * 500.0;
                                        float ink9_paintV_500 = paintV_inv * 500.0;
                                        int ink9_lodInt = int(((0.0) * 256.0));
                                        int ink9_lodBits = (ink9_lodInt & 65535);
                                        float ink9_mipSafe = max(0.0, (min(((float(ink9_lodBits)) * 0.00234375009), 6.0)));
                                        float ink9_mipFloor = floor(ink9_mipSafe);
                                        float ink9_mipScale0 = exp2(-ink9_mipFloor);
                                        float ink9_mipScale1 = exp2((-(ink9_mipFloor + 1.0)));
                                        float ink9_rampSample = texture(user2Tex, vec2((paintU * fp_c7_data[50].w), (paintV_inv * fp_c7_data[50].w))).r;
                                        vec4 user1Sample_2473 = texture(user1Tex, vec2((ink9_paintU_500 * ink9_mipScale0), (ink9_paintV_500 * ink9_mipScale0))).rgba;
                                        vec3 user1Sample_2477 = texture(user1Tex, vec2((ink9_paintU_500 * ink9_mipScale1), (ink9_paintV_500 * ink9_mipScale1))).rgb;
                                        float ink9_colorR_p1 = (alphaWeightFine * fp_c7_data[48].x + (bravoWeight * fp_c7_data[50].x));
                                        bool ink9_is_backFace = NdotL_raw < 0.0;
                                        float ink9_distFadeRaw = (ink9_worldW * 0.01999999955 + 1.0);
                                        float ink9_distFade = clamp(ink9_distFadeRaw, 0.0, 1.0);
                                        float ink9_colorB_p1 = (alphaWeightFine * fp_c7_data[48].z + (bravoWeight * fp_c7_data[50].z));
                                        float ink9_colorR_final = (charlieWeight * fp_c7_data[77].x + ink9_colorR_p1);
                                        float ink9_colorG_p1 = (alphaWeightFine * fp_c7_data[48].y + (bravoWeight * fp_c7_data[50].y));
                                        float ink9_colorB_final = (charlieWeight * fp_c7_data[77].z + ink9_colorB_p1);
                                        float ink9_rampClamped = clamp(((ink9_rampSample + (-fp_c7_data[79].x)) * (1.0 / fp_c7_data[79].y)), 0.0, 1.0);
                                        float ink9_fadeClamped = clamp(((ink9_rampSample + (-fp_c7_data[77].w)) * (1.0 / fp_c7_data[78].w)), 0.0, 1.0);
                                        float ink9_colorG_final = (charlieWeight * fp_c7_data[77].y + ink9_colorG_p1);
                                        vec3 ink9_blendedDielec;
                                        ink9_blendedDielec.r = ((ink9_colorR_final + (-dielectric.r)) * ink9_fadeClamped + dielectric.r);
                                        float ink9_smoothstepCoeff = (ink9_rampClamped * -2.0 + 3.0);
                                        ink9_blendedDielec.b = ((ink9_colorB_final + (-dielectric.b)) * ink9_fadeClamped + dielectric.b);
                                        ink9_blendedDielec.g = ((ink9_colorG_final + (-dielectric.g)) * ink9_fadeClamped + dielectric.g);
                                        float ink9_smoothstepFade = ink9_smoothstepCoeff * (ink9_rampClamped * ink9_rampClamped);
                                        float ink9_emitGAccum_p1 = (alphaWeightFine * fp_c7_data[49].z + (bravoWeight * fp_c7_data[51].y));
                                        float ink9_emitRAccum_p1 = (alphaWeightFine * fp_c7_data[49].y + (bravoWeight * fp_c7_data[51].x));
                                        float ink9_emitBAccum_p1 = (alphaWeightFine * fp_c7_data[49].w + (bravoWeight * fp_c7_data[51].z));
                                        float ink9_emitGAccum = (charlieWeight * fp_c7_data[78].y + ink9_emitGAccum_p1);
                                        float ink9_specWAccum_p1 = (alphaWeightFine * fp_c7_data[51].w + (bravoWeight * fp_c7_data[79].z));
                                        float ink9_emitRAccum = (charlieWeight * fp_c7_data[78].x + ink9_emitRAccum_p1);
                                        float ink9_emitBAccum = (charlieWeight * fp_c7_data[78].z + ink9_emitBAccum_p1);
                                        float ink9_specWAccum = (charlieWeight * fp_c7_data[79].w + ink9_specWAccum_p1);
                                        float ink9_dielecG_blended = ((ink9_emitGAccum + (-ink9_blendedDielec.g)) * ink9_smoothstepFade + ink9_blendedDielec.g);
                                        float ink9_dielecR_blended = ((ink9_emitRAccum + (-ink9_blendedDielec.r)) * ink9_smoothstepFade + ink9_blendedDielec.r);
                                        float ink9_dielecB_blended = ((ink9_emitBAccum + (-ink9_blendedDielec.b)) * ink9_smoothstepFade + ink9_blendedDielec.b);
                                        float ink9_crossZX = (ink9_tanZ * curNorm.x + (-(ink9_tanY * curNorm.y)));
                                        bool ink9_is_mip0 = user1Sample_2473.w >= (ink9_mipSafe + (-ink9_mipFloor));
                                        float ink9_tex0A_or_envZ = user1Sample_2473.w;
                                        vec3 ink9_norm = user1Sample_2477.xyz;
                                        if (ink9_is_backFace)
                                        {
                                            ink9_tex0A_or_envZ = env._env_rest[1].z;
                                        }
                                        float ink9_crossYZ = (ink9_tanY * curNorm.z + (-(ink9_tanX * curNorm.x)));
                                        bool ink9_is_dG_ge_dB = ink9_dielecG_blended >= ink9_dielecB_blended;
                                        float ink9_dG_ge_dB_sel = ink9_is_dG_ge_dB ? 1.0 : 0.0;
                                        float ink9_crossXY = (ink9_tanX * curNorm.y + (-(ink9_tanZ * curNorm.z)));
                                        float ink9_envDirZ = ink9_tex0A_or_envZ;
                                        if (!ink9_is_backFace)
                                        {
                                            ink9_envDirZ = (-0.0 + (-env._env_rest[1].z));
                                        }
                                        float ink9_invRampThresh = (-(clamp(((ink9_rampSample + (-fp_c7_data[48].w)) * ink9_specWAccum), 0.0, 1.0))) + 1.0;
                                        float ink9_dielecMaxGB = (ink9_dG_ge_dB_sel * (ink9_dielecG_blended + (-ink9_dielecB_blended)) + ink9_dielecB_blended);
                                        float ink9_hueBase = (-ink9_dG_ge_dB_sel) + 0.666666687;
                                        bool ink9_is_dR_ge_maxGB = ink9_dielecR_blended >= ink9_dielecMaxGB;
                                        float ink9_dR_ge_maxGB_sel = ink9_is_dR_ge_maxGB ? 1.0 : 0.0;
                                        float ink9_hueOfs2 = (ink9_dG_ge_dB_sel + -1.0) + (-ink9_hueBase);
                                        float ink9_dielecValue = ((ink9_dielecR_blended + (-ink9_dielecMaxGB)) * ink9_dR_ge_maxGB_sel + ink9_dielecMaxGB);
                                        float ink9_dielecHue = (ink9_hueOfs2 * ink9_dR_ge_maxGB_sel + ink9_hueBase);
                                        float ink9_hueOfs2_or_envX = ink9_hueOfs2;
                                        float ink9_hueBase_or_envY = ink9_hueBase;
                                        if (ink9_is_backFace)
                                        {
                                            ink9_hueOfs2_or_envX = env._env_rest[1].x;
                                        }
                                        float ink9_envDirX = ink9_hueOfs2_or_envX;
                                        if (!ink9_is_backFace)
                                        {
                                            ink9_envDirX = (-0.0 + (-env._env_rest[1].x));
                                        }
                                        if (ink9_is_backFace)
                                        {
                                            ink9_hueBase_or_envY = env._env_rest[1].y;
                                        }
                                        float ink9_envDirY = ink9_hueBase_or_envY;
                                        if (!ink9_is_backFace)
                                        {
                                            ink9_envDirY = (-0.0 + (-env._env_rest[1].y));
                                        }
                                        float ink9_dielecMinR = (((-ink9_dielecR_blended) + ink9_dielecMaxGB) * ink9_dR_ge_maxGB_sel + ink9_dielecR_blended);
                                        float ink9_reflX = eyeDir.x + ink9_envDirX;
                                        float ink9_reflY = eyeDir.y + ink9_envDirY;
                                        if (ink9_is_mip0)
                                        {
                                            ink9_norm.g = user1Sample_2473.y;
                                        }
                                        float ink9_reflZ = eyeDir.z + ink9_envDirZ;
                                        if (ink9_is_mip0)
                                        {
                                            ink9_norm.r = user1Sample_2473.x;
                                        }
                                        if (ink9_is_mip0)
                                        {
                                            ink9_norm.b = user1Sample_2473.z;
                                        }
                                        float ink9_reflXY_sq = (ink9_reflY * ink9_reflY + (ink9_reflX * ink9_reflX));
                                        float ink9_dielecMinGB = (ink9_dG_ge_dB_sel * ((-ink9_dielecG_blended) + ink9_dielecB_blended) + ink9_dielecG_blended);
                                        float ink9_reflLen_sq = (ink9_reflZ * ink9_reflZ + ink9_reflXY_sq);
                                        float ink9_pertNormZ_p1 = (ink9_tanX * ink9_norm.r + ((ink9_tanW * ink9_crossZX) * ink9_norm.g));
                                        float ink9_reflInvLen = inversesqrt(ink9_reflLen_sq);
                                        float ink9_reflUnitX = ink9_reflX * ink9_reflInvLen;
                                        float ink9_reflUnitY = ink9_reflY * ink9_reflInvLen;
                                        float ink9_reflUnitZ = ink9_reflZ * ink9_reflInvLen;
                                        float ink9_pertNormX_p1 = (ink9_tanY * ink9_norm.r + ((ink9_tanW * ink9_crossXY) * ink9_norm.g));
                                        float ink9_hueRange = ((ink9_dielecValue + (-(min(ink9_dielecMinGB, ink9_dielecMinR)))) * 6.0 + 1.00000001E-10);
                                        float ink9_normRG_sqSum = (ink9_norm.r * ink9_norm.r + (ink9_norm.g * ink9_norm.g));
                                        float ink9_VdotRefl_p2 = (eyeDir.y * ink9_reflUnitY + (eyeDir.x * ink9_reflUnitX));
                                        float ink9_pertNormY_p1 = (ink9_tanZ * ink9_norm.r + ((ink9_tanW * ink9_crossYZ) * ink9_norm.g));
                                        float ink9_normB_val = sqrt((clamp(((-ink9_normRG_sqSum) + 1.0), 0.0, 1.0)));
                                        float ink9_NdotRefl = (eyeDir.z * ink9_reflUnitZ + ink9_VdotRefl_p2);
                                        float ink9_colorHashInput = (ink9_norm.r * 78.23300171 + (ink9_norm.b * 12.9898005));
                                        float ink9_NdotRefl_clamped = max(ink9_NdotRefl, 9.999999939e-09);
                                        float ink9_finalNormZ = (ink9_normB_val * curNorm.z + ink9_pertNormZ_p1);
                                        float ink9_finalNormX = (ink9_normB_val * curNorm.x + ink9_pertNormX_p1);
                                        float ink9_finalNormY = (ink9_normB_val * curNorm.y + ink9_pertNormY_p1);
                                        float ink9_fresnel_exp = (ink9_NdotRefl_clamped * -5.554729939 + -6.98316002);
                                        float ink9_fresnel_raw = ink9_NdotRefl_clamped * ink9_fresnel_exp;
                                        float ink9_normXZ_sq = (ink9_finalNormX * ink9_finalNormX + (ink9_finalNormZ * ink9_finalNormZ));
                                        float ink9_dielecHueFull = ((1.0 / ink9_hueRange) * ((-ink9_dielecMinGB) + ink9_dielecMinR) + ink9_dielecHue);
                                        float ink9_normLen_sq = (ink9_finalNormY * ink9_finalNormY + ink9_normXZ_sq);
                                        float ink9_hue_plus23 = (abs(ink9_dielecHueFull)) + 0.666666687;
                                        float ink9_normInvLen = inversesqrt(ink9_normLen_sq);
                                        float ink9_hue_plus1 = (abs(ink9_dielecHueFull)) + 1.0;
                                        float ink9_hue_plus13 = (abs(ink9_dielecHueFull)) + 0.333333343;
                                        float ink9_colorHashScaled = sin(ink9_colorHashInput) * 43758.5469;
                                        float ink9_unitNormZ = ink9_finalNormZ * ink9_normInvLen;
                                        float ink9_unitNormX = ink9_finalNormX * ink9_normInvLen;
                                        float ink9_unitNormY = ink9_finalNormY * ink9_normInvLen;
                                        float ink9_normZ_envX = ink9_unitNormZ * ink9_envDirX;
                                        float ink9_hueG_ramp = ((ink9_hue_plus23 + (-(floor(ink9_hue_plus23)))) * 6.0 + -3.0);
                                        float ink9_hueR_ramp = ((ink9_hue_plus1 + (-(floor(ink9_hue_plus1)))) * 6.0 + -3.0);
                                        float ink9_NenvXZ_p2 = (ink9_unitNormX * ink9_reflUnitY + (ink9_unitNormZ * ink9_reflUnitX));
                                        float ink9_normXY_envXY = (ink9_unitNormX * ink9_envDirY + ink9_normZ_envX);
                                        float ink9_VdotN_p2 = (eyeDir.y * ink9_unitNormX + (eyeDir.x * ink9_unitNormZ));
                                        float ink9_hueB_ramp = ((ink9_hue_plus13 + (-(floor(ink9_hue_plus13)))) * 6.0 + -3.0);
                                        float ink9_NdotEnv = (ink9_unitNormY * ink9_reflUnitZ + ink9_NenvXZ_p2);
                                        float ink9_normXYZ_envXYZ = (ink9_unitNormY * ink9_envDirZ + ink9_normXY_envXY);
                                        float ink9_NdotV = (eyeDir.z * ink9_unitNormY + ink9_VdotN_p2);
                                        float ink9_NdotEnv_clamped = max(ink9_NdotEnv, 9.999999939e-09);
                                        vec3 ink9_satDelta = vec3(((clamp(((abs(ink9_hueR_ramp)) + -1.0), 0.0, 1.0)) * fp_c7_data[83].y + (-fp_c7_data[83].y)), ((clamp(((abs(ink9_hueG_ramp)) + -1.0), 0.0, 1.0)) * fp_c7_data[83].y + (-fp_c7_data[83].y)), ((clamp(((abs(ink9_hueB_ramp)) + -1.0), 0.0, 1.0)) * fp_c7_data[83].y + (-fp_c7_data[83].y)));
                                        bool ink9_is_hashBelowThresh = (ink9_colorHashScaled + (-(floor(ink9_colorHashScaled)))) <= 0.004999999888;
                                        float ink9_geoV_denom = ((max(ink9_NdotV, 9.999999939e-09)) * 0.6879500151 + 0.312049955);
                                        float ink9_geoL_denom = ((max(ink9_normXYZ_envXYZ, 9.999999939e-09)) * 0.6879500151 + 0.312049955);
                                        float ink9_ndfDenom_raw = ((ink9_NdotEnv_clamped * ink9_NdotEnv_clamped) * -0.8868350387 + 1.0);
                                        vec3 ink9_hsv_dielec = (ink9_satDelta * vec3(fp_c7_data[83].z) + vec3(fp_c7_data[83].z));
                                        float ink9_emitR_baseScale = ink9_dielecR_blended * fp_c7_data[18].z;
                                        float ink9_normB_mask = (ink9_distFade * (clamp(((-ink9_invRampThresh) + 0.5), 0.0, 1.0))) * fp_c7_data[83].x;
                                        vec3 ink9_specParam = vec3(ink9_fresnel_raw, ink9_normZ_envX, ink9_normInvLen);
                                        if (ink9_is_hashBelowThresh)
                                        {
                                            ink9_specParam.r = (ink9_hsv_dielec.r * 100.0);
                                        }
                                        float ink9_fresnel = exp2(ink9_fresnel_raw);
                                        float ink9_specR_selected = ink9_specParam.r;
                                        if (ink9_is_hashBelowThresh)
                                        {
                                            ink9_specParam.g = (ink9_hsv_dielec.g * 100.0);
                                        }
                                        float ink9_emitDeltaR = (ink9_hsv_dielec.r * fp_c7_data[18].z + (-ink9_emitR_baseScale));
                                        float ink9_specG_selected = ink9_specParam.g;
                                        if (!ink9_is_hashBelowThresh)
                                        {
                                            ink9_specR_selected = ink9_hsv_dielec.r;
                                        }
                                        if (!ink9_is_hashBelowThresh)
                                        {
                                            ink9_specG_selected = ink9_hsv_dielec.g;
                                        }
                                        if (ink9_is_hashBelowThresh)
                                        {
                                            ink9_specParam.b = (ink9_hsv_dielec.b * 100.0);
                                        }
                                        float ink9_specB_selected = ink9_specParam.b;
                                        if (!ink9_is_hashBelowThresh)
                                        {
                                            ink9_specB_selected = ink9_hsv_dielec.b;
                                        }
                                        float ink9_stEmitR_partial = (ink9_normB_mask * ink9_emitDeltaR + ink9_emitR_baseScale);
                                        float ink9_fresnelR = ink9_specR_selected * fp_c7_data[83].w;
                                        float ink9_ndfPartial = (1.0 / (max(ink9_ndfDenom_raw, 9.999999939e-09))) * 0.336399972;
                                        float ink9_fresnelG = ink9_specG_selected * fp_c7_data[83].w;
                                        float ink9_fresnelB = ink9_specB_selected * fp_c7_data[83].w;
                                        float ink9_emitG_baseScale = ink9_dielecG_blended * fp_c7_data[18].z;
                                        vec3 ink9_fresnelBlend = vec3((ink9_fresnelR * (-ink9_fresnel) + ink9_fresnel), (ink9_fresnelG * (-ink9_fresnel) + ink9_fresnel), (ink9_fresnelB * (-ink9_fresnel) + ink9_fresnel));
                                        float ink9_normB_rampFade = ink9_distFade * (clamp(((-ink9_invRampThresh) + ink9_norm.b), 0.0, 1.0));
                                        float ink9_emitDeltaG = (ink9_hsv_dielec.g * fp_c7_data[18].z + (-ink9_emitG_baseScale));
                                        float ink9_specBRDF = ((1.0 / ink9_geoV_denom) * (1.0 / ink9_geoL_denom)) * (ink9_ndfPartial * ink9_ndfPartial);
                                        float ink9_emitB_baseScale = ink9_dielecB_blended * fp_c7_data[18].z;
                                        float ink9_emitDeltaB = (ink9_hsv_dielec.b * fp_c7_data[18].z + (-ink9_emitB_baseScale));
                                        float ink9_stEmitG_partial = (ink9_normB_mask * ink9_emitDeltaG + ink9_emitG_baseScale);
                                        float ink9_stEmitB_partial = (ink9_normB_mask * ink9_emitDeltaB + ink9_emitB_baseScale);
                                        vec3 ink9_stDielec = vec3((ink9_normB_mask * ((-ink9_dielecR_blended) + ink9_hsv_dielec.r) + ink9_dielecR_blended), (ink9_normB_mask * ((-ink9_dielecG_blended) + ink9_hsv_dielec.g) + ink9_dielecG_blended), (ink9_normB_mask * ((-ink9_dielecB_blended) + ink9_hsv_dielec.b) + ink9_dielecB_blended));
                                        stDielec = ink9_stDielec;
                                        stEmit.g = ink9_stEmitG_partial;
                                        stEmit.r = ink9_stEmitR_partial;
                                        stEmit.b = ink9_stEmitB_partial;
                                        stExtra = vec3(((ink9_normB_rampFade * ((ink9_fresnelR + ink9_fresnelBlend.r) * ink9_specBRDF)) * 7.95774698), ((ink9_normB_rampFade * ((ink9_fresnelG + ink9_fresnelBlend.g) * ink9_specBRDF)) * 7.95774698), ((ink9_normB_rampFade * ((ink9_fresnelB + ink9_fresnelBlend.b) * ink9_specBRDF)) * 7.95774698));
                                        inkBranchDone = true;
                                    }
                                    else
                                    {
                                        if (true) // sdodr ink originally only applied to alpha, but we want for all teams
                                        {
                                            float ink2_fb_paintU_scaled = paintU * fp_c7_data[49].y;
                                            float ink2_fb_paintV_scaled = paintV_inv * fp_c7_data[49].y;
                                            int ink2_fb_lodInt = int(((0.0) * 256.0));
                                            float ink2_fb_invTexScale = 1.0 / fp_c7_data[49].y;
                                            int ink2_fb_lodBits = (ink2_fb_lodInt & 65535);
                                            float ink2_fb_mipSafe = max(0.0, (min(((float(ink2_fb_lodBits)) * 0.00234375009), 6.0)));
                                            float ink2_fb_mipFloor = floor(ink2_fb_mipSafe);
                                            float ink2_fb_mipScale0 = exp2(-ink2_fb_mipFloor);
                                            float ink2_fb_mipScale1 = exp2((-(ink2_fb_mipFloor + 1.0)));
                                            vec2 user2Sample_2873 = texture(user2Tex, vec2((ink2_fb_paintU_scaled * fp_c7_data[78].x), (ink2_fb_paintV_scaled * fp_c7_data[78].x))).gb;
                                            vec4 user1Sample_2875 = texture(user1Tex, vec2((ink2_fb_paintU_scaled * ink2_fb_mipScale0), (ink2_fb_paintV_scaled * ink2_fb_mipScale0))).rgba;
                                            vec3 user1Sample_2879 = texture(user1Tex, vec2((ink2_fb_paintU_scaled * ink2_fb_mipScale1), (ink2_fb_paintV_scaled * ink2_fb_mipScale1))).rgb;
                                            float ink2_fb_detailSample = texture(user2Tex, vec2(((ink2_fb_paintU_scaled * ink2_fb_invTexScale) * fp_c7_data[51].x), ((ink2_fb_paintV_scaled * ink2_fb_invTexScale) * fp_c7_data[51].x))).r;
                                            float ink2_fb_bitanY = (fPaintUVXform.y * gl_FragCoord.w) * ink9_invFragW;
                                            bool ink2_fb_is_backFace = NdotL_raw < 0.0;
                                            float ink2_fb_bitanX = (fPaintUVXform.x * gl_FragCoord.w) * ink9_invFragW;
                                            float ink2_fb_distFadeRaw = (ink9_worldW * 0.01999999955 + 1.0);
                                            float ink2_fb_distFade = clamp(ink2_fb_distFadeRaw, 0.0, 1.0);
                                            float ink2_fb_crossZX_bitan = (ink2_fb_bitanY * curNorm.z + (-(ink2_fb_bitanX * curNorm.x)));
                                            float ink2_fb_normG_decoded = (user2Sample_2873.x * 2.007874012 + -1.00787401);
                                            float ink2_fb_normB_decoded = (user2Sample_2873.y * 2.007874012 + -1.00787401);
                                            float ink2_fb_bitanZ = (fPaintUVXform.z * gl_FragCoord.w) * ink9_invFragW;
                                            bool ink2_fb_is_mip0 = user1Sample_2875.w >= (ink2_fb_mipSafe + (-ink2_fb_mipFloor));
                                            float ink2_fb_crossZX_tan = (ink9_tanZ * curNorm.x + (-(ink9_tanY * curNorm.y)));
                                            vec3 ink2_fb_norm = user1Sample_2875.xyz;
                                            float ink2_fb_normG_or_envX = ink2_fb_normG_decoded;
                                            if (!ink2_fb_is_mip0)
                                            {
                                                ink2_fb_norm.g = user1Sample_2879.y;
                                            }
                                            if (!ink2_fb_is_mip0)
                                            {
                                                ink2_fb_norm.r = user1Sample_2879.x;
                                            }
                                            float ink2_fb_normR_or_envZ = ink2_fb_norm.r;
                                            if (!ink2_fb_is_mip0)
                                            {
                                                ink2_fb_norm.b = user1Sample_2879.z;
                                            }
                                            float ink2_fb_normRG_sqSum = (ink2_fb_norm.r * ink2_fb_norm.r + (ink2_fb_norm.g * ink2_fb_norm.g));
                                            float ink2_fb_crossXY_bitan = (ink2_fb_bitanZ * curNorm.x + (-(ink2_fb_bitanY * curNorm.y)));
                                            float ink2_fb_pertNormZ_bitan = (ink2_fb_bitanZ * ink2_fb_normG_decoded + (ink2_fb_normB_decoded * ink2_fb_crossZX_bitan));
                                            float ink2_fb_normB_val = sqrt((clamp(((-ink2_fb_normRG_sqSum) + 1.0), 0.0, 1.0)));
                                            float ink2_fb_crossYZ_bitan = (ink2_fb_bitanX * curNorm.y + (-(ink2_fb_bitanZ * curNorm.z)));
                                            float ink2_fb_pertNormX_bitan = (ink2_fb_bitanX * ink2_fb_normG_decoded + (ink2_fb_normB_decoded * ink2_fb_crossXY_bitan));
                                            float ink2_fb_pertNormY_bitan = (ink2_fb_bitanY * ink2_fb_normG_decoded + (ink2_fb_normB_decoded * ink2_fb_crossYZ_bitan));
                                            float ink2_fb_normRG2_sqSum = (ink2_fb_normG_decoded * ink2_fb_normG_decoded + (ink2_fb_normB_decoded * ink2_fb_normB_decoded));
                                            if (ink2_fb_is_backFace)
                                            {
                                                ink2_fb_normG_or_envX = env._env_rest[1].x;
                                            }
                                            float ink2_fb_crossYZ_tan = (ink9_tanX * curNorm.y + (-(ink9_tanZ * curNorm.z)));
                                            float ink2_fb_crossXY_tan = (ink9_tanY * curNorm.z + (-(ink9_tanX * curNorm.x)));
                                            float ink2_fb_envDirX = ink2_fb_normG_or_envX;
                                            if (!ink2_fb_is_backFace)
                                            {
                                                ink2_fb_envDirX = (-0.0 + (-env._env_rest[1].x));
                                            }
                                            float ink2_fb_normB2_val = sqrt((clamp(((-ink2_fb_normRG2_sqSum) + 1.0), 0.0, 1.0)));
                                            float ink2_fb_reflX = eyeDir.x + ink2_fb_envDirX;
                                            float ink2_fb_biNormYZ_normG = (ink9_tanW * ink2_fb_crossYZ_tan) * ink2_fb_norm.g;
                                            float ink2_fb_pertNormZ_tan = (ink9_tanX * ink2_fb_norm.r + ((ink9_tanW * ink2_fb_crossZX_tan) * ink2_fb_norm.g));
                                            float ink2_fb_finalNormZ_bitan = (ink2_fb_normB2_val * curNorm.z + ink2_fb_pertNormX_bitan);
                                            float ink2_fb_finalNormX_bitan = (ink2_fb_normB2_val * curNorm.x + ink2_fb_pertNormY_bitan);
                                            float ink2_fb_pertNormX_tan = (ink9_tanY * ink2_fb_norm.r + ink2_fb_biNormYZ_normG);
                                            float ink2_fb_pertNormY_tan = (ink9_tanZ * ink2_fb_norm.r + ((ink9_tanW * ink2_fb_crossXY_tan) * ink2_fb_norm.g));
                                            float ink2_fb_colorHashInput = (ink2_fb_norm.r * 78.23300171 + (ink2_fb_norm.b * 12.9898005));
                                            float ink2_fb_finalNormY_bitan = (ink2_fb_normB2_val * curNorm.y + ink2_fb_pertNormZ_bitan);
                                            float ink2_fb_biNormYZ_or_envY = ink2_fb_biNormYZ_normG;
                                            if (ink2_fb_is_backFace)
                                            {
                                                ink2_fb_biNormYZ_or_envY = env._env_rest[1].y;
                                            }
                                            float ink2_fb_envDirY = ink2_fb_biNormYZ_or_envY;
                                            if (!ink2_fb_is_backFace)
                                            {
                                                ink2_fb_envDirY = (-0.0 + (-env._env_rest[1].y));
                                            }
                                            float ink2_fb_finalNormX_tan = (ink2_fb_normB_val * curNorm.x + ink2_fb_pertNormX_tan);
                                            if (ink2_fb_is_backFace)
                                            {
                                                ink2_fb_normR_or_envZ = env._env_rest[1].z;
                                            }
                                            float ink2_fb_envDirZ = ink2_fb_normR_or_envZ;
                                            if (!ink2_fb_is_backFace)
                                            {
                                                ink2_fb_envDirZ = (-0.0 + (-env._env_rest[1].z));
                                            }
                                            float ink2_fb_normXZ_bitan_sq = (ink2_fb_finalNormX_bitan * ink2_fb_finalNormX_bitan + (ink2_fb_finalNormZ_bitan * ink2_fb_finalNormZ_bitan));
                                            float ink2_fb_finalNormZ_tan = (ink2_fb_normB_val * curNorm.z + ink2_fb_pertNormZ_tan);
                                            float ink2_fb_finalNormY_tan = (ink2_fb_normB_val * curNorm.y + ink2_fb_pertNormY_tan);
                                            float ink2_fb_viewZXY = (eyeDir.y * ctx.cViewInv[1].z + (eyeDir.x * ctx.cViewInv[0].z));
                                            float ink2_fb_normLen_bitan_sq = (ink2_fb_finalNormY_bitan * ink2_fb_finalNormY_bitan + ink2_fb_normXZ_bitan_sq);
                                            float ink2_fb_reflY = eyeDir.y + ink2_fb_envDirY;
                                            float ink2_fb_normInvLen_bitan = inversesqrt(ink2_fb_normLen_bitan_sq);
                                            float ink2_fb_viewZ = (eyeDir.z * ctx.cViewInv[2].z + ink2_fb_viewZXY);
                                            float ink2_fb_reflXY_sq = (ink2_fb_reflY * ink2_fb_reflY + (ink2_fb_reflX * ink2_fb_reflX));
                                            float ink2_fb_normXZ_tan_sq = (ink2_fb_finalNormX_tan * ink2_fb_finalNormX_tan + (ink2_fb_finalNormZ_tan * ink2_fb_finalNormZ_tan));
                                            float ink2_fb_reflZ = eyeDir.z + ink2_fb_envDirZ;
                                            float ink2_fb_colorHashScaled = sin(ink2_fb_colorHashInput) * 43758.5469;
                                            float ink2_fb_viewZparam = (ink2_fb_viewZ * fp_c7_data[50].z + fp_c7_data[50].w);
                                            float ink2_fb_viewZclamped = clamp(ink2_fb_viewZparam, 0.0, 1.0);
                                            float ink2_fb_normLen_tan_sq = (ink2_fb_finalNormY_tan * ink2_fb_finalNormY_tan + ink2_fb_normXZ_tan_sq);
                                            float ink2_fb_reflLen_sq = (ink2_fb_reflZ * ink2_fb_reflZ + ink2_fb_reflXY_sq);
                                            float ink2_fb_normInvLen_tan = inversesqrt(ink2_fb_normLen_tan_sq);
                                            float ink2_fb_reflInvLen = inversesqrt(ink2_fb_reflLen_sq);
                                            float ink2_fb_fadeFactor = clamp(((paintStrength + (-fp_c7_data[49].w)) * (1.0 / fp_c7_data[49].z)), 0.0, 1.0);
                                            float ink2_fb_VdotN_p2 = (eyeDir.y * (-(ink2_fb_finalNormX_bitan * ink2_fb_normInvLen_bitan)) + (eyeDir.x * (-(ink2_fb_finalNormZ_bitan * ink2_fb_normInvLen_bitan))));
                                            float ink2_fb_reflUnitX = ink2_fb_reflX * ink2_fb_reflInvLen;
                                            float ink2_fb_unitNormZ_tan = ink2_fb_finalNormZ_tan * ink2_fb_normInvLen_tan;
                                            float ink2_fb_reflUnitY = ink2_fb_reflY * ink2_fb_reflInvLen;
                                            float ink2_fb_reflUnitZ = ink2_fb_reflZ * ink2_fb_reflInvLen;
                                            float ink2_fb_unitNormX_tan = ink2_fb_finalNormX_tan * ink2_fb_normInvLen_tan;
                                            float ink2_fb_unitNormY_tan = ink2_fb_finalNormY_tan * ink2_fb_normInvLen_tan;
                                            float ink2_fb_NdotV_bitan = (eyeDir.z * (-(ink2_fb_finalNormY_bitan * ink2_fb_normInvLen_bitan)) + ink2_fb_VdotN_p2);
                                            float ink2_fb_VdotRefl_p2 = (eyeDir.y * ink2_fb_reflUnitY + (eyeDir.x * ink2_fb_reflUnitX));
                                            float ink2_fb_normXYtan_envXY = (ink2_fb_unitNormX_tan * ink2_fb_envDirY + (ink2_fb_unitNormZ_tan * ink2_fb_envDirX));
                                            float ink2_fb_NdotRefl_p2 = (ink2_fb_unitNormX_tan * ink2_fb_reflUnitY + (ink2_fb_unitNormZ_tan * ink2_fb_reflUnitX));
                                            float ink2_fb_VdotNtan_p2 = (eyeDir.y * ink2_fb_unitNormX_tan + (eyeDir.x * ink2_fb_unitNormZ_tan));
                                            float ink2_fb_detailOffset = (ink2_fb_detailSample * fp_c7_data[51].z + fp_c7_data[51].y);
                                            float ink2_fb_NdotRefl = (eyeDir.z * ink2_fb_reflUnitZ + ink2_fb_VdotRefl_p2);
                                            float ink2_fb_NdotL_env = (ink2_fb_unitNormY_tan * ink2_fb_envDirZ + ink2_fb_normXYtan_envXY);
                                            float ink2_fb_NdotRefl_clamped = (ink2_fb_unitNormY_tan * ink2_fb_reflUnitZ + ink2_fb_NdotRefl_p2);
                                            float ink2_fb_NdotV_tan = (eyeDir.z * ink2_fb_unitNormY_tan + ink2_fb_VdotNtan_p2);
                                            float ink2_fb_roughnessParam = (fp_c7_data[48].w * 0.5 + 0.5);
                                            float ink2_fb_roughness_sq = fp_c7_data[48].w * fp_c7_data[48].w;
                                            float ink2_fb_halfVectorBias = (ink2_fb_NdotV_bitan * 0.5 + 0.5);
                                            float ink2_fb_NdotRefl_c2 = max(ink2_fb_NdotRefl_clamped, 9.999999939e-09);
                                            float ink2_fb_NdotL_env_c = max(ink2_fb_NdotL_env, 9.999999939e-09);
                                            float ink2_fb_roughSq = (ink2_fb_roughnessParam * 0.5) * ink2_fb_roughnessParam;
                                            float ink2_fb_NdotRefl_max = max(ink2_fb_NdotRefl, 9.999999939e-09);
                                            float ink2_fb_NdotV_tan_c = max(ink2_fb_NdotV_tan, 9.999999939e-09);
                                            float ink2_fb_NdotRefl_sq = ink2_fb_NdotRefl_c2 * ink2_fb_NdotRefl_c2;
                                            bool ink2_fb_is_hashBelowThresh = (ink2_fb_colorHashScaled + (-(floor(ink2_fb_colorHashScaled)))) <= fp_c7_data[77].w;
                                            float ink2_fb_geoEnv_raw = (ink2_fb_roughSq * (-ink2_fb_NdotL_env_c) + ink2_fb_NdotL_env_c);
                                            float ink2_fb_fresnel_exp = (ink2_fb_NdotRefl_max * -5.554729939 + -6.98316002);
                                            float ink2_fb_normB_detailClamped = clamp(((-ink2_fb_detailOffset) + ink2_fb_norm.b), 0.0, 1.0);
                                            float ink2_fb_geoV_raw = (ink2_fb_NdotV_tan_c * (-ink2_fb_roughSq) + ink2_fb_NdotV_tan_c);
                                            float ink2_fb_normB_half = clamp(((-ink2_fb_detailOffset) + 0.5), 0.0, 1.0);
                                            float ink2_fb_ndfDenom_raw = (ink2_fb_NdotRefl_sq * (ink2_fb_roughness_sq * ink2_fb_roughness_sq) + (-ink2_fb_NdotRefl_sq));
                                            float ink2_fb_specBlendDelta = ((clamp(ink2_fb_halfVectorBias, 0.0, 1.0)) * fp_c7_data[78].y + (-fp_c7_data[78].y));
                                            float ink2_fb_specW_dielec = (-ink2_fb_normB_half) + fp_c7_data[51].w;
                                            float ink2_fb_specScale = fp_c7_data[78].y;
                                            float ink2_fb_roughParam = ink2_fb_roughSq;
                                            float ink2_fb_fresnelParam = 6.98316002;
                                            if (ink2_fb_is_hashBelowThresh)
                                            {
                                                ink2_fb_specScale = fp_c7_data[48].x;
                                            }
                                            float ink2_fb_colorTargetB = ink2_fb_specScale;
                                            if (!ink2_fb_is_hashBelowThresh)
                                            {
                                                ink2_fb_roughParam = fp_c7_data[72].x;
                                            }
                                            float ink2_fb_roughParamR = ink2_fb_roughParam;
                                            if (!ink2_fb_is_hashBelowThresh)
                                            {
                                                ink2_fb_fresnelParam = fp_c7_data[72].y;
                                            }
                                            float ink2_fb_specW_masked = (ink2_fb_fadeFactor * (-ink2_fb_specW_dielec) + ink2_fb_specW_dielec);
                                            float ink2_fb_fresnel = exp2(ink2_fb_NdotRefl_max * ink2_fb_fresnel_exp);
                                            float ink2_fb_specBlend_plus1 = ink2_fb_specBlendDelta + 1.0;
                                            float ink2_fb_fresnelParamG = ink2_fb_fresnelParam;
                                            if (ink2_fb_is_hashBelowThresh)
                                            {
                                                ink2_fb_roughParamR = (ink2_fb_specScale * fp_c7_data[72].x);
                                            }
                                            if (ink2_fb_is_hashBelowThresh)
                                            {
                                                ink2_fb_fresnelParamG = (ink2_fb_specScale * fp_c7_data[72].y);
                                            }
                                            float ink2_fb_specW_emit = (-ink2_fb_normB_detailClamped) + fp_c7_data[51].w;
                                            if (ink2_fb_is_hashBelowThresh)
                                            {
                                                ink2_fb_colorTargetB = (ink2_fb_specScale * fp_c7_data[72].z);
                                            }
                                            float ink2_fb_colorTargetB_sel = ink2_fb_colorTargetB;
                                            if (!ink2_fb_is_hashBelowThresh)
                                            {
                                                ink2_fb_colorTargetB_sel = fp_c7_data[72].z;
                                            }
                                            vec3 ink2_fb_fresnelTerm;
                                            ink2_fb_fresnelTerm.r = ink2_fb_roughParamR * fp_c7_data[48].y;
                                            ink2_fb_fresnelTerm.g = ink2_fb_fresnelParamG * fp_c7_data[48].y;
                                            float ink2_fb_specW_emit_masked = (ink2_fb_fadeFactor * (-ink2_fb_specW_emit) + ink2_fb_specW_emit);
                                            ink2_fb_fresnelTerm.b = ink2_fb_colorTargetB_sel * fp_c7_data[48].y;
                                            vec3 ink2_fb_fresnelBlend = (ink2_fb_fresnelTerm * vec3(-ink2_fb_fresnel) + vec3(ink2_fb_fresnel));
                                            float ink2_fb_ndf_partial = ink2_fb_roughness_sq * (1.0 / (max((ink2_fb_ndfDenom_raw + 1.0), 9.999999939e-09)));
                                            float ink2_fb_specBRDF = ((1.0 / (ink2_fb_roughSq + ink2_fb_geoV_raw)) * (1.0 / (ink2_fb_roughSq + ink2_fb_geoEnv_raw))) * (ink2_fb_ndf_partial * ink2_fb_ndf_partial);
                                            float ink2_fb_colorBlend = (ink2_fb_distFade * ((ink2_fb_specBlend_plus1 * (ink2_fb_normB_half + ink2_fb_specW_masked)) * ink2_fb_viewZclamped)) * fp_c7_data[48].z;
                                            float ink2_fb_specTotal = ink2_fb_distFade * ((ink2_fb_specBlend_plus1 * (ink2_fb_normB_detailClamped + ink2_fb_specW_emit_masked)) * ink2_fb_viewZclamped);
                                            vec3 ink2_fb_stEmit;
                                            ink2_fb_stEmit.r = (ink2_fb_colorBlend * ((-emissionR) + fp_c7_data[72].x) + emissionR);
                                            vec3 ink2_fb_stDielec;
                                            ink2_fb_stDielec.b = (ink2_fb_colorBlend * ((-dielectric.b) + fp_c7_data[72].z) + dielectric.b);
                                            ink2_fb_stEmit.g = (ink2_fb_colorBlend * ((-emissionG) + fp_c7_data[72].y) + emissionG);
                                            ink2_fb_stEmit.b = (ink2_fb_colorBlend * ((-emissionB) + fp_c7_data[72].z) + emissionB);
                                            ink2_fb_stDielec.r = (ink2_fb_colorBlend * ((-dielectric.r) + fp_c7_data[72].x) + dielectric.r);
                                            ink2_fb_stDielec.g = (ink2_fb_colorBlend * ((-dielectric.g) + fp_c7_data[72].y) + dielectric.g);
                                            stDielec = ink2_fb_stDielec;
                                            stEmit = ink2_fb_stEmit;
                                            stExtra = vec3(((ink2_fb_specTotal * ((ink2_fb_fresnelTerm.r + ink2_fb_fresnelBlend.r) * ink2_fb_specBRDF)) * 0.0795774683), ((ink2_fb_specTotal * ((ink2_fb_fresnelTerm.g + ink2_fb_fresnelBlend.g) * ink2_fb_specBRDF)) * 0.0795774683), ((ink2_fb_specTotal * ((ink2_fb_fresnelTerm.b + ink2_fb_fresnelBlend.b) * ink2_fb_specBRDF)) * 0.0795774683));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        inkBranchDone = false;
        float reflDot_p2 = (eyeDir.y * (-stNormX) + (eyeDir.x * (-stNormZ)));
        vec2 user4Sample_3219 = texture(user4Tex, vec2((max(stNdotV, 9.999999939e-09)), (-stRoughness))).rg;
        float eyeDotNorm_refl = (eyeDir.z * (-stNormY) + reflDot_p2);
        float reflDirY = ((eyeDotNorm_refl * stNormX) * -2.0 + (-eyeDir.y));
        float reflDirX = ((eyeDotNorm_refl * stNormZ) * -2.0 + (-eyeDir.x));
        float reflDirZ = ((eyeDotNorm_refl * stNormY) * -2.0 + (-eyeDir.z));
        float invMaxRefl = 1.0 / (max((abs(reflDirZ)), (max((abs(reflDirX)), (abs(reflDirY))))));
        vec3 cubeMapSample_3241 = vec4(0.0).rgb;
        vec3 fresnel = vec3((inkReflect.r * user4Sample_3219.x + user4Sample_3219.y), (inkReflect.g * user4Sample_3219.x + user4Sample_3219.y), (inkReflect.b * user4Sample_3219.x + user4Sample_3219.y));
        shNormX = inkNormX;
        shNormZ = inkNormZ;
        shNormY = inkNormY;
        st2NormZ = stNormZ;
        st2NdotV = stNdotV;
        st2NormX = stNormX;
        st2NormY = stNormY;
        st2Roughness = stRoughness;
        st2Reflect.g = inkReflect.b;
        st2Dielec.b = stDielec.b;
        st2Reflect.r = inkReflect.r;
        st2Dielec.r = stDielec.r;
        st2Reflect.b = inkReflect.g;
        st2Dielec.g = stDielec.g;
        iblAccB = (fresnel.b * cubeMapSample_3241.z);
        iblAccG = (fresnel.g * cubeMapSample_3241.y);
        iblAccR = (fresnel.r * cubeMapSample_3241.x);
        st2Emit = stEmit;
        st2Light = stLight;
        st2NdotL = stNdotL;
        stSpecAcc = stExtra;
        wasPainted = true;
    }
    else
    {
        float reflDotU_p2 = (eyeDir.y * (-curNorm.x) + (eyeDir.x * (-curNorm.z)));
        float eyeDotNorm_reflU = (eyeDir.z * (-curNorm.y) + reflDotU_p2);
        float cubeMipFloat = ((cos(roughness * 3.14159274)) * -5.5 + 5.5);
        float reflDirX_u = ((eyeDotNorm_reflU * curNorm.z) * -2.0 + (-eyeDir.x));
        float reflDirY_u = ((eyeDotNorm_reflU * curNorm.x) * -2.0 + (-eyeDir.y));
        float reflDirZ_u = ((eyeDotNorm_reflU * curNorm.y) * -2.0 + (-eyeDir.z));
        uint cubeMipUint = uint((max((roundEven((roundEven(cubeMipFloat)))), 0.0)));
        uint cubeMipIdx = clamp(cubeMipUint, 0u, 0xFFFFu);
        float eyeNormDot_u_p = (eyeDir.y * curNorm.x + (eyeDir.x * curNorm.z));
        float NdotV_u = (eyeDir.z * curNorm.y + eyeNormDot_u_p);
        float invMaxRefl_u = 1.0 / (max((abs(reflDirZ_u)), (max((abs(reflDirX_u)), (abs(reflDirY_u))))));
        vec2 user4Sample_3318 = texture(user4Tex, vec2((max(NdotV_u, 9.999999939e-09)), (-roughness))).rg;
        vec3 cubeMapSample_3321 = vec4(0.0).rgb;
        float NdotL_u_p2 = (paintNorm.y * (-env._env_rest[1].y) + (paintNorm.x * (-env._env_rest[1].x)));
        float NdotL_u_raw = (paintNorm.z * (-env._env_rest[1].z) + NdotL_u_p2);
        float NdotL_dNorm = (NdotL_u_raw * (-curNorm.x) + curNorm.x);
        float NdotL_dBlend = (NdotL_dNorm * (clamp((paintCovRaw * -7.0), 0.0, 1.0)) + (-NdotL_dNorm));
        float fresnelR_u = (reflect.r * user4Sample_3318.x + user4Sample_3318.y);
        float fresnelB_u = (reflect.b * user4Sample_3318.x + user4Sample_3318.y);
        float fresnelG_u = (reflect.g * user4Sample_3318.x + user4Sample_3318.y);
        shNormX = curNorm.x;
        shNormZ = curNorm.z;
        shNormY = curNorm.y;
        iblAccB = (cubeMapSample_3321.z * fresnelG_u);
        iblAccG = (cubeMapSample_3321.y * fresnelB_u);
        iblAccR = (cubeMapSample_3321.x * fresnelR_u);
        stSpecScaleFactor = (clamp((NdotL_dBlend + 1.159999967), 0.0, 1.0));
    }
    wasPainted = false;
    float halfDirX = eyeDir.x - env._env_rest[1].x;
    float halfDirY = eyeDir.y - env._env_rest[1].y;
    float halfDirZ = eyeDir.z - env._env_rest[1].z;
    float shNXZ = shNormX * shNormZ;
    float shNYX = shNormY * shNormX;
    float halfDirLenSq_p = (halfDirY * halfDirY + (halfDirX * halfDirX));
    float shCoeff_6 = (shNYX * env._env_rest[6].y + (shNXZ * env._env_rest[6].x));
    float shCoeff_8 = (shNYX * env._env_rest[8].y + (shNXZ * env._env_rest[8].x));
    float shCoeff_7 = (shNYX * env._env_rest[7].y + (shNXZ * env._env_rest[7].x));
    float shNYsq = shNormY * shNormY;
    float halfDirInvLen = inversesqrt((halfDirZ * halfDirZ + halfDirLenSq_p));
    float halfNormX = halfDirX * halfDirInvLen;
    float fragWinv = 1.0 / gl_FragCoord.w;
    float halfNormY = halfDirY * halfDirInvLen;
    float halfNormZ = halfDirZ * halfDirInvLen;
    float shCoeff_8f = (shNYsq * env._env_rest[8].z + shCoeff_8);
    float worldPosX = fWorldPos.x * gl_FragCoord.w * fragWinv;
    float worldPosZ = fWorldPos.z * gl_FragCoord.w * fragWinv;
    float HdotN = (eyeDir.z * halfNormZ + (eyeDir.y * halfNormY + (eyeDir.x * halfNormX)));
    int gridIdxX_raw = int(trunc((worldPosX - fp_c10_data[550].x) * fp_c10_data[551].x));
    float st2NdotV_clamped = max(st2NdotV, 9.999999939e-09);
    int gridIdxZ_raw = int(trunc(((worldPosZ - fp_c10_data[550].z) * fp_c10_data[551].z)));
    float halfNormXX_p = (halfNormY * st2NormX + (halfNormX * st2NormZ));
    float st2NdotL_raw = (st2NormY * (-env._env_rest[1].z) + ((st2NormX * (-env._env_rest[1].y) + (st2NormZ * (-env._env_rest[1].x)))));
    float shCoeff_6f = (shNYsq * env._env_rest[6].z + shCoeff_6);
    float shCoeff_7f = (shNYsq * env._env_rest[7].z + shCoeff_7);
    float roughHalf = (st2Roughness * 0.5 + 0.5);
    int gridIdxX = min(gridIdxX_raw, 19);
    int gridIdxZ = min(gridIdxZ_raw, 19);
    float halfNormFull = (halfNormZ * st2NormY + halfNormXX_p);
    float st2NdotL_clamped = max(st2NdotL_raw, 9.999999939e-09);
    float roughSq_half = roughHalf * 0.5 * roughHalf;
    int gridIdxX_pos = max(0, gridIdxX);
    int gridIdxZ_pos = max(0, gridIdxZ);
    float shCoeff_5 = (shNormX * env._env_rest[5].y + (shNormZ * env._env_rest[5].x));
    float halfNormDotN = max(halfNormFull, 9.999999939e-09);
    float brdfGeom1 = (roughSq_half * (-st2NdotL_clamped) + st2NdotL_clamped);
    float brdfGeom2 = (roughSq_half * (-st2NdotV_clamped) + st2NdotV_clamped);
    float roughSq = st2Roughness * st2Roughness;
    int gridIdxZ_lo = gridIdxZ_pos & 65535;
    int gridIdxZx20 = gridIdxZ_lo * 20;
    int gridFlatIdx = gridIdxZx20 + gridIdxX_pos;
    float halfNormDotNsq = halfNormDotN * halfNormDotN;
    uint gridIdxZ_hi = uint(gridIdxZ_pos) >> 16;
    int gridIdxZ_hi20 = int(gridIdxZ_hi) * 20;
    int gridIdxZ_hiShift = gridIdxZ_hi20 << 16;
    int gridPackedIdx = gridIdxZ_hiShift + gridFlatIdx;
    float shadowUV_corr = fShadowUV.w * gl_FragCoord.w * fragWinv;
    float shCoeff_3 = (shNormX * env._env_rest[3].y + (shNormZ * env._env_rest[3].x));
    float HdotN_clamped = max(HdotN, 9.999999939e-09);
    float shCoeff_4 = (shNormX * env._env_rest[4].y + (shNormZ * env._env_rest[4].x));
    float shCoeff_5f = (shNormY * env._env_rest[5].z + shCoeff_5);
    int gridPackedShift = gridPackedIdx << 4;
    float brdfD_p = (halfNormDotNsq * (roughSq * roughSq) + (-halfNormDotNsq));
    uint gridEntryIdx = uint(gridPackedShift) >> 2;
    float lightListEntry = (((int(gridEntryIdx) & 3) == 3) ? (fp_c10_data[int(gridEntryIdx) >> 2].w) : (((int(gridEntryIdx) & 3) == 2) ? (fp_c10_data[int(gridEntryIdx) >> 2].z) : (((int(gridEntryIdx) & 3) == 1) ? (fp_c10_data[int(gridEntryIdx) >> 2].y) : (fp_c10_data[int(gridEntryIdx) >> 2].x))));
    float shCoeff_4f = (shNormY * env._env_rest[4].z + shCoeff_4);
    float shCoeff_3f = (shNormY * env._env_rest[3].z + shCoeff_3);
    float shNXY = shNormY * shNormZ;
    float specPow_p = (HdotN_clamped * -5.554729939 + -6.98316002);
    float shFinal_6 = (shNXY * env._env_rest[6].w + shCoeff_6f);
    float shFinal_7 = (shNXY * env._env_rest[7].w + shCoeff_7f);
    float shFinal_8 = (shNXY * env._env_rest[8].w + shCoeff_8f);
    float shNXZdiff = (shNormZ * shNormZ + (-(shNormX * shNormX)));
    float fresnelExp = exp2(HdotN_clamped * specPow_p);
    vec3 shTotal;
    shTotal.r = (shNXZdiff * env._env_rest[9].x + ((shCoeff_3f + env._env_rest[3].w) + shFinal_6));
    float brdfD_rough = roughSq * (1.0 / max((brdfD_p + 1.0), 9.999999939e-09));
    shTotal.g = (shNXZdiff * env._env_rest[9].y + ((shCoeff_4f + env._env_rest[4].w) + shFinal_7));
    shTotal.b = (shNXZdiff * env._env_rest[9].z + ((shCoeff_5f + env._env_rest[5].w) + shFinal_8));
    float dielecB_diff = (st2Dielec.b * (-st2Reflect.g) + st2Dielec.b);
    float dielecR_diff = (st2Dielec.r * (-st2Reflect.r) + st2Dielec.r);
    float fresnelR_spec = (fresnelExp * (-st2Reflect.r) + fresnelExp);
    float fresnelG_spec = (fresnelExp * (-st2Reflect.g) + fresnelExp);
    float brdfSpec = ((1.0 / (roughSq_half + brdfGeom2)) * (1.0 / (roughSq_half + brdfGeom1))) * (brdfD_rough * brdfD_rough);
    float fresnelB_spec = (fresnelExp * (-st2Reflect.b) + fresnelExp);
    float dielecG_diff = (st2Dielec.g * (-st2Reflect.b) + st2Dielec.g);
    vec3 diffAcc;
    diffAcc.b = (dielecB_diff * (max(0.0, shTotal.b)) + iblAccB);
    float shadowBx32 = (shadowUV_corr * (shadowPrepassSample.z * shadowPrepassA)) * 32.0;
    diffAcc.g = (dielecG_diff * (max(0.0, shTotal.g)) + iblAccG);
    bool loop_hasLights = floatBitsToInt(lightListEntry) != -1;
    float shadowGx32 = (shadowUV_corr * (shadowPrepassSample.y * shadowPrepassA)) * 32.0;
    diffAcc.r = (dielecR_diff * (max(0.0, shTotal.r)) + iblAccR);
    float shadowRx32 = (shadowUV_corr * (shadowPrepassSample.x * shadowPrepassA)) * 32.0;
    vec3 diffLit;
    diffLit.g = (dielecG_diff * shadowGx32 + diffAcc.g);
    diffLit.b = (dielecB_diff * shadowBx32 + diffAcc.b);
    float specIrradFull = (((fresnelR_spec + st2Reflect.r) * brdfSpec) * 0.07957746834 + (st2Dielec.r * 0.318309873));
    diffLit.r = (dielecR_diff * shadowRx32 + diffAcc.r);
    float specIrradG = (((fresnelB_spec + st2Reflect.b) * brdfSpec) * 0.07957746834 + (st2Dielec.g * 0.318309873));
    float specIrradB = (((fresnelG_spec + st2Reflect.g) * brdfSpec) * 0.07957746834 + (st2Dielec.b * 0.318309873));
    vec3 accDiff = diffLit;
    float accDielecB = dielecB_diff;
    float accLightEntry = lightListEntry;
    float accNormZ = st2NormZ;
    float accNormY = st2NormY;
    vec3 accEmit = st2Emit;
    vec3 accLit = diffLit;
    float accLtNormZ = st2NormZ;
    float accLtNormY = st2NormY;
    float accLtDielecB = dielecB_diff;
    float accLtEntry = lightListEntry;
    vec3 accLtEmit = st2Emit;
    float specAccGlobal = st2Light.g;
    float specAccG2 = st2Light.b;
    if (loop_hasLights)
    {
        int bits_lightBitmask = floatBitsToInt(lightListEntry);
        int loop_counter = 0;
        bool loop_done;
        int bits_curLightIdx;
        float lt_carryDiffR;
        float lt_carryDiffG;
        float lt_carryDiffB;
        float lt_carryInkSpecR;
        float lt_carryInkSpecG;
        float lt_carryInkSpecB;
        float lt_carryDielecB;
        float lt_carryEntry;
        do
        {
            bits_curLightIdx = bits_lightBitmask & 255;
            bool loop_idxOutOfBounds = uint(bits_curLightIdx) >= 30u;
            lt_carryDiffR = accDiff.r;
            lt_carryDiffG = accDiff.g;
            lt_carryDiffB = accDiff.b;
            lt_carryInkSpecR = stInkSpec.r;
            lt_carryInkSpecG = stInkSpec.g;
            lt_carryInkSpecB = stInkSpec.b;
            lt_carryDielecB = accDielecB;
            lt_carryEntry = accLightEntry;
            loop_shouldBreak = loop_idxOutOfBounds;
            if (loop_shouldBreak)
            {
                break;
            }
            int bits_lightByteOff = bits_curLightIdx << 4;
            float brdf_roughRemap = (st2Roughness * 0.5 + 0.5);
            int bits_posOffset = bits_lightByteOff + 7360;
            uint bits_lightPosIdx = uint(bits_posOffset) >> 2;
            float lt_posX = (((int(bits_lightPosIdx) & 3) == 3) ? (fp_c10_data[int(bits_lightPosIdx) >> 2].w) : (((int(bits_lightPosIdx) & 3) == 2) ? (fp_c10_data[int(bits_lightPosIdx) >> 2].z) : (((int(bits_lightPosIdx) & 3) == 1) ? (fp_c10_data[int(bits_lightPosIdx) >> 2].y) : (fp_c10_data[int(bits_lightPosIdx) >> 2].x))));
            int bits_lightPosIdxY = int(bits_lightPosIdx) + 1;
            float lt_posY = (((bits_lightPosIdxY & 3) == 3) ? (fp_c10_data[bits_lightPosIdxY >> 2].w) : (((bits_lightPosIdxY & 3) == 2) ? (fp_c10_data[bits_lightPosIdxY >> 2].z) : (((bits_lightPosIdxY & 3) == 1) ? (fp_c10_data[bits_lightPosIdxY >> 2].y) : (fp_c10_data[bits_lightPosIdxY >> 2].x))));
            int bits_posOffsetZ = bits_lightByteOff + 7368;
            uint bits_lightPosIdxZ = uint(bits_posOffsetZ) >> 2;
            float lt_posZ = (((int(bits_lightPosIdxZ) & 3) == 3) ? (fp_c10_data[int(bits_lightPosIdxZ) >> 2].w) : (((int(bits_lightPosIdxZ) & 3) == 2) ? (fp_c10_data[int(bits_lightPosIdxZ) >> 2].z) : (((int(bits_lightPosIdxZ) & 3) == 1) ? (fp_c10_data[int(bits_lightPosIdxZ) >> 2].y) : (fp_c10_data[int(bits_lightPosIdxZ) >> 2].x))));
            float lt_vecX = (-worldPosX) + lt_posX;
            float lt_vecY = lt_posY + (-((fWorldPos.y * gl_FragCoord.w) * fragWinv));
            float lt_vecZ = (-worldPosZ) + lt_posZ;
            float lt_distSqPartial = (lt_vecY * lt_vecY + (lt_vecX * lt_vecX));
            float lt_distSq = (lt_vecZ * lt_vecZ + lt_distSqPartial);
            float lt_invDist = inversesqrt(lt_distSq);
            float lt_dirX = lt_vecX * lt_invDist;
            float lt_dirY = lt_vecY * lt_invDist;
            float lt_dirZ = lt_vecZ * lt_invDist;
            float lt_halfRawX = eyeDir.x + lt_dirX;
            float lt_halfRawY = eyeDir.y + lt_dirY;
            float lt_halfRawZ = eyeDir.z + lt_dirZ;
            float lt_halfLenSqP = (lt_halfRawY * lt_halfRawY + (lt_halfRawX * lt_halfRawX));
            float lt_halfLenSq = (lt_halfRawZ * lt_halfRawZ + lt_halfLenSqP);
            float lt_halfInvLen = inversesqrt(lt_halfLenSq);
            float brdf_alpha = st2Roughness * st2Roughness;
            float lt_halfX = lt_halfRawX * lt_halfInvLen;
            float lt_halfY = lt_halfRawY * lt_halfInvLen;
            float lt_halfZ = lt_halfRawZ * lt_halfInvLen;
            int bits_attenOffset = bits_lightByteOff + 6880;
            uint bits_attenIdx = uint(bits_attenOffset) >> 2;
            float lt_range = (((int(bits_attenIdx) & 3) == 3) ? (fp_c10_data[int(bits_attenIdx) >> 2].w) : (((int(bits_attenIdx) & 3) == 2) ? (fp_c10_data[int(bits_attenIdx) >> 2].z) : (((int(bits_attenIdx) & 3) == 1) ? (fp_c10_data[int(bits_attenIdx) >> 2].y) : (fp_c10_data[int(bits_attenIdx) >> 2].x))));
            int bits_attenIdxFall = int(bits_attenIdx) + 1;
            float lt_falloffExp = (((bits_attenIdxFall & 3) == 3) ? (fp_c10_data[bits_attenIdxFall >> 2].w) : (((bits_attenIdxFall & 3) == 2) ? (fp_c10_data[bits_attenIdxFall >> 2].z) : (((bits_attenIdxFall & 3) == 1) ? (fp_c10_data[bits_attenIdxFall >> 2].y) : (fp_c10_data[bits_attenIdxFall >> 2].x))));
            float brdf_NdotH_p2 = (lt_halfY * st2NormX + (lt_halfX * st2NormZ));
            float brdf_VdotH_p2 = (eyeDir.y * lt_halfY + (eyeDir.x * lt_halfX));
            float brdf_NdotH_raw = (lt_halfZ * st2NormY + brdf_NdotH_p2);
            float brdf_VdotH_raw = (eyeDir.z * lt_halfZ + brdf_VdotH_p2);
            int bits_spotFlagOff = bits_lightByteOff + 8320;
            uint bits_spotFlagIdx = uint(bits_spotFlagOff) >> 2;
            float lt_spotFlagVal = (((int(bits_spotFlagIdx) & 3) == 3) ? (fp_c10_data[int(bits_spotFlagIdx) >> 2].w) : (((int(bits_spotFlagIdx) & 3) == 2) ? (fp_c10_data[int(bits_spotFlagIdx) >> 2].z) : (((int(bits_spotFlagIdx) & 3) == 1) ? (fp_c10_data[int(bits_spotFlagIdx) >> 2].y) : (fp_c10_data[int(bits_spotFlagIdx) >> 2].x))));
            float brdf_NdotH = max(brdf_NdotH_raw, 9.999999939e-09);
            float brdf_NdotL_p2 = (lt_dirY * st2NormX + (lt_dirX * st2NormZ));
            float brdf_VdotH = max(brdf_VdotH_raw, 9.999999939e-09);
            float brdf_NdotHsq = brdf_NdotH * brdf_NdotH;
            float brdf_NdotL_raw = (lt_dirZ * st2NormY + brdf_NdotL_p2);
            float brdf_fresnelArg1 = (brdf_VdotH * -5.554729939 + -6.98316002);
            float brdf_D_numer = ((brdf_alpha * brdf_alpha) * brdf_NdotHsq + (-brdf_NdotHsq));
            float brdf_NdotL = max(brdf_NdotL_raw, 9.999999939e-09);
            float brdf_k = (brdf_roughRemap * 0.5) * brdf_roughRemap;
            float brdf_G1V_partial = (brdf_k * (-st2NdotV_clamped) + st2NdotV_clamped);
            float brdf_G1L_partial = (brdf_k * (-brdf_NdotL) + brdf_NdotL);
            float lt_distAttenRaw = (lt_range * (-(sqrt(lt_distSq))) + 1.0);
            float brdf_fresnelWeight = exp2(brdf_VdotH * brdf_fresnelArg1);
            float brdf_D_sqrtPart = brdf_alpha * (1.0 / (max((brdf_D_numer + 1.0), 9.999999939e-09)));
            bool lt_isSpotlight = floatBitsToInt(lt_spotFlagVal) != 0;
            float brdf_fresnelB_p = (brdf_fresnelWeight * (-st2Reflect.b) + brdf_fresnelWeight);
            float brdf_fresnelR_p = (brdf_fresnelWeight * (-st2Reflect.r) + brdf_fresnelWeight);
            float brdf_fresnelG_p = (brdf_fresnelWeight * (-st2Reflect.g) + brdf_fresnelWeight);
            float lt_surfNdotL_p1 = lt_dirX * st2NormZ;
            float brdf_DG = ((1.0 / (brdf_k + brdf_G1V_partial)) * (1.0 / (brdf_k + brdf_G1L_partial))) * (brdf_D_sqrtPart * brdf_D_sqrtPart);
            float lt_surfNdotL_p2 = (lt_dirY * st2NormX + lt_surfNdotL_p1);
            float lt_spotOrDefault = lt_surfNdotL_p1;
            if (!lt_isSpotlight)
            {
                lt_spotOrDefault = 1.0;
            }
            float lt_surfNdotL_raw = (lt_dirZ * st2NormY + lt_surfNdotL_p2);
            float lt_spotAtten = lt_spotOrDefault;
            if (lt_isSpotlight)
            {
                int bits_spotDirOff = bits_lightByteOff + 7840;
                uint bits_spotDirIdx = uint(bits_spotDirOff) >> 2;
                float lt_spotDirX = (((int(bits_spotDirIdx) & 3) == 3) ? (fp_c10_data[int(bits_spotDirIdx) >> 2].w) : (((int(bits_spotDirIdx) & 3) == 2) ? (fp_c10_data[int(bits_spotDirIdx) >> 2].z) : (((int(bits_spotDirIdx) & 3) == 1) ? (fp_c10_data[int(bits_spotDirIdx) >> 2].y) : (fp_c10_data[int(bits_spotDirIdx) >> 2].x))));
                int bits_spotDirIdxY = int(bits_spotDirIdx) + 1;
                float lt_spotDirY = (((bits_spotDirIdxY & 3) == 3) ? (fp_c10_data[bits_spotDirIdxY >> 2].w) : (((bits_spotDirIdxY & 3) == 2) ? (fp_c10_data[bits_spotDirIdxY >> 2].z) : (((bits_spotDirIdxY & 3) == 1) ? (fp_c10_data[bits_spotDirIdxY >> 2].y) : (fp_c10_data[bits_spotDirIdxY >> 2].x))));
                int bits_spotDirOffZ = bits_lightByteOff + 7848;
                uint bits_spotDirIdxZ = uint(bits_spotDirOffZ) >> 2;
                float lt_spotDirZ = (((int(bits_spotDirIdxZ) & 3) == 3) ? (fp_c10_data[int(bits_spotDirIdxZ) >> 2].w) : (((int(bits_spotDirIdxZ) & 3) == 2) ? (fp_c10_data[int(bits_spotDirIdxZ) >> 2].z) : (((int(bits_spotDirIdxZ) & 3) == 1) ? (fp_c10_data[int(bits_spotDirIdxZ) >> 2].y) : (fp_c10_data[int(bits_spotDirIdxZ) >> 2].x))));
                int bits_spotAngleOff = bits_lightByteOff + 6888;
                uint bits_spotAngleIdx = uint(bits_spotAngleOff) >> 2;
                float lt_spotInnerCos = (((int(bits_spotAngleIdx) & 3) == 3) ? (fp_c10_data[int(bits_spotAngleIdx) >> 2].w) : (((int(bits_spotAngleIdx) & 3) == 2) ? (fp_c10_data[int(bits_spotAngleIdx) >> 2].z) : (((int(bits_spotAngleIdx) & 3) == 1) ? (fp_c10_data[int(bits_spotAngleIdx) >> 2].y) : (fp_c10_data[int(bits_spotAngleIdx) >> 2].x))));
                int bits_spotFallIdx = int(bits_spotAngleIdx) + 1;
                float lt_spotFalloff = (((bits_spotFallIdx & 3) == 3) ? (fp_c10_data[bits_spotFallIdx >> 2].w) : (((bits_spotFallIdx & 3) == 2) ? (fp_c10_data[bits_spotFallIdx >> 2].z) : (((bits_spotFallIdx & 3) == 1) ? (fp_c10_data[bits_spotFallIdx >> 2].y) : (fp_c10_data[bits_spotFallIdx >> 2].x))));
                float lt_spotDot_p2 = (lt_dirY * (-lt_spotDirY) + (lt_dirX * (-lt_spotDirX)));
                float lt_spotDot = (lt_dirZ * (-lt_spotDirZ) + lt_spotDot_p2);
                lt_spotAtten = (exp2(((log2((clamp(((lt_spotDot + (-lt_spotInnerCos)) * (1.0 / ((-lt_spotInnerCos) + 1.0))), 0.0, 1.0)))) * lt_spotFalloff)));
            }
            int bits_colorOffset = bits_lightByteOff + 6400;
            uint bits_colorIdx = uint(bits_colorOffset) >> 2;
            vec3 lt_color;
            lt_color.r = (((int(bits_colorIdx) & 3) == 3) ? (fp_c10_data[int(bits_colorIdx) >> 2].w) : (((int(bits_colorIdx) & 3) == 2) ? (fp_c10_data[int(bits_colorIdx) >> 2].z) : (((int(bits_colorIdx) & 3) == 1) ? (fp_c10_data[int(bits_colorIdx) >> 2].y) : (fp_c10_data[int(bits_colorIdx) >> 2].x))));
            int bits_colorIdxG = int(bits_colorIdx) + 1;
            lt_color.g = (((bits_colorIdxG & 3) == 3) ? (fp_c10_data[bits_colorIdxG >> 2].w) : (((bits_colorIdxG & 3) == 2) ? (fp_c10_data[bits_colorIdxG >> 2].z) : (((bits_colorIdxG & 3) == 1) ? (fp_c10_data[bits_colorIdxG >> 2].y) : (fp_c10_data[bits_colorIdxG >> 2].x))));
            int loop_nextCount = loop_counter + 1;
            int bits_colorOffsetB = bits_lightByteOff + 6408;
            uint bits_colorIdxB = uint(bits_colorOffsetB) >> 2;
            lt_color.b = (((int(bits_colorIdxB) & 3) == 3) ? (fp_c10_data[int(bits_colorIdxB) >> 2].w) : (((int(bits_colorIdxB) & 3) == 2) ? (fp_c10_data[int(bits_colorIdxB) >> 2].z) : (((int(bits_colorIdxB) & 3) == 1) ? (fp_c10_data[int(bits_colorIdxB) >> 2].y) : (fp_c10_data[int(bits_colorIdxB) >> 2].x))));
            vec3 lt_fullSpec;
            lt_fullSpec.r = (st2Dielec.r * 0.3183098733 + (((brdf_fresnelR_p + st2Reflect.r) * brdf_DG) * 0.0795774683));
            lt_fullSpec.b = (st2Dielec.b * 0.3183098733 + (((brdf_fresnelG_p + st2Reflect.g) * brdf_DG) * 0.0795774683));
            uint bits_nextBitmask = uint(bits_lightBitmask) >> 8;
            float lt_NdotLxAtten = (clamp(lt_surfNdotL_raw, 0.0, 1.0)) * ((exp2((lt_falloffExp * (log2((clamp(lt_distAttenRaw, 0.0, 1.0))))))) * lt_spotAtten);
            loop_done = loop_nextCount >= 4;
            vec3 lt_lit = vec3(lt_NdotLxAtten * lt_color.r, lt_NdotLxAtten * lt_color.g, lt_NdotLxAtten * lt_color.b);
            lt_fullSpec.g = (st2Dielec.g * 0.3183098733 + (((brdf_fresnelB_p + st2Reflect.b) * brdf_DG) * 0.0795774683));
            vec3 lt_accDiff;
            lt_accDiff.r = (lt_lit.r * lt_fullSpec.r + accDiff.r);
            vec3 lt_accInk;
            lt_accInk.r = lt_lit.r + stInkSpec.r;
            lt_accDiff.b = (lt_lit.b * lt_fullSpec.b + accDiff.b);
            lt_accDiff.g = (lt_lit.g * lt_fullSpec.g + accDiff.g);
            lt_accInk.g = lt_lit.g + stInkSpec.g;
            lt_accInk.b = lt_lit.b + stInkSpec.b;
            bits_lightBitmask = int(bits_nextBitmask);
            loop_counter = loop_nextCount;
            accDiff.r = lt_accDiff.r;
            stInkSpec.r = lt_accInk.r;
            accDiff.b = lt_accDiff.b;
            accDiff.g = lt_accDiff.g;
            stInkSpec.g = lt_accInk.g;
            stInkSpec.b = lt_accInk.b;
            accDielecB = lt_lit.g;
            accLightEntry = lt_lit.r;
            lt_carryDiffR = lt_accDiff.r;
            lt_carryDiffG = lt_accDiff.g;
            lt_carryDiffB = lt_accDiff.b;
            lt_carryInkSpecR = lt_accInk.r;
            lt_carryInkSpecG = lt_accInk.g;
            lt_carryInkSpecB = lt_accInk.b;
            lt_carryDielecB = lt_lit.g;
            lt_carryEntry = lt_lit.r;
        }
        while (!loop_done);
        if (!loop_shouldBreak)
        {
        }
        loop_shouldBreak = false;
        bool lt_hasExtraLight = bits_curLightIdx == 30;
        accLit.g = lt_carryDiffG;
        accLit.r = lt_carryDiffR;
        accLit.b = lt_carryDiffB;
        stInkEmit = vec3(lt_carryInkSpecR, lt_carryInkSpecG, lt_carryInkSpecB);
        accLtDielecB = lt_carryDielecB;
        accLtEntry = lt_carryEntry;
        if (lt_hasExtraLight)
        {
            float shadow_worldY = (fWorldPos.y * gl_FragCoord.w) * fragWinv;
            float shadow_vpW_pXY = (shadow_worldY * fp_c10_data[565].y + (worldPosX * fp_c10_data[565].x));
            float shadow_vpU_pXY = (shadow_worldY * fp_c10_data[562].y + (worldPosX * fp_c10_data[562].x));
            float shadow_vpW_pXYZ = (worldPosZ * fp_c10_data[565].z + shadow_vpW_pXY);
            float shadow_vpV_pXY = (shadow_worldY * fp_c10_data[563].y + (worldPosX * fp_c10_data[563].x));
            float shadow_vpU_pXYZ = (worldPosZ * fp_c10_data[562].z + shadow_vpU_pXY);
            float shadow_vpV_pXYZ = (worldPosZ * fp_c10_data[563].z + shadow_vpV_pXY);
            float shadow_invW = 1.0 / (shadow_vpW_pXYZ + fp_c10_data[565].w);
            float shadow_uvV = (((shadow_vpV_pXYZ + fp_c10_data[563].w) * shadow_invW) * 0.5 + 0.5);
            float shadow_uvU = (((shadow_vpU_pXYZ + fp_c10_data[562].w) * shadow_invW) * 0.5 + 0.5);
            float lt2_invGridScaleY = 1.0 / fp_c10_data[561].y;
            float lt2_deltaX = worldPosX + (-fp_c10_data[557].x);
            bool lt2_isAlphaTeam = alphaWeightFine > 0.5;
            float lt2_adjCenterX = ((fp_c10_data[561].x * fp_c10_data[558].x) * (-lt2_invGridScaleY) + fp_c10_data[557].x);
            float lt2_adjCenterZ = ((fp_c10_data[561].x * fp_c10_data[558].z) * (-lt2_invGridScaleY) + fp_c10_data[557].z);
            float lt2_crossXZ = lt2_deltaX * fp_c10_data[558].z;
            float lt2_toAdjX = (-worldPosX) + lt2_adjCenterX;
            float lt2_toAdjZ = (-worldPosZ) + lt2_adjCenterZ;
            float lt2_deltaZ = worldPosZ + (-fp_c10_data[557].z);
            float lt2_toAdjXsq = lt2_toAdjX * lt2_toAdjX;
            float lt2_crossZX = lt2_deltaZ * fp_c10_data[558].x;
            float lt2_adjDistSq = (lt2_toAdjZ * lt2_toAdjZ + lt2_toAdjXsq);
            bool lt2_facingLess = lt2_crossZX < lt2_crossXZ;
            bool lt2_facingGreater = lt2_crossZX > lt2_crossXZ;
            float lt2_distSq = (lt2_deltaZ * lt2_deltaZ + (lt2_deltaX * lt2_deltaX));
            float lt2_invDist = inversesqrt(lt2_distSq);
            float lt2_heightOffset = (sqrt(lt2_adjDistSq)) * (-fp_c10_data[558].y);
            float lt2_gridFacing = (-(lt2_facingLess ? 1.0 : 0.0)) + (lt2_facingGreater ? 1.0 : 0.0) * fp_c10_data[561].y;
            float lt2_heightDistSqP = (lt2_heightOffset * lt2_heightOffset + lt2_toAdjXsq);
            float lt2_fullDistSq = (lt2_toAdjZ * lt2_toAdjZ + lt2_heightDistSqP);
            float lt2_fullInvDist = inversesqrt(lt2_fullDistSq);
            float lt2_axialBlendX = (fp_c10_data[560].z * fp_c10_data[558].x + (-(lt2_gridFacing * fp_c10_data[558].z)));
            float lt2_axialBlendZ = (lt2_gridFacing * fp_c10_data[558].x + (fp_c10_data[560].z * fp_c10_data[558].z));
            float lt2_adjDirX = lt2_toAdjX * lt2_fullInvDist;
            float lt2_facingDot = (lt2_deltaX * lt2_axialBlendZ + (-(lt2_deltaZ * lt2_axialBlendX)));
            float lt2_adjDirY = lt2_heightOffset * lt2_fullInvDist;
            float lt2_dotDirAxis = ((lt2_deltaZ * lt2_invDist) * fp_c10_data[558].z + ((lt2_deltaX * lt2_invDist) * fp_c10_data[558].x));
            float lt2_adjDirZ = lt2_toAdjZ * lt2_fullInvDist;
            float lt2_halfRawX = eyeDir.x + lt2_adjDirX;
            float lt2_halfRawY = eyeDir.y + lt2_adjDirY;
            float lt2_projAxis = (lt2_deltaZ * fp_c10_data[558].z + (lt2_deltaX * fp_c10_data[558].x));
            float lt2_adjDirXZsq = (lt2_adjDirZ * lt2_adjDirZ + (lt2_adjDirX * lt2_adjDirX));
            float lt2_halfRawZ = eyeDir.z + lt2_adjDirZ;
            float lt2_planarInvLen = inversesqrt(lt2_adjDirXZsq);
            bool lt2_isBehindAxis = lt2_dotDirAxis < fp_c10_data[560].z;
            float lt2_halfXYsq = (lt2_halfRawY * lt2_halfRawY + (lt2_halfRawX * lt2_halfRawX));
            bool lt2_isPainted = (min((paintStrength * 1000.0), 1.0)) > 0.5;
            bool lt2_isPaintAlpha = lt2_isPainted && lt2_isAlphaTeam;
            int lt2_inkType = int(trunc(fp_c7_data[49].x));
            bool lt2_isForward = lt2_projAxis > 0.0;
            bool lt2_isBackward = lt2_projAxis <= 0.0;
            float lt2_halfLenSq = (lt2_halfRawZ * lt2_halfRawZ + lt2_halfXYsq);
            float lt2_halfInvLen = inversesqrt(lt2_halfLenSq);
            float lt2_distOrSqrt = lt2_distSq;
            float lt2_effectDirX = lt2_adjDirX;
            float lt2_effectDirY = lt2_adjDirY;
            float lt2_effectDirZ = lt2_adjDirZ;
            if (lt2_isForward)
            {
                lt2_distOrSqrt = (sqrt(lt2_distSq));
            }
            bool lt2_isInkType2 = lt2_inkType == 2;
            float lt2_endAttenRaw = ((lt2_projAxis + (-fp_c10_data[561].z)) * (-(1.0 / fp_c10_data[561].w)) + 1.0);
            float lt2_endAtten = clamp(lt2_endAttenRaw, 0.0, 1.0);
            float lt2_effectDist = lt2_distOrSqrt;
            if (!lt2_isForward)
            {
                lt2_effectDist = 1.0;
            }
            float brdf2_halfX = lt2_halfRawX * lt2_halfInvLen;
            float brdf2_roughRemap = (st2Roughness * 0.5 + 0.5);
            float lt2_spotDot = ((lt2_planarInvLen * lt2_adjDirZ) * (-fp_c10_data[558].z) + (lt2_planarInvLen * lt2_adjDirX) * (-fp_c10_data[558].x));
            float brdf2_halfY = lt2_halfRawY * lt2_halfInvLen;
            float brdf2_halfZ = lt2_halfRawZ * lt2_halfInvLen;
            float brdf2_VdotH_p2 = (eyeDir.y * brdf2_halfY + (eyeDir.x * brdf2_halfX));
            float brdf2_NdotH_p2 = (brdf2_halfY * st2NormX + (brdf2_halfX * st2NormZ));
            float shadow2_vpPartXY = (shadow_worldY * fp_c10_data[564].y + (worldPosX * fp_c10_data[564].x));
            float brdf2_NdotH_raw = (brdf2_halfZ * st2NormY + brdf2_NdotH_p2);
            float lt2_facingFactor = clamp(((1.0 / fp_c10_data[561].x) * (abs(lt2_facingDot))), 0.0, 1.0);
            float brdf2_alpha = st2Roughness * st2Roughness;
            float lt2_NdotL_p2 = (lt2_adjDirY * st2NormX + (lt2_adjDirX * st2NormZ));
            float brdf2_VdotH_raw = (eyeDir.z * brdf2_halfZ + brdf2_VdotH_p2);
            float brdf2_NdotH = max(brdf2_NdotH_raw, 9.999999939e-09);
            float lt2_NdotL_raw = (lt2_adjDirZ * st2NormY + lt2_NdotL_p2);
            float brdf2_k = (brdf2_roughRemap * 0.5) * brdf2_roughRemap;
            float lt2_facingFacSq = lt2_facingFactor * lt2_facingFactor;
            float brdf2_NdotHsq = brdf2_NdotH * brdf2_NdotH;
            float lt2_distAttenRaw = (lt2_effectDist * (-fp_c10_data[560].x) + 1.0);
            float brdf2_VdotH = max(brdf2_VdotH_raw, 9.999999939e-09);
            float brdf2_NdotL = max(lt2_NdotL_raw, 9.999999939e-09);
            float brdf2_G1V_partial = (brdf2_k * (-st2NdotV_clamped) + st2NdotV_clamped);
            float brdf2_D_numer = ((brdf2_alpha * brdf2_alpha) * brdf2_NdotHsq + (-brdf2_NdotHsq));
            float lt2_facingSmooth = (lt2_facingFacSq * (-lt2_facingFacSq) + 1.0);
            float brdf2_fresnelArg1 = (brdf2_VdotH * -5.554729939 + -6.98316002);
            float lt2_endAttenSq = lt2_endAtten * lt2_endAtten;
            float brdf2_G1L_partial = (brdf2_k * (-brdf2_NdotL) + brdf2_NdotL);
            float lt2_endAttenSmooth = (lt2_endAttenSq * (-lt2_endAttenSq) + 1.0);
            float lt2_attenBlendA = lt2_endAttenSmooth;
            if (lt2_isBehindAxis)
            {
                lt2_attenBlendA = (lt2_facingSmooth * lt2_facingSmooth);
            }
            float shadow2_vpPartXYZ = (worldPosZ * fp_c10_data[564].z + shadow2_vpPartXY);
            bool lt2_notPaintAlpha = !lt2_isPaintAlpha;
            int lt2_paintAlphaInt = lt2_notPaintAlpha ? 0 : 1;
            float lt2_attenBlendB = lt2_attenBlendA;
            if (!lt2_isBehindAxis)
            {
                lt2_attenBlendB = 1.0;
            }
            float brdf2_fresnelWt = exp2(brdf2_VdotH * brdf2_fresnelArg1);
            float brdf2_D_sqrtPart = brdf2_alpha * (1.0 / (max((brdf2_D_numer + 1.0), 9.999999939e-09)));
            bool lt2_hasPaintAlpha = lt2_paintAlphaInt != 0;
            bool lt2_doPaintInk = lt2_hasPaintAlpha && lt2_isInkType2;
            float lt2_surfNdotL_p2 = (lt2_adjDirY * st2NormX + (lt2_adjDirX * st2NormZ));
            float brdf2_fresnelR_p = (brdf2_fresnelWt * (-st2Reflect.r) + brdf2_fresnelWt);
            float brdf2_fresnelB_p = (brdf2_fresnelWt * (-st2Reflect.b) + brdf2_fresnelWt);
            float brdf2_fresnelG_p = (brdf2_fresnelWt * (-st2Reflect.g) + brdf2_fresnelWt);
            float brdf2_DG = ((1.0 / (brdf2_k + brdf2_G1V_partial)) * (1.0 / (brdf2_k + brdf2_G1L_partial))) * (brdf2_D_sqrtPart * brdf2_D_sqrtPart);
            float lt2_totalAtten = (min((lt2_endAttenSmooth * lt2_endAttenSmooth), lt2_attenBlendB)) * ((exp2(((log2((clamp(lt2_distAttenRaw, 0.0, 1.0)))) * fp_c10_data[560].y))) * (exp2(((log2((clamp(((lt2_spotDot + (-fp_c10_data[560].z)) * (1.0 / ((-fp_c10_data[560].z) + 1.0))), 0.0, 1.0)))) * fp_c10_data[560].w))));
            float lt2_surfNdotL_raw = (lt2_adjDirZ * st2NormY + lt2_surfNdotL_p2);
            float lt2_NdotLxAtten = lt2_totalAtten * (clamp(lt2_surfNdotL_raw, 0.0, 1.0));
            float shadow2_uvZ = (((shadow2_vpPartXYZ + fp_c10_data[564].w) * shadow_invW) * 0.5 + 0.5);
            vec3 lt2_lit = vec3((fp_c10_data[559].w * fp_c10_data[559].x) * lt2_NdotLxAtten, (fp_c10_data[559].w * fp_c10_data[559].y) * lt2_NdotLxAtten, (fp_c10_data[559].w * fp_c10_data[559].z) * lt2_NdotLxAtten);
            vec3 lt2_fullSpec = vec3((st2Dielec.r * 0.3183098733 + ((brdf2_DG * (brdf2_fresnelR_p + st2Reflect.r)) * 0.0795774683)), (st2Dielec.g * 0.3183098733 + ((brdf2_DG * (brdf2_fresnelB_p + st2Reflect.b)) * 0.0795774683)), (st2Dielec.b * 0.3183098733 + ((brdf2_DG * (brdf2_fresnelG_p + st2Reflect.g)) * 0.0795774683)));
            float lt2_outR = lt2_fullSpec.r * lt2_lit.r;
            bool lt2_inShadow = (texture(lightPrepassTex, vec2(shadow_uvU, ((-shadow_uvV) + 1.0))).b) > shadow2_uvZ;
            bool lt2_litOrBack = lt2_inShadow || lt2_isBackward;
            float lt2_shadowMask = lt2_litOrBack ? 1.0 : 0.0;
            vec3 lt2_inkAcc;
            lt2_inkAcc.b = 0.0;
            float lt2_inkDielecB = lt2_outR;
            lt2_inkAcc.g = 0.0;
            lt2_inkAcc.r = 0.0;
            if (lt2_doPaintInk)
            {
                float ink_detailU = paintU * fp_c7_data[49].y;
                float ink_detailV = paintV_inv * fp_c7_data[49].y;
                int ink_lodInt = int(((0.0) * 256.0));
                float ink_invDetailScale = 1.0 / fp_c7_data[49].y;
                int ink_lodBits = (ink_lodInt & 65535);
                float ink_lodFinal = max(0.0, (min(((float(ink_lodBits)) * 0.00234375009), 6.0)));
                float ink_lodFloor = floor(ink_lodFinal);
                float ink_mipScaleA = exp2(-ink_lodFloor);
                float ink_mipScaleB = exp2((-(ink_lodFloor + 1.0)));
                vec4 user1Sample_4032 = texture(user1Tex, vec2((ink_detailU * ink_mipScaleA), (ink_detailV * ink_mipScaleA))).rgba;
                vec2 user2Sample_4036 = texture(user2Tex, vec2((ink_detailU * fp_c7_data[78].x), (ink_detailV * fp_c7_data[78].x))).gb;
                vec3 user1Sample_4038 = texture(user1Tex, vec2((ink_detailU * ink_mipScaleB), (ink_detailV * ink_mipScaleB))).rgb;
                float ink_threshSample = texture(user2Tex, vec2(((ink_detailU * ink_invDetailScale) * fp_c7_data[51].x), ((ink_detailV * ink_invDetailScale) * fp_c7_data[51].x))).r;
                float ink_tanY = (fTangents.y * gl_FragCoord.w) * fragWinv;
                float ink_tanZ = (fTangents.z * gl_FragCoord.w) * fragWinv;
                float ink_xfmY = (fPaintUVXform.y * gl_FragCoord.w) * fragWinv;
                float ink_tanX = (fTangents.x * gl_FragCoord.w) * fragWinv;
                float ink_xfmZ = (fPaintUVXform.z * gl_FragCoord.w) * fragWinv;
                float ink_tanW = (fTangents.w * gl_FragCoord.w) * fragWinv;
                float ink_xfmX = (fPaintUVXform.x * gl_FragCoord.w) * fragWinv;
                float ink_blendFactor = clamp(((paintStrength + (-fp_c7_data[49].w)) * (1.0 / fp_c7_data[49].z)), 0.0, 1.0);
                float ink_crossNT_X = (ink_tanY * st2NormZ + (-(ink_tanX * st2NormX)));
                bool ink_useMipA = user1Sample_4032.w >= (ink_lodFinal + (-ink_lodFloor));
                float ink_noiseDirX = (user2Sample_4036.x * 2.007874012 + -1.00787401);
                float ink_noiseDirY = (user2Sample_4036.y * 2.007874012 + -1.00787401);
                float ink_crossNT_Y = (ink_tanZ * st2NormX + (-(ink_tanY * st2NormY)));
                float ink_crossNT_Z = (ink_tanX * st2NormY + (-(ink_tanZ * st2NormZ)));
                float ink_crossNX_X = (ink_xfmZ * st2NormX + (-(ink_xfmY * st2NormY)));
                vec3 ink_detail = user1Sample_4032.xyz;
                if (!ink_useMipA)
                {
                    ink_detail.g = user1Sample_4038.y;
                }
                float ink_crossNX_Y = (ink_xfmX * st2NormY + (-(ink_xfmZ * st2NormZ)));
                if (!ink_useMipA)
                {
                    ink_detail.r = user1Sample_4038.x;
                }
                float ink_noiseWorldA = (ink_xfmX * ink_noiseDirX + (ink_noiseDirY * ink_crossNX_X));
                float ink_NdotL_p2 = (lt2_adjDirY * st2NormX + (lt2_adjDirX * st2NormZ));
                float ink_noiseLenSq = (ink_noiseDirX * ink_noiseDirX + (ink_noiseDirY * ink_noiseDirY));
                if (!ink_useMipA)
                {
                    ink_detail.b = user1Sample_4038.z;
                }
                float ink_crossNX_Z = (ink_xfmY * st2NormZ + (-(ink_xfmX * st2NormX)));
                float ink_NdotL_raw = (lt2_adjDirZ * st2NormY + ink_NdotL_p2);
                float ink_noiseWorldB = (ink_xfmY * ink_noiseDirX + (ink_noiseDirY * ink_crossNX_Y));
                bool ink_isBackFacing = ink_NdotL_raw < 0.0;
                float ink_noiseWorldC = (ink_xfmZ * ink_noiseDirX + (ink_noiseDirY * ink_crossNX_Z));
                float ink_detailRGsq = (ink_detail.r * ink_detail.r + (ink_detail.g * ink_detail.g));
                float ink_nmapWorldA = (ink_tanX * ink_detail.r + ((ink_tanW * ink_crossNT_Y) * ink_detail.g));
                float ink_nmapWorldB = (ink_tanY * ink_detail.r + ((ink_tanW * ink_crossNT_Z) * ink_detail.g));
                float ink_noiseZ = sqrt((clamp(((-ink_noiseLenSq) + 1.0), 0.0, 1.0)));
                if (ink_isBackFacing)
                {
                    lt2_effectDirX = (-lt2_adjDirX);
                }
                float ink_hashArg = (ink_detail.r * 78.23300171 + (ink_detail.b * 12.9898005));
                float ink_detailZ = sqrt((clamp(((-ink_detailRGsq) + 1.0), 0.0, 1.0)));
                if (ink_isBackFacing)
                {
                    lt2_effectDirY = (-lt2_adjDirY);
                }
                float ink_nmapWorldC = (ink_tanZ * ink_detail.r + ((ink_tanW * ink_crossNT_X) * ink_detail.g));
                float ink_halfRawX = eyeDir.x + lt2_effectDirX;
                if (ink_isBackFacing)
                {
                    lt2_effectDirZ = (-lt2_adjDirZ);
                }
                float ink_halfRawY = eyeDir.y + lt2_effectDirY;
                float ink_noiseNrmA = (ink_noiseZ * st2NormZ + ink_noiseWorldA);
                float ink_halfRawZ = eyeDir.z + lt2_effectDirZ;
                float ink_noiseNrmB = (ink_noiseZ * st2NormX + ink_noiseWorldB);
                float ink_detailNrmA = (ink_detailZ * st2NormZ + ink_nmapWorldA);
                float ink_detailNrmB = (ink_detailZ * st2NormX + ink_nmapWorldB);
                float ink_halfXYsq = (ink_halfRawY * ink_halfRawY + (ink_halfRawX * ink_halfRawX));
                float ink_noiseNrmC = (ink_noiseZ * st2NormY + ink_noiseWorldC);
                float ink_detailNrmC = (ink_detailZ * st2NormY + ink_nmapWorldC);
                float ink_halfLenSq = (ink_halfRawZ * ink_halfRawZ + ink_halfXYsq);
                float ink_hashScaled = sin(ink_hashArg) * 43758.5469;
                float ink_halfInvLen = inversesqrt(ink_halfLenSq);
                float ink_detailNrmABsq = (ink_detailNrmB * ink_detailNrmB + (ink_detailNrmA * ink_detailNrmA));
                float ink_noiseNrmABsq = (ink_noiseNrmB * ink_noiseNrmB + (ink_noiseNrmA * ink_noiseNrmA));
                float ink_eyeZ_p2 = (eyeDir.y * ctx.cViewInv[1].z + (eyeDir.x * ctx.cViewInv[0].z));
                float ink_detailNrmLenSq = (ink_detailNrmC * ink_detailNrmC + ink_detailNrmABsq);
                float ink_noiseNrmLenSq = (ink_noiseNrmC * ink_noiseNrmC + ink_noiseNrmABsq);
                float ink_detailNrmInvLen = inversesqrt(ink_detailNrmLenSq);
                float ink_halfX = ink_halfRawX * ink_halfInvLen;
                float ink_noiseNrmInvLen = inversesqrt(ink_noiseNrmLenSq);
                float ink_halfY = ink_halfRawY * ink_halfInvLen;
                float ink_halfZ = ink_halfRawZ * ink_halfInvLen;
                float ink_eyeViewZ = (eyeDir.z * ctx.cViewInv[2].z + ink_eyeZ_p2);
                float ink_depthBiasRaw = (((fWorldPos.w * gl_FragCoord.w) * fragWinv) * 0.01999999955 + 1.0);
                float ink_depthBlend = clamp(ink_depthBiasRaw, 0.0, 1.0);
                float ink_viewBlendRaw = (ink_eyeViewZ * fp_c7_data[50].z + fp_c7_data[50].w);
                float ink_viewBlend = clamp(ink_viewBlendRaw, 0.0, 1.0);
                float ink_detailNNrmA = ink_detailNrmA * ink_detailNrmInvLen;
                float ink_detailNNrmB = ink_detailNrmB * ink_detailNrmInvLen;
                float ink_detailNNrmC = ink_detailNrmC * ink_detailNrmInvLen;
                float ink_VdotH_p2 = (eyeDir.y * ink_halfY + (eyeDir.x * ink_halfX));
                float ink_NdotH_p2 = (ink_detailNNrmB * ink_halfY + (ink_detailNNrmA * ink_halfX));
                float ink_NdotL_det_p2 = (ink_detailNNrmB * lt2_effectDirY + (ink_detailNNrmA * lt2_effectDirX));
                float ink_NdotV_det_p2 = (eyeDir.y * ink_detailNNrmB + (eyeDir.x * ink_detailNNrmA));
                float ink_VdotH_raw = (eyeDir.z * ink_halfZ + ink_VdotH_p2);
                float ink_negNdotV_noi_p2 = (eyeDir.y * (-(ink_noiseNrmB * ink_noiseNrmInvLen)) + (eyeDir.x * (-(ink_noiseNrmA * ink_noiseNrmInvLen))));
                float ink_NdotH_raw = (ink_detailNNrmC * ink_halfZ + ink_NdotH_p2);
                float ink_roughSq = fp_c7_data[48].w * fp_c7_data[48].w;
                float ink_NdotL_det_raw = (ink_detailNNrmC * lt2_effectDirZ + ink_NdotL_det_p2);
                float ink_VdotH = max(ink_VdotH_raw, 9.999999939e-09);
                float ink_roughRemap = (fp_c7_data[48].w * 0.5 + 0.5);
                float ink_NdotH = max(ink_NdotH_raw, 9.999999939e-09);
                float ink_NdotV_det_raw = (eyeDir.z * ink_detailNNrmC + ink_NdotV_det_p2);
                float ink_negNdotV_noise = (eyeDir.z * (-(ink_noiseNrmC * ink_noiseNrmInvLen)) + ink_negNdotV_noi_p2);
                float ink_fresnelArg1 = (ink_VdotH * -5.554729939 + -6.98316002);
                float ink_NdotHsq = ink_NdotH * ink_NdotH;
                float ink_k = (ink_roughRemap * 0.5) * ink_roughRemap;
                bool ink_ditherPass = (ink_hashScaled + (-(floor(ink_hashScaled)))) <= fp_c7_data[77].w;
                float ink_threshValue = (ink_threshSample * fp_c7_data[51].z + fp_c7_data[51].y);
                float ink_NdotV_det = max(ink_NdotV_det_raw, 9.999999939e-09);
                float ink_D_numer = ((ink_roughSq * ink_roughSq) * ink_NdotHsq + (-ink_NdotHsq));
                float ink_rimFactorRaw = (ink_negNdotV_noise * 0.5 + 0.5);
                float ink_NdotL_det = max(ink_NdotL_det_raw, 9.999999939e-09);
                float ink_covAClamped = clamp(((-ink_threshValue) + ink_detail.b), 0.0, 1.0);
                float ink_G1V_partial = (ink_k * (-ink_NdotV_det) + ink_NdotV_det);
                float ink_covBClamped = clamp(((-ink_threshValue) + 0.5), 0.0, 1.0);
                float ink_G1L_partial = (ink_k * (-ink_NdotL_det) + ink_NdotL_det);
                float ink_effectNrmC = ink_detailNNrmC;
                float ink_effectK = ink_k;
                float ink_effectRimG = fp_c7_data[78].y;
                lt2_inkDielecB = ink_depthBlend;
                if (ink_ditherPass)
                {
                    ink_effectNrmC = fp_c7_data[48].x;
                }
                float ink_covGapA = (-ink_covAClamped) + fp_c7_data[51].w;
                float ink_covGapB = (-ink_covBClamped) + fp_c7_data[51].w;
                float ink_fresnelWeight = exp2(ink_VdotH * ink_fresnelArg1);
                float ink_rimDelta = ((clamp(ink_rimFactorRaw, 0.0, 1.0)) * fp_c7_data[78].y + (-fp_c7_data[78].y));
                float ink_ditherNrmC = ink_effectNrmC;
                if (ink_ditherPass)
                {
                    ink_effectK = (ink_effectNrmC * fp_c7_data[72].x);
                }
                vec3 ink_effectColor;
                ink_effectColor.r = ink_effectK;
                if (!ink_ditherPass)
                {
                    ink_effectColor.r = fp_c7_data[72].x;
                }
                float ink_covBlendA = (ink_blendFactor * (-ink_covGapA) + ink_covGapA);
                if (ink_ditherPass)
                {
                    ink_effectRimG = (ink_effectNrmC * fp_c7_data[72].y);
                }
                ink_effectColor.g = ink_effectRimG;
                if (!ink_ditherPass)
                {
                    ink_effectColor.g = fp_c7_data[72].y;
                }
                if (ink_ditherPass)
                {
                    ink_ditherNrmC = (ink_effectNrmC * fp_c7_data[72].z);
                }
                ink_effectColor.b = ink_ditherNrmC;
                if (!ink_ditherPass)
                {
                    ink_effectColor.b = fp_c7_data[72].z;
                }
                float ink_covBlendB = (ink_blendFactor * (-ink_covGapB) + ink_covGapB);
                vec3 ink_specColor;
                ink_specColor.r = ink_effectColor.r * fp_c7_data[48].y;
                float ink_D_sqrtPart = ink_roughSq * (1.0 / (max((ink_D_numer + 1.0), 9.999999939e-09)));
                float ink_rimFull = ink_rimDelta + 1.0;
                ink_specColor.g = ink_effectColor.g * fp_c7_data[48].y;
                ink_specColor.b = ink_effectColor.b * fp_c7_data[48].y;
                float ink_specFresR_p = (ink_specColor.r * (-ink_fresnelWeight) + ink_fresnelWeight);
                float ink_DtimesPi = ink_D_sqrtPart * ink_D_sqrtPart;
                float ink_specFresG_p = (ink_specColor.g * (-ink_fresnelWeight) + ink_fresnelWeight);
                float ink_specFresB_p = (ink_specColor.b * (-ink_fresnelWeight) + ink_fresnelWeight);
                float ink_DG = ((1.0 / (ink_k + ink_G1V_partial)) * (1.0 / (ink_k + ink_G1L_partial))) * ink_DtimesPi;
                vec3 ink_emitDelta;
                ink_emitDelta.g = (-st2Emit.g) + fp_c7_data[72].y;
                float ink_covFinalA = ink_depthBlend * (ink_viewBlend * (ink_rimFull * (ink_covAClamped + ink_covBlendA)));
                vec3 ink_specOut = vec3(ink_covFinalA * ((ink_specColor.r + ink_specFresR_p) * ink_DG), ink_covFinalA * ((ink_specColor.g + ink_specFresG_p) * ink_DG), ink_covFinalA * ((ink_specColor.b + ink_specFresB_p) * ink_DG));
                ink_emitDelta.r = (-st2Emit.r) + fp_c7_data[72].x;
                float ink_emitStrength = (ink_depthBlend * (ink_viewBlend * ((ink_covBClamped + ink_covBlendB) * ink_rimFull))) * fp_c7_data[48].z;
                ink_emitDelta.b = (-st2Emit.b) + fp_c7_data[72].z;
                vec3 ink_litSpec = vec3(ink_specOut.r * (lt2_lit.r * lt2_shadowMask), ink_specOut.g * (lt2_lit.g * lt2_shadowMask), ink_specOut.b * (lt2_lit.b * lt2_shadowMask));
                vec3 ink_emit = vec3((ink_emitDelta.r * ink_emitStrength + st2Emit.r), (ink_emitDelta.g * ink_emitStrength + st2Emit.g), (ink_emitDelta.b * ink_emitStrength + st2Emit.b));
                lt2_inkAcc.b = (ink_litSpec.b * 0.0795774683);
                accNormZ = ink_DtimesPi;
                accNormY = ink_specColor.b;
                lt2_inkAcc.g = (ink_litSpec.g * 0.0795774683);
                lt2_inkAcc.r = (ink_litSpec.r * 0.0795774683);
                accEmit = ink_emit;
            }
            accLit.g = (((lt2_fullSpec.g * lt2_lit.g) * lt2_shadowMask) + lt_carryDiffG);
            accLit.r = ((lt2_outR * lt2_shadowMask) + lt_carryDiffR);
            accLit.b = (((lt2_fullSpec.b * lt2_lit.b) * lt2_shadowMask) + lt_carryDiffB);
            accLtNormZ = accNormZ;
            accLtNormY = accNormY;
            accLtDielecB = lt2_inkDielecB;
            accLtEntry = lt2_inkAcc.b;
            stInkEx = vec3(lt2_inkAcc.g, lt2_inkAcc.b, lt2_inkAcc.r);
            accLtEmit = accEmit;
        }
    }
    int finalInkType = int(trunc(fp_c7_data[49].x));
    float worldPosY = fWorldPos.y * gl_FragCoord.w * fragWinv;
    float litRTotal = shadowRx32 + st2Light.r;
    bool fog_isInkType6 = finalInkType == 6;
    float luma_p2 = (env.cLightColor.y * 0.5866109729 + (env.cLightColor.x * 0.298911989));
    bool fog_isInkType9 = finalInkType == 9;
    float luma = (env.cLightColor.z * 0.1144779995 + luma_p2);
    float fogDistX = worldPosX - ctx.cViewInv[0].w;
    bool fog_isInkType2 = finalInkType == 2;
    bool fog_isInkSpecial = fog_isInkType2 || fog_isInkType6;
    bool fog_isInkType2b = finalInkType == 2;
    bool fog_isInkEmitMask = fog_isInkType2b || fog_isInkType6;
    float inkEmitMask = fog_isInkEmitMask ? 1.0 : 0.0;
    bool fog_isInkType2c = finalInkType == 2;
    bool fog_isInkEmitMask2 = fog_isInkType2c || fog_isInkType6;
    float inkEmitMask2 = fog_isInkEmitMask2 ? 1.0 : 0.0;
    float fogDirDot_p = (worldPosY * env.cFog1DirStart.y + (worldPosX * env.cFog1DirStart.x));
    float fogDistY = worldPosY - ctx.cViewInv[1].w;
    float fogDirDot = (worldPosZ * env.cFog1DirStart.z + fogDirDot_p);
    float fogDistZ = worldPosZ - ctx.cViewInv[2].w;
    bool fog_isInkType9b = finalInkType == 9;
    bool fog_isInkAnySpec = fog_isInkType9b || fog_isInkSpecial;
    float litGTotal = shadowGx32 + st2Light.g;
    bool fog_notInkSpecial = !fog_isInkSpecial;
    int fog_inkSpecialInt = fog_notInkSpecial ? 0 : 1;
    float litBTotal = shadowBx32 + st2Light.b;
    float litR_withInk = (shadowRx32 * inkEmitMask2 + (inkEmitMask * stInkEmit.r));
    float litG_withInk = (shadowGx32 * inkEmitMask2 + (inkEmitMask * stInkEmit.g));
    float litB_withInk = (shadowBx32 * inkEmitMask2 + (inkEmitMask * stInkEmit.b));
    bool fog_hasInkSpecial = fog_inkSpecialInt != 0;
    bool fog_enableInkFx = fog_hasInkSpecial || fog_isInkType9;
    float accLtNormZ2 = accLtNormZ;
    float accLtNormY2 = accLtNormY;
    float accLtDielecB2 = accLtDielecB;
    float accLtEntry2 = accLtEntry;
    float stInkExR2 = stInkEx.r;
    float stInkExG2 = stInkEx.g;
    float stInkExB2 = stInkEx.b;
    if (fog_isInkSpecial)
    {
        accLtNormZ2 = fp_c7_data[77].y;
    }
    float rimMinR = accLtNormZ2;
    if (fog_isInkSpecial)
    {
        accLtNormY2 = fp_c7_data[77].z;
    }
    float rimMinG = accLtNormY2;
    if (!fog_isInkSpecial)
    {
        rimMinR = 0.0627499968;
    }
    if (!fog_isInkSpecial)
    {
        rimMinG = 0.0627499968;
    }
    float fogDistSq_p = (fogDistY * fogDistY + (fogDistX * fogDistX));
    float shadowFogFull = lightAccessibility * (clamp((st2NdotL), 0.0, 1.0));
    if (!fog_isInkAnySpec)
    {
        specAccGlobal = (litRTotal * stSpecAcc.r);
    }
    float invLuma = 1.0 / luma;
    float specAccGlobal2 = specAccGlobal;
    if (fog_isInkAnySpec)
    {
        specAccGlobal2 = 0.0;
    }
    float fogDistSq = (fogDistZ * fogDistZ + fogDistSq_p);
    if (fog_isInkSpecial)
    {
        accLtDielecB2 = fp_c7_data[77].x;
    }
    float fogDistInvLen = inversesqrt(fogDistSq);
    float rimMinB = accLtDielecB2;
    if (!fog_isInkSpecial)
    {
        rimMinB = 0.0610000007;
    }
    float fogDist = sqrt(fogDistSq);
    if (fog_isInkAnySpec)
    {
        specAccG2 = 0.0;
    }
    float specAccG2_full = specAccG2;
    if (!fog_isInkAnySpec)
    {
        specAccG2_full = (litGTotal * stSpecAcc.g);
    }
    float rimMask = (shadowFogFull * (-rimMinB) + shadowFogFull);
    if (fog_isInkAnySpec)
    {
        accLtEntry2 = 0.0;
    }
    float rimIntensity = (((rimMinG - rimMinR) * ((max(luma, 2.0)) + -2.0)) * 0.200000003 + rimMinR);
    float specAccB2_full = accLtEntry2;
    if (!fog_isInkAnySpec)
    {
        specAccB2_full = (litBTotal * stSpecAcc.b);
    }
    vec3 rim;
    rim.r = (invLuma * env.cLightColor.x) * rimIntensity;
    float rimTotal = rimMask + rimMinB;
    rim.g = (invLuma * env.cLightColor.y) * rimIntensity;
    float fogNdotL = ((fogDistY * fogDistInvLen) * env._env_rest[1].y + ((fogDistX * fogDistInvLen) * env._env_rest[1].x));
    rim.b = (invLuma * env.cLightColor.z) * rimIntensity;
    float rimG_lit = (rim.g * rimTotal + litG_withInk);
    float fogNdotL_final = ((fogDistZ * fogDistInvLen) * env._env_rest[1].z + fogNdotL);
    float rimB_lit = (rim.b * rimTotal + litB_withInk);
    float fogHeightBlend = (fogNdotL_final * (-fp_c7_data[54].y) + fp_c7_data[54].y);
    float rimR_lit = (rim.r * rimTotal + litR_withInk);
    float diffG_spec2 = (rimG_lit * stSpecAcc.g);
    if (!fog_enableInkFx)
    {
        diffG_spec2 = 0.0;
    }
    float diffB_spec = rimB_lit * stSpecAcc.b;
    float diffR_spec = rimR_lit * stSpecAcc.r;
    if (!fog_enableInkFx)
    {
        diffB_spec = 0.0;
    }
    if (!fog_enableInkFx)
    {
        stInkExR2 = 0.0;
    }
    if (!fog_enableInkFx)
    {
        diffR_spec = 0.0;
    }
    if (!fog_enableInkFx)
    {
        stInkExG2 = 0.0;
    }
    if (!fog_enableInkFx)
    {
        stInkExB2 = 0.0;
    }
    float litR_final = (shadowInvTotal * accLit.g) + (((lightAccessibility * (((specIrradG * litGTotal) + specAccG2_full) * stSpecScaleFactor)) + diffG_spec2) + stInkExR2);
    float litB_final = (shadowInvTotal * accLit.b) + (((lightAccessibility * (((specIrradB * litBTotal) + specAccB2_full) * stSpecScaleFactor)) + diffB_spec) + stInkExG2);
    float litR_totalFinal = (shadowInvTotal * accLit.r) + (((lightAccessibility * (((specIrradFull * litRTotal) + specAccGlobal2) * stSpecScaleFactor)) + diffR_spec) + stInkExB2);
    vec3 fogColor = ((exp2(((log2(clamp(fogDist * ctx.cScreen.x, 0.0, 1.0))) * fp_c7_data[54].x))) * (exp2(fogHeightBlend))) * fp_c7_data[55].xyz;
    vec3 fogScaled = fogColor * clamp(((lightAccessibility * shadowInvTotal) * fp_c7_data[54].w + (1.0 - fp_c7_data[54].w)), 0.0, 1.0);
    vec3 composite = vec3(litR_totalFinal + accLtEmit.r, litR_final + accLtEmit.g, litB_final + accLtEmit.b);
    vec3 fogDiff = (fogScaled * vec3(fp_c7_data[54].z) + -env.cFog0Color.xyz);
    vec3 fog0 = (fogDiff * vec3(fp_c7_data[53].w) + env.cFog0Color.xyz);
    vec3 fogBlend = -composite + env.cFog1Color.xyz;
    vec3 preFog = (fogBlend * vec3(((clamp(((fogDirDot * (-env.cFog1EndDamp.x) + env.cFog1DirStart.w)), 0.0, 1.0)) * env.cFog1Color.w)) + composite);
    vec3 fogMix = fog0 - preFog;
    vec3 finalColor = (fogMix * vec3(((clamp(-(exp2(((clamp((fogDist * env.cFog0EndDamp.x + env.cFog0DirStart.w), 0.0, 1.0)) * (-fp_c7_data[53].x) * 1.44269502))) + 1.0, 0.0, 1.0)) * env.cFog0Color.w)) + preFog);
    oFragColor = vec4(is_bgra[0] ? finalColor.bgr : finalColor.rgb, 1.0);
    oFragColor.rgb = oFragColor.rgb * (1.0 - extraBlock.selectionColor.a) + extraBlock.selectionColor.rgb * extraBlock.selectionColor.a;
    return;
}
