jQuery(document).ready(function ($) {
    $(".acfAddressWidget").acfAddressWidget(), "undefined" != typeof acf.add_action && acf.add_action("append", function (d) {
        $(".acfAddressWidget").acfAddressWidget()
    })
});