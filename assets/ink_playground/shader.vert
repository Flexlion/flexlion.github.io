#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
precision highp samplerCube;
const int undef = 0;
layout(std140) uniform vp_c3
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
layout(std140) uniform vp_c4
{
    mat3x4 cTransform;
    vec4 cParams;
    vec4 _shp_rest[12];
} shape;
layout(std140) uniform vp_c5
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
layout (location = 0) in vec4 vPosition;
layout (location = 1) in vec4 vNormal; 
layout (location = 2) in vec4 vTangent;
layout (location = 8) in vec4 vTexCoord0;
layout (location = 9) in vec4 vTexCoord1;
layout (location = 13) in vec4 _pu0;
layout (location = 14) in vec4 _pu1;
layout (location = 15) in vec4 _pu2;
out vec4 fTexCoords01;
out vec4 fNormals;
out vec4 fTangents;
out vec4 fWorldPos;
out vec4 fViewDirection;
out vec4 fClipPos;
out vec4 fPaintUV;
out vec4 fPaintData;
out vec4 fShadowUV;
out vec4 fPaintUVXform;
out vec4 fBakeUV;
out vec4 fOut11;
out vec4 fOut12;
out vec4 fOut13;
out vec4 fOut14;
out vec4 fOut15;
void main()
{
    fOut11 = vec4(0.0);
    fOut12 = vec4(0.0);
    fOut13 = vec4(0.0);
    fOut14 = vec4(0.0);
    fOut15 = vec4(0.0);

    // ---------------------------------------------------------------------
    // Texture coordinates
    // ---------------------------------------------------------------------

    fTexCoords01.xy = vec2(
        dot(vTexCoord0.xy, mat.tex_mtx0[0].xz) + mat.tex_mtx0[1].x,
        dot(vTexCoord0.xy, mat.tex_mtx0[0].yw) + mat.tex_mtx0[1].y
    );

    fBakeUV.xy = vTexCoord1.xy * mat.gsys_bake_st0.xy + mat.gsys_bake_st0.zw;
    fBakeUV.zw = vTexCoord1.xy * mat.gsys_bake_st1.xy + mat.gsys_bake_st1.zw;

    fPaintUV = _pu1 + vec4(
        mat.col_paint_uv_offset.x,
        mat.col_paint_uv_offset.y,
        mat.col_paint_uv_offset.x,
        mat.col_paint_uv_offset.y
    );

    fPaintData.w = _pu2.x;

    // Paint-space position transformed by the model 3x3, without translation.
    fPaintUVXform.xyz = vec3(
        dot(_pu0.xyz, shape.cTransform[0].xyz),
        dot(_pu0.xyz, shape.cTransform[1].xyz),
        dot(_pu0.xyz, shape.cTransform[2].xyz)
    );

    // ---------------------------------------------------------------------
    // Object to world
    // ---------------------------------------------------------------------

    vec3 worldPos = vec3(
        dot(vPosition.xyz, shape.cTransform[0].xyz) + shape.cTransform[0].w,
        dot(vPosition.xyz, shape.cTransform[1].xyz) + shape.cTransform[1].w,
        dot(vPosition.xyz, shape.cTransform[2].xyz) + shape.cTransform[2].w
    );

    vec3 worldNormal = vec3(
        dot(vNormal.xyz, shape.cTransform[0].xyz),
        dot(vNormal.xyz, shape.cTransform[1].xyz),
        dot(vNormal.xyz, shape.cTransform[2].xyz)
    );

    vec3 worldTangent = vec3(
        dot(vTangent.xyz, shape.cTransform[0].xyz),
        dot(vTangent.xyz, shape.cTransform[1].xyz),
        dot(vTangent.xyz, shape.cTransform[2].xyz)
    );

    worldNormal = normalize(worldNormal);
    worldTangent = normalize(worldTangent);

    fWorldPos.xyz = worldPos;
    fNormals.xyz = worldNormal;
    fTangents.xyz = worldTangent;
    fTangents.w = vTangent.w;

    // Camera-relative vector.
    fViewDirection.xyz = worldPos - vec3(
        ctx.cViewInv[0].w,
        ctx.cViewInv[1].w,
        ctx.cViewInv[2].w
    );

    // ---------------------------------------------------------------------
    // World to view
    // ---------------------------------------------------------------------

    vec3 viewPos = vec3(
        dot(worldPos, ctx.cView[0].xyz) + ctx.cView[0].w,
        dot(worldPos, ctx.cView[1].xyz) + ctx.cView[1].w,
        dot(worldPos, ctx.cView[2].xyz) + ctx.cView[2].w
    );

    fWorldPos.w = viewPos.z;

    // ---------------------------------------------------------------------
    // Shadow / projection texture coordinates
    // ---------------------------------------------------------------------

    fShadowUV.xyz = vec3(
        dot(worldPos, ctx.cProjectionTexMtx0[0].xyz) + ctx.cProjectionTexMtx0[0].w,
        dot(worldPos, ctx.cProjectionTexMtx0[1].xyz) + ctx.cProjectionTexMtx0[1].w,
        dot(worldPos, ctx.cProjectionTexMtx0[2].xyz) + ctx.cProjectionTexMtx0[2].w
    );

    // ---------------------------------------------------------------------
    // View to clip
    // ---------------------------------------------------------------------

    vec4 clipPos = vec4(
        dot(viewPos, ctx.cProj[0].xyz) + ctx.cProj[0].w,
        dot(viewPos, ctx.cProj[1].xyz) + ctx.cProj[1].w,
        dot(viewPos, ctx.cProj[2].xyz) + ctx.cProj[2].w,
        dot(viewPos, ctx.cProj[3].xyz) + ctx.cProj[3].w
    );

    gl_Position = clipPos;

    // Original decomp only writes x, y, and w.
    fClipPos.xyw = clipPos.xyw;
}