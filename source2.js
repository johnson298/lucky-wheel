/*
const arrColor = [
    {main: '#e23e57', child: ["#ffcdd2", "#b71c1c", "#e57373", "#e53935"]},
    {main: '#8c82fc', child: ["#e1bee7", "#4a148c", "#ba68c8", "#8e24aa"]},
    {main: '#521262', child: ["#d1c4e9", "#311b92", "#9575cd", "#5e35b1"]},
    {main: '#3490de', child: ["#bbdefb", "#64b5f6", "#1e88e5", "#0d47a1"]},
    {main: '#086972', child: ["#b2dfdb", "#004d40", "#4db6ac", "#00897b"]},
    {main: '#36622b', child: ["#c8e6c9", "#1b5e20", "#81c784", "#43a047"]},
    {main: '#729d39', child: ["#f0f4c3", "#827717", "#dce775", "#c0ca33"]},
    {main: '#ffb400', child: ["#fff9c4", "#f57f17", "#fff176", "#fdd835"]},
    {main: '#fb8c00', child: ["#ffe0b2", "#e65100", "#ffb74d", "#fb8c00"]},
    {main: '#6d4c41', child: ["#d7ccc8", "#3e2723", "#a1887f", "#6d4c41"]},
    {main: '#546e7a', child: ["#cfd8dc", "#263238", "#90a4ae", "#546e7a"]},
    {main: '#000000', child: ["#e6194b", "#3cb44b", "#ffe119", "#0082c8", "#f58231", "#911eb4", "#46f0f0", "#f032e6", "#d2f53c", "#fabebe", "#008080", "#e6beff", "#aa6e28", "#fffac8", "#800000", "#aaffc3", "#808000", "#ffd8b1", "#000080", "#808080", "#FFFFFF", "#000000"]},
]


const _wlwl_get_email_params = {
    "ajaxurl": "https://authentic.new2new.com/home-2/wp-admin/admin-ajax.php?action=wlwl_get_email",
    "pointer_position": "center",
    "wheel_dot_color": "#000000",
    "wheel_border_color": "#ffffff",
    "wheel_center_color": "#ffffff",
    "gdpr": "on",
    "gdpr_warning": "Please agree with our term and condition.",
    "position": "bottom-right",
    "show_again": "1",
    "scroll_amount": "50",
    "show_again_unit": "s",
    "intent": "show_wheel",
    "hide_popup": "off",
    "slice_text_color": "#fff",
    "bg_color": [
        "#ffcdd2",
        "#b71c1c",
        "#e57373",
        "#e53935",
        "#ffcdd2",
        "#b71c1c",
        "#e57373",
        "#e53935",
        "#ffcdd2",
        "#b71c1c",
        "#e57373",
        "#e53935"
    ],
    "slices_text_color": [
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff"
    ],
    "label": [
        "Not Lucky",
        "10% OFF",
        "Not Lucky",
        "20% OFF",
        "Not Lucky",
        "30% OFF",
        "Not Lucky",
        "$30",
        "Not Lucky",
        "$20",
        "Not Lucky",
        "$10"
    ],
    "coupon_type": [
        "non",
        "custom",
        "non",
        "custom",
        "non",
        "custom",
        "non",
        "custom",
        "non",
        "custom",
        "non",
        "custom"
    ],
    "spinning_time": "8",
    "wheel_speed": "5",
    "auto_close": "0",
    "show_wheel": "2",
    "time_if_close": "60",
    "empty_email_warning": "*Please enter your email",
    "invalid_email_warning": "*Please enter a valid email address",
    "wlwl_warring_recaptcha": "*Require reCAPTCHA verification",
    "limit_time_warning": "You can only spin 1 time every 1 seconds",
    "custom_field_name_enable": "on",
    "custom_field_name_enable_mobile": "",
    "custom_field_name_required": "",
    "custom_field_name_message": "Name is required!",
    "custom_field_mobile_enable": "on",
    "custom_field_mobile_enable_mobile": "",
    "custom_field_mobile_required": "",
    "custom_field_mobile_message": "Phone number is required!",
    "show_full_wheel": "on",
    "font_size": "100",
    "wheel_size": "100",
    "is_mobile": "",
    "congratulations_effect": "firework",
    "images_dir": "https://authentic.new2new.com/home-2/wp-content/plugins/woocommerce-lucky-wheel/images/",
    "language": "",
    "rotate": "",
    "wlwl_recaptcha_site_key": "",
    "wlwl_recaptcha_version": "3",
    "wlwl_recaptcha_secret_theme": "light",
    "wlwl_recaptcha": ""
}
jQuery(document).ready(function ($) {
    let congratulations_effect = _wlwl_get_email_params.congratulations_effect;
    let font_size = _wlwl_get_email_params.font_size;
    let wheel_size = _wlwl_get_email_params.wheel_size;
    let custom_field_name_enable = _wlwl_get_email_params.custom_field_name_enable;
    let custom_field_name_required = _wlwl_get_email_params.custom_field_name_required;
    let custom_field_mobile_enable = _wlwl_get_email_params.custom_field_mobile_enable;
    let custom_field_mobile_required = _wlwl_get_email_params.custom_field_mobile_required;

    let wlwl_hide_popup = _wlwl_get_email_params.hide_popup;
    let color = _wlwl_get_email_params.bg_color;
    let slices_text_color = _wlwl_get_email_params.slices_text_color;
    let label = _wlwl_get_email_params.label;
    let coupon_type = _wlwl_get_email_params.coupon_type;
    let wlwl_auto_close = parseInt(_wlwl_get_email_params.auto_close);
    let wlwl_notify_position = _wlwl_get_email_params.position;
    let wlwl_show_again = _wlwl_get_email_params.show_again;
    let wlwl_show_again_unit = _wlwl_get_email_params.show_again_unit;
    let time_if_close = _wlwl_get_email_params.time_if_close;
    switch (wlwl_show_again_unit) {
        case 'm':
            wlwl_show_again *= 60;
            break;
        case 'h':
            wlwl_show_again *= 60 * 60;
            break;
        case 'd':
            wlwl_show_again *= 60 * 60 * 24;
            break;
        default:
    }
    let intent_type = _wlwl_get_email_params.intent;
    let initial_time = _wlwl_get_email_params.show_wheel;
    let scroll_amount = _wlwl_get_email_params.scroll_amount;
    let wlwl_center_color = _wlwl_get_email_params.wheel_center_color;
    let wlwl_border_color = _wlwl_get_email_params.wheel_border_color;
    let wlwl_dot_color = _wlwl_get_email_params.wheel_dot_color;
    let gdpr_checkbox = _wlwl_get_email_params.gdpr;
    let slice_text_color = _wlwl_get_email_params.slice_text_color;
    let wlwl_spinning_time = _wlwl_get_email_params.spinning_time;
    let wheel_speed = _wlwl_get_email_params.wheel_speed;
    let slices = coupon_type.length;
    let sliceDeg = 360 / slices;
    let deg = -(sliceDeg / 2);
    let cv = document.getElementById('wlwl_canvas');
    let ctx = cv.getContext('2d');

    let canvas_width;
    let wd_width, wd_height;
    wd_width = window.innerWidth;
    wd_height = window.innerHeight;
    if (wd_width > wd_height) {
        canvas_width = wd_height;
    } else {
        canvas_width = wd_width;
    }
    let width = parseInt(wheel_size * (canvas_width * 0.55 + 16) / 100);// size
    cv.width = width;
    cv.height = width;
    if (window.devicePixelRatio) {
        let hidefCanvasWidth = $(cv).attr('width');
        let hidefCanvasHeight = $(cv).attr('height');
        let hidefCanvasCssWidth = hidefCanvasWidth;
        let hidefCanvasCssHeight = hidefCanvasHeight;

        $(cv).attr('width', hidefCanvasWidth * window.devicePixelRatio);
        $(cv).attr('height', hidefCanvasHeight * window.devicePixelRatio);
        $(cv).css('width', hidefCanvasCssWidth);
        $(cv).css('height', hidefCanvasCssHeight);
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    let center = (width) / 2; // center
    $('.wlwl_wheel_spin').css({'width': width + 'px', 'height': width + 'px'});
    if ('on' === _wlwl_get_email_params.show_full_wheel) {
        $('.wlwl_lucky_wheel_content').css({'max-width': (width + 600) + 'px'});
    } else {
        $('.wlwl_lucky_wheel_content').css({'max-width': (0.6 * width + 600) + 'px'});
    }
    let inline_css = '.wlwl_lucky_wheel_content:not(.wlwl_lucky_wheel_content_mobile) .wheel-content-wrapper .wheel_content_left{min-width:' + (width + 35) + 'px}';
    if (_wlwl_get_email_params.pointer_position === 'center') {
        inline_css += '.wlwl_pointer:before{font-size:' + parseInt(width / 4) + 'px !important; }';
    } else {
        inline_css += '.wlwl_pointer:before{font-size:' + parseInt(width / 10) + 'px !important; }';
        inline_css += '.wlwl_margin_position .wlwl_wheel_spin_container .wlwl_pointer_content .wlwl_pointer:after{width:' + parseInt(width / 25) + 'px;height:' + parseInt(width / 25) + 'px;bottom:' + parseInt(width / 30) + 'px; }';
    }

    $('head').append('<style type="text/css">' + inline_css + '</style>');
    inline_css = $('#woocommerce-lucky-wheel-frontend-style-inline-css').html();
    $('#woocommerce-lucky-wheel-frontend-style-inline-css').html(inline_css);
    let wheel_text_size;
    wheel_text_size = parseInt(width / 28) * parseInt(font_size) / 100;

    function deg2rad(deg) {
        return deg * Math.PI / 180;
    }

    function drawSlice(deg, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(center, center);
        let r;
        if (width <= 480) {
            r = width / 2 - 10;
        } else {
            r = width / 2 - 14;
        }
        ctx.arc(center, center, r, deg2rad(deg), deg2rad(deg + sliceDeg));
        ctx.lineTo(center, center);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }

    function drawPoint(deg, color) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.shadowBlur = 1;
        ctx.shadowOffsetX = 8;
        ctx.shadowOffsetY = 8;
        ctx.shadowColor = 'rgba(0,0,0,0.2)';
        ctx.arc(center, center, width / 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.clip();
        ctx.closePath();
        ctx.restore();
    }

    function drawBorder(borderC, dotC, lineW, dotR, des, shadColor) {
        ctx.beginPath();
        ctx.strokeStyle = borderC;
        ctx.lineWidth = lineW;
        ctx.shadowBlur = 1;
        ctx.shadowOffsetX = 8;
        ctx.shadowOffsetY = 8;
        ctx.shadowColor = shadColor;
        ctx.arc(center, center, center, 0, 2 * Math.PI);
        ctx.stroke();
        let x_val, y_val, deg;
        deg = sliceDeg / 2;
        let center1 = center - des;
        for (let i = 0; i < slices; i++) {
            ctx.beginPath();
            ctx.fillStyle = dotC;
            x_val = center + center1 * Math.cos(deg * Math.PI / 180);
            y_val = center - center1 * Math.sin(deg * Math.PI / 180);
            ctx.arc(x_val, y_val, dotR, 0, 2 * Math.PI);
            ctx.fill();
            deg += sliceDeg;
        }
        ctx.closePath();
        ctx.restore();
    }

    function drawText(deg, text, color) {
        ctx.save();
        ctx.translate(center, center);
        ctx.rotate(deg2rad(deg));
        ctx.textAlign = "right";
        ctx.fillStyle = color;
        ctx.font = '200 ' + wheel_text_size + 'px Helvetica';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        text = text.replace(/&#(\d{1,4});/g, function (fullStr, code) {
            return String.fromCharCode(code);
        });
        text = text.replace(/&nbsp;/g, ' ');
        let reText = text.split('\/n'), text1 = '', text2 = '';
        if (reText.length > 1) {
            text1 = reText[0];
            text2 = reText.splice(1, reText.length - 1);
            text2 = text2.join('');
        } else {
            reText = text.split('\\n');
            if (reText.length > 1) {
                text1 = reText[0];
                text2 = reText.splice(1, reText.length - 1);
                text2 = text2.join('');
            }
        }
        if (text1.trim() !== "" && text2.trim() !== "") {
            ctx.fillText(text1.trim(), 7 * center / 8, -(wheel_text_size * 1 / 4));
            ctx.fillText(text2.trim(), 7 * center / 8, wheel_text_size * 3 / 4);
        } else {
            ctx.fillText(text.replace(/\\n/g, '').replace(/\/n/g, ''), 7 * center / 8, wheel_text_size / 2 - 2);
        }
        ctx.restore();
    }

    function wlwl_trim(x) {
        return x.replace(/^\s+|\s+$/gm, '');
    }

//cookie
    function setCookie(cname, cvalue, expire) {
        let d = new Date();
        d.setTime(d.getTime() + (expire * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function overlay_function() {
        $('.wlwl-overlay').on('click', function () {
            $('html').removeClass('wlwl-html');
            $(this).hide();
            $('.wlwl_lucky_wheel_content').removeClass('lucky_wheel_content_show');
            setCookie('wlwl_cookie', 'closed', time_if_close);
            if (wlwl_hide_popup !== 'on') {
                $('.wlwl_wheel_icon').addClass('wlwl_show');
            }
        });
    }

    function spins_wheel(stop_position, result_notification, result) {
        let canvas_1 = $('#wlwl_canvas');
        let canvas_3 = $('#wlwl_canvas2');
        let default_css = '';
        if (window.devicePixelRatio) {
            default_css = 'width:' + width + 'px;height:' + width + 'px;';
        }
        canvas_1.attr('style', default_css);
        canvas_3.attr('style', default_css);
        let stop_deg = 360 - sliceDeg * stop_position;
        let wheel_stop = wheel_speed * 360 * wlwl_spinning_time + stop_deg;
        let css = default_css + '-moz-transform: rotate(' + wheel_stop + 'deg);-webkit-transform: rotate(' + wheel_stop + 'deg);-o-transform: rotate(' + wheel_stop + 'deg);-ms-transform: rotate(' + wheel_stop + 'deg);transform: rotate(' + wheel_stop + 'deg);';
        css += '-webkit-transition: transform ' + wlwl_spinning_time + 's ease;-moz-transition: transform ' + wlwl_spinning_time + 's ease;-ms-transition: transform ' + wlwl_spinning_time + 's ease;-o-transition: transform ' + wlwl_spinning_time + 's ease;transition: transform ' + wlwl_spinning_time + 's ease;';
        canvas_1.attr('style', css);
        canvas_3.attr('style', css);
        setTimeout(function () {
            css = default_css + 'transform: rotate(' + stop_deg + 'deg);';
            canvas_1.attr('style', css);
            canvas_3.attr('style', css);
            $('.wlwl_lucky_wheel_content').addClass('wlwl-finish-spinning');
            $('.wlwl-overlay').unbind().on('click', function () {
                $('html').removeClass('wlwl-html');
                $(this).hide();

                $('.wlwl_lucky_wheel_content').removeClass('lucky_wheel_content_show');
                $('.wlwl_wheel_spin').css({'margin-left': '0', 'transition': '2s'});
            });
            if (result === 'win' && congratulations_effect === 'firework') {
                $('.wlwl-congratulations-effect').addClass('wlwl-congratulations-effect-firework');
            }
            $('.wlwl_user_lucky').html('<div class="wlwl-frontend-result">' + result_notification + '</div>').fadeIn(300);
            if (wlwl_auto_close > 0) {
                setTimeout(function () {
                    $('.wlwl-overlay').hide();
                    $('html').removeClass('wlwl-html');
                    $('.wlwl_lucky_wheel_content').removeClass('lucky_wheel_content_show');
                    $('.wlwl_wheel_spin').css({'margin-left': '0', 'transition': '2s'});
                }, wlwl_auto_close * 1000);
            }
        }, parseInt(wlwl_spinning_time * 1000))
    }

    function isValidEmailAddress(emailAddress) {
        let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i;
        return pattern.test(emailAddress);
    }

    function validateRecaptcha(response) {
        if (response) {
            jQuery('.wlwl-recaptcha-field #wlwl-g-validate-response').val(response);
        }
    }

    function expireRecaptcha() {
        jQuery('.wlwl-recaptcha-field #wlwl-g-validate-response').val(null);
        /!*   if (_wlwl_get_email_params.wlwl_layout == 3) {
               let old_width = jQuery('.wlwl-recaptcha > div').width();
               let parent_width = jQuery('.wlwl-recaptcha').width();
               jQuery('.wlwl-recaptcha > div').css({transform: 'scale(' + parent_width / old_width + ',1)'});
           }*!/
    }
    /!* Googele recaptcha *!/
    window.addEventListener('load', function () {
        if (_wlwl_get_email_params.wlwl_recaptcha == 'on') {
            if (_wlwl_get_email_params.wlwl_recaptcha_version == 2) {
                wlwlreCaptchaV2Onload();
            }else {
                wlwlreCaptchaV3Onload();
                jQuery('.wlwl-recaptcha-field').hide();
            }
        }else {
            jQuery('.wlwl-recaptcha-field').hide();
        }
    });
    function wlwlreCaptchaV3Onload() {
        grecaptcha.ready(function () {
            grecaptcha.execute(_wlwl_get_email_params.wlwl_recaptcha_site_key, {action: 'homepage'}).then(function (token) {
                validateRecaptcha(token);
            })
        });
    }

    function wlwlreCaptchaV2Onload() {
        if (jQuery.find('.wlwl-recaptcha').length == 0 || jQuery.find('.wlwl-recaptcha iframe').length) {
            return true;
        }
        grecaptcha.render('wlwl-recaptcha', {

            'sitekey': _wlwl_get_email_params.wlwl_recaptcha_site_key,

            'callback': validateRecaptcha,

            'expired-callback': expireRecaptcha,

            'theme': _wlwl_get_email_params.wlwl_recaptcha_secret_theme,

            'isolated': false
        });


    }

    function check_email() {
        $(document).on('keypress', function (e) {
            if ($('.wlwl_lucky_wheel_content').hasClass('lucky_wheel_content_show') && e.keyCode === 13) {
                $('#wlwl_chek_mail').click();
            }
        });
        /!*reCaptcha*!/
        $('.wheel-content-wrapper').on('renderReCaptcha', function () {
            if (_wlwl_get_email_params.wlwl_recaptcha == 'on') {
                if (_wlwl_get_email_params.wlwl_recaptcha_version == 2) {
                    wlwlreCaptchaV2Onload();
                } else {
                    wlwlreCaptchaV3Onload();
                    $('.wheel-content-wrapper').find('.wlwl-recaptcha-field').hide();
                }
            }
        });

        window.addEventListener('load', function () {
            if (_wlwl_get_email_params.wlwl_recaptcha == 'on') {
                if (_wlwl_get_email_params.wlwl_recaptcha_version == 2) {
                    wlwlreCaptchaV2Onload();
                } else {
                    wlwlreCaptchaV3Onload();
                    $('.wheel-content-wrapper').find('.wlwl-recaptcha-field').hide();
                }
            }
        });
        $('#wlwl_chek_mail').on('click', function () {
            $('#wlwl_error_mail').html('');
            $('#wlwl_error_name').html('');
            $('#wlwl_error_mobile').html('');
            $('#wlwl_warring_recaptcha').html('');
            $('.wlwl_field_name').removeClass('wlwl-required-field');
            $('.wlwl_field_mobile').removeClass('wlwl-required-field');
            $('.wlwl_field_email').removeClass('wlwl-required-field');
            $('.wlwl-recaptcha-field').removeClass('wlwl-required-field');
            if ('on' === gdpr_checkbox && !$('.wlwl-gdpr-checkbox-wrap input[type="checkbox"]').prop('checked')) {
                alert(_wlwl_get_email_params.gdpr_warning);
                return false;
            }
            let wlwl_email = $('#wlwl_player_mail').val();
            let wlwl_name = $('#wlwl_player_name').val();
            let wlwl_mobile = $('#wlwl_player_mobile').val();
            let g_validate_response = $('#wlwl-g-validate-response').val();
            let qualified = true;
            if (custom_field_name_enable === 'on' && custom_field_name_required === 'on' && !wlwl_name) {
                $('#wlwl_error_name').html(_wlwl_get_email_params.custom_field_name_message);
                $('.wlwl_field_name').addClass('wlwl-required-field');
                qualified = false;
            }
            if (custom_field_mobile_enable === 'on' && custom_field_mobile_required === 'on' && !wlwl_mobile) {
                $('#wlwl_error_mobile').html(_wlwl_get_email_params.custom_field_mobile_message);
                $('.wlwl_field_mobile').addClass('wlwl-required-field');
                qualified = false;
            }
            if (!wlwl_email) {
                $('#wlwl_player_mail').prop('disabled', false).focus();
                $('#wlwl_error_mail').html(_wlwl_get_email_params.empty_email_warning);
                $('.wlwl_field_email').addClass('wlwl-required-field');
                qualified = false;
            }
            if (_wlwl_get_email_params.wlwl_recaptcha && _wlwl_get_email_params.wlwl_recaptcha_site_key && !g_validate_response) {
                $('.wlwl-recaptcha-field #wlwl-recaptcha > div').addClass('wlwl-required-field').focus();
                $('#wlwl_warring_recaptcha').html(_wlwl_get_email_params.wlwl_warring_recaptcha);
                qualified = false;
            } else {
                $('.wlwl-recaptcha-field #wlwl-recaptcha > div').removeClass('wlwl-required-field');
                qualified = true;
            }
            if (qualified === false) {
                return false;
            }
            $(this).unbind();
            $('.wlwl-overlay').unbind();
            $('#wlwl_player_mail').prop('disabled', true);
            if (getCookie('wlwl_cookie') === "" || getCookie('wlwl_cookie') === 'closed') {
                if (isValidEmailAddress($('#wlwl_player_mail').val())) {
                    $('#wlwl_error_mail').html('');
                    $('#wlwl_chek_mail').addClass('wlwl-adding');

                    $.ajax({
                        type: 'post',
                        dataType: 'json',
                        url: _wlwl_get_email_params.ajaxurl,
                        data: {
                            origin_prize: coupon_type,
                            user_email: wlwl_email,
                            user_name: wlwl_name,
                            user_mobile: wlwl_mobile,
                            language: _wlwl_get_email_params.language,
                            g_validate_response: g_validate_response,
                            _woocommerce_lucky_wheel_nonce: $('#_woocommerce_lucky_wheel_nonce').val(),
                        },
                        success: function (response) {
                            if (response.allow_spin === 'yes') {
                                $('.wlwl-show-again-option').hide();
                                $('.wlwl-close-wheel').hide();
                                $('.wlwl-hide-after-spin').show();
                                spins_wheel(response.stop_position, response.result_notification, response.result);

                                setCookie('wlwl_cookie', wlwl_email, wlwl_show_again);
                            } else {
                                $('#wlwl_chek_mail').removeClass('wlwl-adding');
                                $('#wlwl_player_mail').prop('disabled', false);
                                check_email();
                                overlay_function();
                                alert(response.allow_spin);
                            }
                            if (response.hasOwnProperty('metrilo_response')) {
                                let metrilo_response = response.metrilo_response;
                                if (metrilo_response.status === 'success' && window.hasOwnProperty('metrilo')) {
                                    if (window.metrilo.hasOwnProperty('customEvent') && typeof window.metrilo.customEvent === 'function') {
                                        window.metrilo.customEvent('woocommerce_lucky_wheel');
                                    }
                                }
                            }
                        }
                    });

                } else {
                    $('#wlwl_player_mail').prop('disabled', false).focus();
                    check_email();
                    overlay_function();
                    $('#wlwl_error_mail').html(_wlwl_get_email_params.invalid_email_warning);
                    $('.wlwl_field_email').addClass('wlwl-required-field');
                }

            } else {
                alert(_wlwl_get_email_params.limit_time_warning);
                $('#wlwl_player_mail').prop('disabled', false);
                check_email();
                overlay_function();
            }
        });
    }

    function wlwl_rand(min, max) {
        if (max > min) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        } else {
            return Math.floor(Math.random() * (min - max + 1)) + max;
        }
    }

    overlay_function();
    check_email();
    let center1 = 32;

    if (!getCookie('wlwl_cookie') || getCookie('wlwl_cookie') == "") {
        $('.wlwl-hide-after-spin').bind('click', function () {
            $('.wlwl-overlay').hide();
            $('html').removeClass('wlwl-html');
            $('.wlwl_lucky_wheel_content').removeClass('lucky_wheel_content_show');
            $('.wlwl_wheel_spin').css({'margin-left': '0', 'transition': '2s'});
        });

        $('.wlwl-reminder-later-a').unbind().bind('click', function () {
            setCookie('wlwl_cookie', 'reminder_later', 24 * 60 * 60);
            $('.wlwl_wheel_icon').addClass('wlwl_show');
            $('.wlwl-overlay').hide();
            $('html').removeClass('wlwl-html');
            $('.wlwl_lucky_wheel_content').removeClass('lucky_wheel_content_show');
        });
        $('.wlwl-never-again span').bind('click', function () {
            setCookie('wlwl_cookie', 'never_show_again', 30 * 24 * 60 * 60);

            $('.wlwl_wheel_icon').addClass('wlwl_show');

            $('.wlwl-overlay').hide();
            $('html').removeClass('wlwl-html');
            $('.wlwl_lucky_wheel_content').removeClass('lucky_wheel_content_show');
        });
        $('.wlwl-close span').on('click', function () {
            $('.wlwl-overlay').hide();
            setCookie('wlwl_cookie', 'closed', time_if_close);
            $('html').removeClass('wlwl-html');
            $('.wlwl_lucky_wheel_content').removeClass('lucky_wheel_content_show');
            if (wlwl_hide_popup !== 'on') {
                $('.wlwl_wheel_icon').addClass('wlwl_show');
            }
        });
        $('.wlwl-close-wheel span').on('click', function () {
            $('.wlwl-overlay').hide();
            $('html').removeClass('wlwl-html');
            $('.wlwl_lucky_wheel_content').removeClass('lucky_wheel_content_show');
            setCookie('wlwl_cookie', 'closed', time_if_close);
            if (wlwl_hide_popup !== 'on') {
                $('.wlwl_wheel_icon').addClass('wlwl_show');
            }
        });


        $('.woocommerce-lucky-wheel-popup-icon').on('click', function () {
            $('.wlwl_wheel_icon').removeClass('wlwl_show');
            $('.wlwl-overlay').show();
            $('html').addClass('wlwl-html');
            $('.wlwl_lucky_wheel_content').addClass('lucky_wheel_content_show');
        });

        for (let i = 0; i < slices; i++) {
            drawSlice(deg, color[i]);
            drawText(deg + sliceDeg / 2, label[i], slices_text_color[i]);
            deg += sliceDeg;

        }
        cv = document.getElementById('wlwl_canvas1');
        ctx = cv.getContext('2d');
        cv.width = width;
        cv.height = width;
        if (window.devicePixelRatio) {
            let hidefCanvasWidth = $(cv).attr('width');
            let hidefCanvasHeight = $(cv).attr('height');
            let hidefCanvasCssWidth = hidefCanvasWidth;
            let hidefCanvasCssHeight = hidefCanvasHeight;

            $(cv).attr('width', hidefCanvasWidth * window.devicePixelRatio);
            $(cv).attr('height', hidefCanvasHeight * window.devicePixelRatio);
            $(cv).css('width', hidefCanvasCssWidth);
            $(cv).css('height', hidefCanvasCssHeight);
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        }
        drawPoint(deg, wlwl_center_color);
        if ($('#wlwl_center_image').val()) {
            let wl_image = new Image;
            wl_image.onload = function () {
                cv = document.getElementById('wlwl_canvas1');
                ctx = cv.getContext('2d');
                ctx.shadowBlur = 0;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowColor = '';
                let image_size = 2 * (width / 8 - 7);
                ctx.arc(center, center, image_size / 2, 0, 2 * Math.PI);
                ctx.clip();
                ctx.drawImage(wl_image, center - image_size / 2, center - image_size / 2, image_size, image_size);
            };
            wl_image.src = $('#wlwl_center_image').val();
        }

        if (width <= 480) {
            drawBorder(wlwl_border_color, 'rgba(0,0,0,0)', 20, 4, 5, 'rgba(0,0,0,0.2)');

        } else {
            drawBorder(wlwl_border_color, 'rgba(0,0,0,0)', 30, 6, 7, 'rgba(0,0,0,0.2)');
        }

        cv = document.getElementById('wlwl_canvas2');
        ctx = cv.getContext('2d');

        cv.width = width;
        cv.height = width;
        if (window.devicePixelRatio) {
            let hidefCanvasWidth = $(cv).attr('width');
            let hidefCanvasHeight = $(cv).attr('height');
            let hidefCanvasCssWidth = hidefCanvasWidth;
            let hidefCanvasCssHeight = hidefCanvasHeight;

            $(cv).attr('width', hidefCanvasWidth * window.devicePixelRatio);
            $(cv).attr('height', hidefCanvasHeight * window.devicePixelRatio);
            $(cv).css('width', hidefCanvasCssWidth);
            $(cv).css('height', hidefCanvasCssHeight);
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        }
        if (width <= 480) {
            drawBorder('rgba(0,0,0,0)', wlwl_dot_color, 20, 4, 5, 'rgba(0,0,0,0)');

        } else {
            drawBorder('rgba(0,0,0,0)', wlwl_dot_color, 30, 6, 7, 'rgba(0,0,0,0)');
        }

        if (intent_type === 'popup_icon') {
            let notify_time_out = setTimeout(function () {
                $('.wlwl_wheel_icon').addClass('wlwl_show');

            }, initial_time * 1000);
        } else if (intent_type === 'show_wheel') {
            setTimeout(function () {
                $('.wlwl-overlay').show();
                $('html').addClass('wlwl-html');
                $('.wlwl_lucky_wheel_content').addClass('lucky_wheel_content_show');
            }, initial_time * 1000);
        } else if (intent_type === 'on_scroll') {
            let htmlHeight, scrollHeight, scrollTop, scrollRate;
            $(document).on('scroll', function () {
                if (!getCookie('wlwl_cookie')) {
                    htmlHeight = $('html').prop('scrollHeight');
                    scrollHeight = window.innerHeight;
                    scrollTop = $('html').prop('scrollTop');
                    if (htmlHeight > 0) {
                        scrollRate = (scrollTop + scrollHeight) * 100 / (htmlHeight);
                        if (scrollRate > scroll_amount) {
                            $('.wlwl-overlay').show();
                            $('html').addClass('wlwl-html');
                            $('.wlwl_lucky_wheel_content').addClass('lucky_wheel_content_show');
                        }
                    }
                }
            });
        } else if (intent_type === 'on_exit') {
            $(window).on('mousemove', function (event) {
                let scrollTop = $('html').prop('scrollTop');
                let pageY = event.pageY;
                if (!getCookie('wlwl_cookie')) {
                    if (pageY - scrollTop < 15) {
                        $('.wlwl-overlay').show();
                        $('html').addClass('wlwl-html');
                        $('.wlwl_lucky_wheel_content').addClass('lucky_wheel_content_show');
                    }
                }
            })
        }

    }

    function drawPopupIcon() {
        cv = document.getElementById('wlwl_popup_canvas');
        if (cv) {
            ctx = cv.getContext('2d');

            for (let k = 0; k < slices; k++) {
                drawSlice1(deg, color[k]);
                deg += sliceDeg;
            }
            drawPoint1(wlwl_center_color);
            drawBorder1(wlwl_border_color, wlwl_dot_color, 4, 1, 0);
        }
    }

    drawPopupIcon();

    function drawSlice1(deg, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(center1, center1);
        ctx.arc(center1, center1, 32, deg2rad(deg), deg2rad(deg + sliceDeg));
        ctx.lineTo(center1, center1);
        ctx.fill();
        ctx.restore();
    }

    function drawPoint1(color) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(center1, center1, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    }

    function drawBorder1(borderC, dotC, lineW, dotR, des) {
        ctx.beginPath();
        ctx.strokeStyle = borderC;
        ctx.lineWidth = lineW;
        ctx.arc(center1, center1, center1, 0, 2 * Math.PI);
        ctx.stroke();
        let x_val, y_val, deg;
        deg = sliceDeg / 2;
        let center2 = center1 - des;
        for (let i = 0; i < slices; i++) {
            ctx.beginPath();
            ctx.fillStyle = dotC;
            x_val = center1 + center2 * Math.cos(deg * Math.PI / 180);
            y_val = center1 - center2 * Math.sin(deg * Math.PI / 180);
            ctx.arc(x_val, y_val, dotR, 0, 2 * Math.PI);
            ctx.fill();
            deg += sliceDeg;
        }
        ctx.restore();
    }

    /!*falling leaves effect*!/
    let wlwlLeafScene = function (el) {
        this.viewport = el;
        this.world = document.createElement('div');
        this.leaves = [];

        this.options = {
            numLeaves: 30,
            wind: {
                magnitude: 1.2,
                maxSpeed: 3,
                duration: 500,
                start: 0,
                speed: 0
            }
        };

        this.width = this.viewport.offsetWidth;
        this.height = this.viewport.offsetHeight;

        // animation helper
        this.timer = 0;

        this._resetLeaf = function (leaf) {

            // place leaf towards the top left
            leaf.x = this.width * 2 - Math.random() * this.width * 1.75;
            leaf.y = -10;
            leaf.z = Math.random() * 200;
            if (leaf.x > this.width) {
                leaf.x = this.width + 10;
                leaf.y = Math.random() * this.height / 2;
            }
            // at the start, the leaf can be anywhere
            if (this.timer == 0) {
                leaf.y = Math.random() * this.height;
            }

            // Choose axis of rotation.
            // If axis is not X, chose a random static x-rotation for greater letiability
            leaf.rotation.speed = Math.random() * 10;
            let randomAxis = Math.random();
            if (randomAxis > 0.5) {
                leaf.rotation.axis = 'X';
            } else if (randomAxis > 0.25) {
                leaf.rotation.axis = 'Y';
                leaf.rotation.x = Math.random() * 180 + 90;
            } else {
                leaf.rotation.axis = 'Z';
                leaf.rotation.x = Math.random() * 360 - 180;
                // looks weird if the rotation is too fast around this axis
                leaf.rotation.speed = Math.random() * 3;
            }

            // random speed
            leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
            leaf.ySpeed = Math.random() + 1.5;

            return leaf;
        }

        this._updateLeaf = function (leaf) {
            let leafWindSpeed = this.options.wind.speed(this.timer - this.options.wind.start, leaf.y);

            let xSpeed = leafWindSpeed + leaf.xSpeedVariation;
            leaf.x -= xSpeed;
            leaf.y += leaf.ySpeed;
            leaf.rotation.value += leaf.rotation.speed;

            let t = 'translateX( ' + leaf.x + 'px ) translateY( ' + leaf.y + 'px ) translateZ( ' + leaf.z + 'px ) ';
            if (_wlwl_get_email_params.rotate) {
                t += ' rotate' + leaf.rotation.axis + '( ' + leaf.rotation.value + 'deg )';
                if (leaf.rotation.axis !== 'X') {
                    t += ' rotateX(' + leaf.rotation.x + 'deg)';
                }
            }
            leaf.el.style.webkitTransform = t;
            leaf.el.style.MozTransform = t;
            leaf.el.style.oTransform = t;
            leaf.el.style.transform = t;

            // reset if out of view
            if (leaf.x < -10 || leaf.y > this.height + 10) {
                this._resetLeaf(leaf);
            }
        }

        this._updateWind = function () {
            // wind follows a sine curve: asin(b*time + c) + a
            // where a = wind magnitude as a function of leaf position, b = wind.duration, c = offset
            // wind duration should be related to wind magnitude, e.g. higher windspeed means longer gust duration

            if (this.timer === 0 || this.timer > (this.options.wind.start + this.options.wind.duration)) {

                this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
                this.options.wind.duration = this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
                this.options.wind.start = this.timer;

                let screenHeight = this.height;

                this.options.wind.speed = function (t, y) {
                    // should go from full wind speed at the top, to 1/2 speed at the bottom, using leaf Y
                    let a = this.magnitude / 2 * (screenHeight - 2 * y / 3) / screenHeight;
                    return a * Math.sin(2 * Math.PI / this.duration * t + (3 * Math.PI / 2)) + a;
                }
            }
        }
    };

    wlwlLeafScene.prototype.init = function () {

        for (let i = 0; i < this.options.numLeaves; i++) {
            let leaf = {
                el: document.createElement('div'),
                x: 0,
                y: 0,
                z: 0,
                rotation: {
                    axis: 'X',
                    value: 0,
                    speed: 0,
                    x: 0
                },
                xSpeedVariation: 0,
                ySpeed: 0,
                path: {
                    type: 1,
                    start: 0,

                },
                image: 1
            };
            this._resetLeaf(leaf);
            this.leaves.push(leaf);
            this.world.appendChild(leaf.el);
        }

        this.world.className = 'wlwl-leaf-scene';
        this.viewport.appendChild(this.world);

        // set perspective
        this.world.style.webkitPerspective = "400px";
        this.world.style.MozPerspective = "400px";
        this.world.style.oPerspective = "400px";
        this.world.style.perspective = "400px";

        // reset window height/width on resize
        let self = this;
        window.onresize = function (event) {
            self.width = self.viewport.offsetWidth;
            self.height = self.viewport.offsetHeight;
        };
    };

    wlwlLeafScene.prototype.render = function () {
        this._updateWind();
        for (let i = 0; i < this.leaves.length; i++) {
            this._updateLeaf(this.leaves[i]);
        }

        this.timer++;

        requestAnimationFrame(this.render.bind(this));
    };
    if ($('.wlwl_lucky_wheel_content').hasClass('wlwl-background-effect-falling-leaves')) {
        let leafContainer = document.querySelector('.wlwl_lucky_wheel_content');
        let leaves = new wlwlLeafScene(leafContainer);
        leaves.init();
        leaves.render();
    }
});
*/
