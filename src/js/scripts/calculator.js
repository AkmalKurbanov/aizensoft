 $(document).ready(function () {
   $('.calculate__col').addClass('disabled');
   $('.type-site').removeClass('disabled');


   var totalTerm;


   $('.type-site .calculate__item').on('click', function () {
     if ($(this).hasClass('active'))
       return false;
     $('.type-site .calculate__item').not(this).removeClass('active');
     $(this).addClass('active');
     $('.design').removeClass('disabled');
     $('.design .calculate__item').not(this).removeClass('active');
     $('.page-proofs .calculate__item').not(this).removeClass('active');
     $('.cms .calculate__item').not(this).removeClass('active');
     $('.page-proofs').addClass('disabled');
     $('.cms').addClass('disabled');
     let typeSite = $(this).find('.calculate__title').text();
     $('.site-type').addClass('active');
     $('.site-type .total__info-title span').text(typeSite);
     let individualPrice = +$(this).find('.calculate__individual .price').text();
     let individualTerm = +$(this).find('.calculate__individual .term').text();
     let uniquePrice = +$(this).find('.calculate__unique .price').text();
     let uniqueTerm = +$(this).find('.calculate__unique .term').text();
     let inStockPrice = +$(this).find('.calculate__in-stock .price').text();
     let inStockTerm = +$(this).find('.calculate__in-stock .term').text();
     let pageProofsPrice = +$(this).find('.calculate__page-proofs .price').text();
     let pageProofsTerm = +$(this).find('.calculate__page-proofs .term').text();
     let magentoPrice = +$(this).find('.calculate__magento .price').text();
     let magentoTerm = +$(this).find('.calculate__magento .term').text();
     let wordpressPrice = +$(this).find('.calculate__wordpress .price').text();
     let wordpressTerm = +$(this).find('.calculate__wordpress .term').text();
     $('.calculate__item--individual').attr('data-price', individualPrice);
     $('.calculate__item--individual').attr('data-term', individualTerm);
     $('.calculate__item--unique').attr('data-price', uniquePrice);
     $('.calculate__item--unique').attr('data-term', uniqueTerm);
     $('.calculate__item--in-stock').attr('data-price', inStockPrice);
     $('.calculate__item--in-stock').attr('data-term', inStockTerm);
     $('.calculate__col.page-proofs .calculate__item').attr('data-price', pageProofsPrice);
     $('.calculate__col.page-proofs .calculate__item').attr('data-term', pageProofsTerm);
     $('.calculate__item--magento').attr('data-price', magentoPrice);
     $('.calculate__item--magento').attr('data-term', magentoTerm);
     $('.calculate__item--wordpress').attr('data-price', wordpressPrice);
     $('.calculate__item--wordpress').attr('data-term', wordpressTerm);

     $('.site-page-proofs.total__item, .site-cms.total__item, .site-design.total__item').removeClass('active');
     $('.total__info-price span').text('0');
     $('.site-design.total__item .total__info-title span, .site-page-proofs.total__item .total__info-title span, .site-cms.total__item .total__info-title span').text($('.not-chosen').text());

     $('.total__cost span, .total__term span').text('0');

   });

   $('.design .calculate__item').on('click', function () {
     if ($(this).hasClass('active'))
       return false;

     $('.page-proofs').removeClass('disabled');
     $('.cms').addClass('disabled');
     $('.cms .calculate__item').removeClass('active');
     $('.design .calculate__item, .page-proofs .calculate__item').not(this).removeClass('active');
     $(this).addClass('active');
     let design = $(this).find('.calculate__title').text();
     $('.site-design').addClass('active');
     $('.site-design .total__info-title span').text(design);
     $('.site-design .total__info-price span').text(+$(this).attr('data-price'));
     if ($('.page-proofs .calculate__item').hasClass('active')) {
       $('.total__result .total__cost span').text(parseInt($(this).attr('data-price')) + parseInt($('.page-proofs .calculate__item').attr('data-price')));
       $('.total__result .total__term span').text(parseInt($(this).attr('data-term')) + parseInt($('.page-proofs .calculate__item').attr('data-term')));
     } else {
       $('.total__result .total__cost span').text(parseInt($(this).attr('data-price')));
       $('.total__result .total__term span').text(parseInt($(this).attr('data-term')));
     }


     $('.site-page-proofs.total__item, .site-cms.total__item').removeClass('active');
     $('.site-page-proofs.total__item .total__info-price span, .site-cms.total__item .total__info-price span').text('0');
     $('.site-page-proofs.total__item .total__info-title span, .site-cms.total__item .total__info-title span').text($('.not-chosen').text());


   });

   $('.page-proofs .calculate__item').on('click', function () {
     if ($(this).hasClass('active'))
       return false;
     $('.page-proofs .calculate__item').not(this).removeClass('active');
     $(this).addClass('active');
     $('.cms').removeClass('disabled');
     let pageProofs = $(this).find('.calculate__title').text();
     $('.site-page-proofs').addClass('active');
     $('.site-page-proofs .total__info-title span').text(pageProofs);
     $('.site-page-proofs .total__info-price span').text(parseInt($(this).attr('data-price')));
     $('.total__result .total__cost span').text(parseInt($(this).attr('data-price')) + parseInt($('.design .calculate__item.active').attr('data-price')));
     $('.total__result .total__term span').text(parseInt($(this).attr('data-term')) + parseInt($('.design .calculate__item.active').attr('data-term')));

   });


   $('.cms .calculate__item').on('click', function () {
     if ($(this).hasClass('active'))
       return false;
     $('.cms .calculate__item').not(this).removeClass('active');
     $(this).addClass('active');
     $('.site-cms').addClass('active');
     let cms = $(this).find('.calculate__title').text();
     $('.site-cms').addClass('active');
     $('.site-cms .total__info-title span').text(cms);
     $('.site-cms .total__info-price span').text($(this).attr('data-price'));
     $('.total__result .total__cost span').text(parseInt($(this).attr('data-price')) + parseInt($('.design .calculate__item.active').attr('data-price')) + parseInt($('.page-proofs .calculate__item.active').attr('data-price')));
     $('.total__result .total__term span').text(parseInt($(this).attr('data-term')) + parseInt($('.design .calculate__item.active').attr('data-term')) + parseInt($('.page-proofs .calculate__item.active').attr('data-term')));

   });


   $('.total__reset').on('click', function () {
     $('.total__cost span, .total__term span, .total__info-price span').text('0');
     $('.total__info-title span').text($('.not-chosen').text());
     $('.total__item, .calculate__item').removeClass('active');
     $('.calculate__col').not('.calculate__col.type-site').addClass('disabled');
   });


 });