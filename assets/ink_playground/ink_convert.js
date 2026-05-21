function applyFloor(r, g, b, rawR, rawG, rawB, floor) {
    const maxCh = Math.max(r, g, b);
    if (maxCh <= 0) return [floor, floor, floor];
    return [
        r <= 0 ? 0 : Math.max(floor * r / maxCh, rawR),
        g <= 0 ? 0 : Math.max(floor * g / maxCh, rawG),
        b <= 0 ? 0 : Math.max(floor * b / maxCh, rawB)
    ];
}

function calcCommon0_TeamColorHueDark(r, g, b) {
    const raw = [
        0.01818252 + -0.08109914 * b + -0.09773391 * g + 0.25712399 * r + 0.15416362 * b * b + 0.08843857 * g * b + 0.18741600 * g * g + 0.24668775 * r * b + 0.08394970 * r * g + 0.38491670 * r * r + -0.00035741 * b * b * b + -0.07557345 * g * b * b + -0.09549479 * g * g * b + -0.02284795 * g * g * g + 0.23753888 * r * b * b + -0.50348562 * r * g * b + 0.33685149 * r * g * g + -0.45793949 * r * r * b + -0.36612460 * r * r * g + 0.41225728 * r * r * r + -0.12511987 * b * b * b * b + 0.20717819 * g * b * b * b + -0.31734201 * g * g * b * b + 0.19900673 * g * g * g * b + -0.11547222 * g * g * g * g + 0.33808276 * r * b * b * b + -0.01676480 * r * g * b * b + -0.01041274 * r * g * g * b + 0.34267246 * r * g * g * g + -0.68993739 * r * r * b * b + 0.63528431 * r * r * g * b + -0.78407270 * r * r * g * g + 0.30443000 * r * r * r * b + 0.32952505 * r * r * r * g + -0.28941605 * r * r * r * r,
        0.02225978 + -0.08865159 * b + 0.23988551 * g + -0.09110510 * r + 0.14535860 * b * b + 0.26871827 * g * b + 0.25876158 * g * g + 0.10506172 * r * b + 0.24092479 * r * g + 0.14502179 * r * r + 0.01695317 * b * b * b + 0.24101459 * g * b * b + -0.43915480 * g * g * b + 0.54086554 * g * g * g + -0.08708135 * r * b * b + -0.57147313 * r * g * b + -0.41032559 * r * g * g + -0.09028250 * r * r * b + 0.24957415 * r * r * g + 0.02225503 * r * r * r + -0.13025570 * b * b * b * b + 0.34451130 * g * b * b * b + -0.70116903 * g * g * b * b + 0.27383229 * g * g * g * b + -0.31093388 * g * g * g * g + 0.19257067 * r * b * b * b + -0.01518100 * r * g * b * b + 0.69019136 * r * g * g * b + 0.27095116 * r * g * g * g + -0.29577999 * r * r * b * b + -0.01130407 * r * r * g * b + -0.71634097 * r * r * g * g + 0.18982039 * r * r * r * b + 0.34691823 * r * r * r * g + -0.13198549 * r * r * r * r,
        0.02245795 + 0.25811501 * b + -0.11959242 * g + -0.09868371 * r + 0.43086505 * b * b + 0.07139621 * g * b + 0.22831115 * g * g + 0.21067508 * r * b + 0.14877020 * r * g + 0.17174027 * r * r + 0.37866234 * b * b * b + -0.39891609 * g * b * b + 0.35344676 * g * g * b + -0.05502153 * g * g * g + -0.44997222 * r * b * b + -0.46811186 * r * g * b + -0.16353778 * r * g * g + 0.24431321 * r * r * b + -0.11525789 * r * r * g + -0.00367309 * r * r * r + -0.28747568 * b * b * b * b + 0.35021319 * g * b * b * b + -0.77628175 * g * g * b * b + 0.33312875 * g * g * g * b + -0.10656118 * g * g * g * g + 0.32110358 * r * b * b * b + 0.61467084 * r * g * b * b + -0.01909812 * r * g * g * b + 0.22646841 * r * g * g * g + -0.70383892 * r * r * b * b + -0.01155852 * r * r * g * b + -0.29885496 * r * r * g * g + 0.34060922 * r * r * r * b + 0.21178831 * r * r * r * g + -0.12525558 * r * r * r * r
    ];
    return applyFloor(r, g, b, raw[0], raw[1], raw[2], 0.20000000298023224);
}

function calcCommon1_TeamColorHueDark(r, g, b) {
    const raw = [
        -0.04442569 + 0.08265919 * b + 0.03969665 * g + 0.31943309 * r + 0.19434118 * b * b + -0.31326664 * g * b + 0.29573059 * g * g + 0.03339684 * r * b + -0.08274906 * r * g + 1.02548703 * r * r + -0.25529780 * b * b * b + 0.10128221 * g * b * b + 0.01919443 * g * g * b + -0.32457273 * g * g * g + 0.33097746 * r * b * b + 0.15506313 * r * g * b + 0.36854902 * r * g * g + -0.66902948 * r * r * b + -0.56714425 * r * r * g + -0.42019180 * r * r * r + 0.00435101 * b * b * b * b + 0.20739128 * g * b * b * b + -0.32380498 * g * g * b * b + 0.23523280 * g * g * g * b + 0.01919772 * g * g * g * g + 0.27672559 * r * b * b * b + -0.20635425 * r * g * b * b + -0.18341324 * r * g * g * b + 0.30303948 * r * g * g * g + -0.56171283 * r * r * b * b + 0.41673006 * r * r * g * b + -0.64484378 * r * r * g * g + 0.49597843 * r * r * r * b + 0.50207232 * r * r * r * g + -0.02924783 * r * r * r * r,
        -0.04786659 + 0.08866560 * b + 0.29170924 * g + 0.08151938 * r + 0.19530570 * b * b + 0.04670404 * g * b + 0.98204919 * g * g + -0.35670878 * r * b + 0.02944878 * r * g + 0.20756808 * r * r + -0.25833581 * b * b * b + 0.34317258 * g * b * b + -0.68881931 * g * g * b + -0.34727477 * g * g * g + 0.09861375 * r * b * b + 0.14484698 * r * g * b + -0.66425528 * r * g * g + 0.08584243 * r * r * b + 0.34110711 * r * r * g + -0.26252327 * r * r * r + 0.00449303 * b * b * b * b + 0.28370960 * g * b * b * b + -0.57373535 * g * g * b * b + 0.49341913 * g * g * g * b + -0.05001885 * g * g * g * g + 0.20622852 * r * b * b * b + -0.21808261 * r * g * b * b + 0.46651032 * r * g * g * b + 0.48947831 * r * g * g * g + -0.31811488 * r * r * b * b + -0.21176348 * r * r * g * b + -0.58547840 * r * r * g * g + 0.20923936 * r * r * r * b + 0.28954253 * r * r * r * g + 0.00430643 * r * r * r * r,
        -0.04261732 + 0.32995473 * b + 0.02958369 * g + 0.06736220 * r + 1.04604681 * b * b + -0.10938518 * g * b + 0.31505187 * g * g + -0.00464920 * r * b + -0.26721421 * r * g + 0.21641254 * r * r + -0.44332246 * b * b * b + -0.57377043 * g * b * b + 0.39232044 * g * g * b + -0.34066656 * g * g * g + -0.64277847 * r * b * b + 0.18960281 * r * g * b + -0.02609377 * r * g * g + 0.33434472 * r * r * b + 0.06122933 * r * r * g + -0.26390545 * r * r * r + -0.02497672 * b * b * b * b + 0.51228178 * g * b * b * b + -0.64315539 * g * g * b * b + 0.29258828 * g * g * g * b + 0.02423346 * g * g * g * g + 0.50139094 * r * b * b * b + 0.39394133 * r * g * b * b + -0.19242400 * r * g * g * b + 0.25208273 * r * g * g * g + -0.57613469 * r * r * b * b + -0.20040747 * r * r * g * b + -0.30810071 * r * r * g * g + 0.28146463 * r * r * r * b + 0.21514002 * r * r * r * g + 0.00504550 * r * r * r * r
    ];
    return applyFloor(r, g, b, raw[0], raw[1], raw[2], 0.009999999776482582);
}

function calcCommon0_TeamColorHueBright(r, g, b) {
    const raw = [
        -0.00066899 + -0.03857693 * b + -0.05291232 * g + 0.41377112 * r + 0.17327888 * b * b + 0.00105179 * g * b + 0.20421747 * g * g + 0.18449427 * r * b + 0.10068743 * r * g + 0.52174669 * r * r + -0.09237169 * b * b * b + -0.06650107 * g * b * b + -0.09039243 * g * g * b + -0.11211003 * g * g * g + 0.17127613 * r * b * b + -0.22793505 * r * g * b + 0.21682323 * r * g * g + -0.48386085 * r * r * b + -0.42866534 * r * r * g + 0.10350939 * r * r * r + -0.06280995 * b * b * b * b + 0.18127060 * g * b * b * b + -0.22556856 * g * g * b * b + 0.18377779 * g * g * g * b + -0.05744380 * g * g * g * g + 0.25415113 * r * b * b * b + -0.05908868 * r * g * b * b + -0.05212675 * r * g * g * b + 0.26068941 * r * g * g * g + -0.47986357 * r * r * b * b + 0.44605067 * r * r * g * b + -0.53225114 * r * r * g * g + 0.31820082 * r * r * r * b + 0.32870241 * r * r * r * g + -0.18273820 * r * r * r * r,
        0.00148268 + -0.04364878 * b + 0.40177514 * g + -0.04506337 * r + 0.16901973 * b * b + 0.20127438 * g * b + 0.45709615 * g * g + 0.00820954 * r * b + 0.18720876 * r * g + 0.16892835 * r * r + -0.08018374 * b * b * b + 0.17113958 * g * b * b + -0.47960688 * g * g * b + 0.17925151 * g * g * g + -0.07717227 * r * b * b + -0.26714951 * r * g * b + -0.46461118 * r * g * g + -0.07932285 * r * r * b + 0.17527341 * r * r * g + -0.07703762 * r * r * r + -0.06784807 * b * b * b * b + 0.25779900 * g * b * b * b + -0.48541823 * g * g * b * b + 0.30360568 * g * g * g * b + -0.20007420 * g * g * g * g + 0.17564913 * r * b * b * b + -0.05673476 * r * g * b * b + 0.47897559 * r * g * g * b + 0.30201604 * r * g * g * g + -0.21375484 * r * r * b * b + -0.05450839 * r * r * g * b + -0.49329012 * r * r * g * g + 0.17444181 * r * r * r * b + 0.25912235 * r * r * r * g + -0.06906321 * r * r * r * r,
        0.00190871 + 0.41527786 * b + -0.06571989 * g + -0.04968300 * r + 0.54319012 * b * b + 0.09325418 * g * b + 0.22718261 * g * g + 0.16638810 * r * b + 0.03786430 * r * g + 0.18441358 * r * r + 0.08562811 * b * b * b + -0.44160742 * g * b * b + 0.22489252 * g * g * b + -0.12961679 * g * g * g + -0.47638205 * r * b * b + -0.21231364 * r * g * b + -0.12950560 * r * g * g + 0.17257650 * r * r * b + -0.09190784 * r * r * g + -0.09381219 * r * r * r + -0.18056368 * b * b * b * b + 0.33800407 * g * b * b * b + -0.52908262 * g * g * b * b + 0.25607570 * g * g * g * b + -0.05264739 * g * g * g * g + 0.32531388 * r * b * b * b + 0.43424779 * r * g * b * b + -0.05524530 * r * g * g * b + 0.19860904 * r * g * g * g + -0.48727807 * r * r * b * b + -0.05452691 * r * r * g * b + -0.21406135 * r * r * g * g + 0.25619515 * r * r * r * b + 0.18460814 * r * r * r * g + -0.06353355 * r * r * r * r
    ];
    return applyFloor(r, g, b, raw[0], raw[1], raw[2], 0.20000000298023224);
}

function calcCommon2_TeamColorHueBright(r, g, b) {
    const raw = [
        -0.01434407 + 0.00988400 * b + 0.00041426 * g + 0.55658004 * r + 0.16086788 * b * b + -0.12101386 * g * b + 0.18203700 * g * g + 0.11233011 * r * b + 0.07145445 * r * g + 0.68655358 * r * r + -0.17565757 * b * b * b + 0.00305258 * g * b * b + -0.01716305 * g * g * b + -0.18768292 * g * g * g + 0.12186809 * r * b * b + 0.01868186 * r * g * b + 0.14107205 * r * g * g + -0.46413193 * r * r * b + -0.43031245 * r * r * g + -0.31628202 * r * r * r + 0.01108098 * b * b * b * b + 0.12775910 * g * b * b * b + -0.15909030 * g * g * b * b + 0.13366001 * g * g * g * b + 0.01273332 * g * g * g * g + 0.16586059 * r * b * b * b + -0.09491705 * r * g * b * b + -0.08942562 * r * g * g * b + 0.17092095 * r * g * g * g + -0.28324225 * r * r * b * b + 0.26214188 * r * r * g * b + -0.31062653 * r * r * g * g + 0.30513144 * r * r * r * b + 0.30670425 * r * r * r * g + 0.00494249 * r * r * r * r,
        -0.01349237 + 0.00613403 * b + 0.54424472 * g + 0.00467890 * r + 0.16711836 * b * b + 0.12534905 * g * b + 0.67369652 * g * g + -0.11995258 * r * b + 0.11912737 * r * g + 0.16884819 * r * r + -0.17904444 * b * b * b + 0.11912549 * g * b * b + -0.47419283 * g * g * b + -0.29090915 * g * g * g + -0.00662114 * r * b * b + 0.00250092 * r * g * b + -0.46623944 * r * g * g + -0.00951755 * r * r * b + 0.11990191 * r * r * g + -0.17840211 * r * r * r + 0.01136256 * b * b * b * b + 0.16952281 * g * b * b * b + -0.28524120 * g * g * b * b + 0.30443181 * g * g * g * b + -0.00297344 * g * g * g * g + 0.12917780 * r * b * b * b + -0.09482842 * r * g * b * b + 0.28065726 * r * g * g * b + 0.30317870 * r * g * g * g + -0.15383815 * r * r * b * b + -0.09318093 * r * r * g * b + -0.28914809 * r * r * g * g + 0.12955110 * r * r * r * b + 0.17072889 * r * r * r * g + 0.01069020 * r * r * r * r,
        -0.01457793 + 0.56170243 * b + -0.00030515 * g + 0.00859212 * r + 0.69172473 * b * b + 0.05910569 * g * b + 0.18519102 * g * g + 0.09517088 * r * b + -0.11256162 * r * g + 0.16209805 * r * r + -0.32364524 * b * b * b + -0.43010735 * g * b * b + 0.15148072 * g * g * b + -0.19122748 * g * g * g + -0.45316163 * r * b * b + 0.03469582 * r * g * b + -0.02749171 * r * g * g + 0.12794427 * r * r * b + -0.00423781 * r * r * g + -0.17430895 * r * r * r + 0.00656184 * b * b * b * b + 0.30954971 * g * b * b * b + -0.31097343 * g * g * b * b + 0.16693652 * g * g * g * b + 0.01403646 * g * g * g * g + 0.30640915 * r * b * b * b + 0.25372593 * r * g * b * b + -0.09375733 * r * g * g * b + 0.13806596 * r * g * g * g + -0.28899819 * r * r * b * b + -0.09503931 * r * r * g * b + -0.15562004 * r * r * g * g + 0.16576085 * r * r * r * b + 0.12860197 * r * r * r * g + 0.01023065 * r * r * r * r
    ];
    return applyFloor(r, g, b, raw[0], raw[1], raw[2], 0.05000000074505806);
}

function convertInk0Day_TeamColorHueDark(r, g, b) { return calcCommon0_TeamColorHueDark(r, g, b); }

function convertInk0Day_TeamColorHueBright(r, g, b) { return calcCommon0_TeamColorHueBright(r, g, b); }

function convertInk0Night_TeamColorHueDark(r, g, b) { return calcCommon1_TeamColorHueDark(r, g, b); }

function convertInk0Night_TeamColorHueBright(r, g, b) {
    const raw = [
        -0.02146215 + 0.01476428 * b + 0.00038956 * g + 0.83462745 * r + 0.24125367 * b * b + -0.18128358 * g * b + 0.27344790 * g * g + 0.16874112 * r * b + 0.10768367 * r * g + 1.03024869 * r * r + -0.26338357 * b * b * b + 0.00453309 * g * b * b + -0.02600020 * g * g * b + -0.28182312 * g * g * g + 0.18275483 * r * b * b + 0.02770014 * r * g * b + 0.21119502 * r * g * g + -0.69646677 * r * r * b + -0.64589184 * r * r * g + -0.47474431 * r * r * r + 0.01658119 * b * b * b * b + 0.19162006 * g * b * b * b + -0.23859560 * g * g * b * b + 0.20057891 * g * g * g * b + 0.01918531 * g * g * g * g + 0.24877190 * r * b * b * b + -0.14232584 * r * g * b * b + -0.13401728 * r * g * g * b + 0.25650433 * r * g * g * g + -0.42482195 * r * r * b * b + 0.39333634 * r * r * g * b + -0.46580296 * r * r * g * g + 0.45779139 * r * r * r * b + 0.46018410 * r * r * r * g + 0.00750593 * r * r * r * r,
        -0.02023856 + 0.00920105 * b + 0.81636710 * g + 0.00701835 * r + 0.25067753 * b * b + 0.18802354 * g * b + 1.01054474 * g * g + -0.17992888 * r * b + 0.17869105 * r * g + 0.25327229 * r * r + -0.26856664 * b * b * b + 0.17868826 * g * b * b + -0.71128922 * g * g * b + -0.43636369 * g * g * g + -0.00993171 * r * b * b + 0.00375138 * r * g * b + -0.69935915 * r * g * g + -0.01427632 * r * r * b + 0.17985288 * r * r * g + -0.26760317 * r * r * r + 0.01704383 * b * b * b * b + 0.25428420 * g * b * b * b + -0.42786181 * g * g * b * b + 0.45664770 * g * g * g * b + -0.00446018 * g * g * g * g + 0.19376670 * r * b * b * b + -0.14224263 * r * g * b * b + 0.42098590 * r * g * g * b + 0.45476804 * r * g * g * g + -0.23075723 * r * r * b * b + -0.13977140 * r * r * g * b + -0.43372214 * r * r * g * g + 0.19432665 * r * r * r * b + 0.25609332 * r * r * r * g + 0.01603530 * r * r * r * r,
        -0.02186689 + 0.84255365 * b + -0.00045773 * g + 0.01288817 * r + 1.03758707 * b * b + 0.08865853 * g * b + 0.27778653 * g * g + 0.14275633 * r * b + -0.16884242 * r * g + 0.24314711 * r * r + -0.48546784 * b * b * b + -0.64516100 * g * b * b + 0.22722106 * g * g * b + -0.28684120 * g * g * g + -0.67974244 * r * b * b + 0.05204374 * r * g * b + -0.04123760 * r * g * g + 0.19191639 * r * r * b + -0.00635670 * r * r * g + -0.26146347 * r * r * r + 0.00984276 * b * b * b * b + 0.46432455 * g * b * b * b + -0.46646014 * g * g * b * b + 0.25040480 * g * g * g * b + 0.02105467 * g * g * g * g + 0.45961373 * r * b * b * b + 0.38058888 * r * g * b * b + -0.14063600 * r * g * g * b + 0.20709897 * r * g * g * g + -0.43349729 * r * r * b * b + -0.14255897 * r * r * g * b + -0.23343006 * r * r * g * g + 0.24864128 * r * r * r * b + 0.19290296 * r * r * r * g + 0.01534599 * r * r * r * r
    ];
    return applyFloor(r, g, b, raw[0], raw[1], raw[2], 0.07500000298023224);
}

function convertInk2Day_TeamColorHueDark(r, g, b) { return calcCommon0_TeamColorHueDark(r, g, b); }

function convertInk2Day_TeamColorHueBright(r, g, b) { return calcCommon0_TeamColorHueBright(r, g, b); }

function convertInk2Night_TeamColorHueDark(r, g, b) { return calcCommon1_TeamColorHueDark(r, g, b); }

function convertInk2Night_TeamColorHueBright(r, g, b) { return calcCommon2_TeamColorHueBright(r, g, b); }

function convertInk3Day_TeamColorHueDark(r, g, b) { return calcCommon0_TeamColorHueDark(r, g, b); }

function convertInk3Day_TeamColorHueBright(r, g, b) { return calcCommon0_TeamColorHueBright(r, g, b); }

function convertInk3Night_TeamColorHueDark(r, g, b) { return calcCommon1_TeamColorHueDark(r, g, b); }

function convertInk3Night_TeamColorHueBright(r, g, b) {
    const raw = [
        -0.01153376 + 0.00801710 * b + 0.00056608 * g + 0.44550942 * r + 0.12864461 * b * b + -0.09711248 * g * b + 0.14524704 * g * g + 0.08955218 * r * b + 0.05667445 * r * g + 0.54883519 * r * r + -0.14055496 * b * b * b + 0.00257254 * g * b * b + -0.01344503 * g * g * b + -0.14986192 * g * g * g + 0.09762853 * r * b * b + 0.01530546 * r * g * b + 0.11325079 * r * g * g + -0.37100559 * r * r * b + -0.34384724 * r * r * g + -0.25271964 * r * r * r + 0.00888620 * b * b * b * b + 0.10219563 * g * b * b * b + -0.12733335 * g * g * b * b + 0.10683559 * g * g * g * b + 0.01010670 * g * g * g * g + 0.13267658 * r * b * b * b + -0.07600991 * r * g * b * b + -0.07166644 * r * g * g * b + 0.13662164 * r * g * g * g + -0.22665737 * r * r * b * b + 0.20958508 * r * r * g * b + -0.24862942 * r * r * g * g + 0.24400721 * r * r * r * b + 0.24524376 * r * r * r * g + 0.00386754 * r * r * r * r,
        -0.01079390 + 0.00490723 * b + 0.43539581 * g + 0.00374313 * r + 0.13369468 * b * b + 0.10027925 * g * b + 0.53895711 * g * g + -0.09596208 * r * b + 0.09530190 * r * g + 0.13507854 * r * r + -0.14323553 * b * b * b + 0.09530037 * g * b * b + -0.37935428 * g * g * b + -0.23272714 * g * g * g + -0.00529690 * r * b * b + 0.00200075 * r * g * b + -0.37299156 * r * g * g + -0.00761403 * r * r * b + 0.09592152 * r * r * g + -0.14272167 * r * r * r + 0.00909003 * b * b * b * b + 0.13561826 * g * b * b * b + -0.22819296 * g * g * b * b + 0.24354545 * g * g * g * b + -0.00237885 * g * g * g * g + 0.10334224 * r * b * b * b + -0.07586274 * r * g * b * b + 0.22452581 * r * g * g * b + 0.24254296 * r * g * g * g + -0.12307052 * r * r * b * b + -0.07454476 * r * r * g * b + -0.23131848 * r * r * g * g + 0.10364087 * r * r * r * b + 0.13658311 * r * r * r * g + 0.00855215 * r * r * r * r,
        -0.01166234 + 0.44936198 * b + -0.00024413 * g + 0.00687370 * r + 0.55337967 * b * b + 0.04728455 * g * b + 0.14815283 * g * g + 0.07613668 * r * b + -0.09004929 * r * g + 0.12967844 * r * r + -0.25891601 * b * b * b + -0.34408588 * g * b * b + 0.12118457 * g * g * b + -0.15298200 * g * g * g + -0.36252929 * r * b * b + 0.02775666 * r * g * b + -0.02199338 * r * g * g + 0.10235546 * r * r * b + -0.00339024 * r * r * g + -0.13944717 * r * r * r + 0.00524938 * b * b * b * b + 0.24763977 * g * b * b * b + -0.24877875 * g * g * b * b + 0.13354923 * g * g * g * b + 0.01122917 * g * g * g * g + 0.24512733 * r * b * b * b + 0.20298075 * r * g * b * b + -0.07500587 * r * g * g * b + 0.11045278 * r * g * g * g + -0.23119858 * r * r * b * b + -0.07603145 * r * r * g * b + -0.12449603 * r * r * g * g + 0.13260866 * r * r * r * b + 0.10288158 * r * r * r * g + 0.00818452 * r * r * r * r
    ];
    return applyFloor(r, g, b, raw[0], raw[1], raw[2], 0.04000000283122063);
}

function convertInk4Day_TeamColorHueDark(r, g, b) { return calcCommon0_TeamColorHueDark(r, g, b); }

function convertInk4Day_TeamColorHueBright(r, g, b) { return calcCommon0_TeamColorHueBright(r, g, b); }

function convertInk4Night_TeamColorHueDark(r, g, b) { return calcCommon1_TeamColorHueDark(r, g, b); }

function convertInk4Night_TeamColorHueBright(r, g, b) { return calcCommon2_TeamColorHueBright(r, g, b); }

function convertInk5Day_TeamColorHueDark(r, g, b) { return calcCommon0_TeamColorHueDark(r, g, b); }

function convertInk5Day_TeamColorHueBright(r, g, b) { return calcCommon0_TeamColorHueBright(r, g, b); }

function convertInk5Night_TeamColorHueDark(r, g, b) { return calcCommon1_TeamColorHueDark(r, g, b); }

function convertInk5Night_TeamColorHueBright(r, g, b) {
    const raw = [
        -0.01575495 + 0.01084194 * b + 0.00035603 * g + 0.61213379 * r + 0.17694156 * b * b + -0.13300783 * g * b + 0.20040805 * g * g + 0.12367446 * r * b + 0.07881396 * r * g + 0.75538733 * r * r + -0.19318435 * b * b * b + 0.00333099 * g * b * b + -0.01899174 * g * g * b + -0.20657798 * g * g * g + 0.13402720 * r * b * b + 0.02040821 * r * g * b + 0.15500400 * r * g * g + -0.51066332 * r * r * b + -0.47352326 * r * r * g + -0.34804655 * r * r * r + 0.01217289 * b * b * b * b + 0.14052948 * g * b * b * b + -0.17498032 * g * g * b * b + 0.14706448 * g * g * g * b + 0.01404273 * g * g * g * g + 0.18244100 * r * b * b * b + -0.10438503 * r * g * b * b + -0.09831575 * r * g * g * b + 0.18806502 * r * g * g * g + -0.31154671 * r * r * b * b + 0.28840952 * r * r * g * b + -0.34163133 * r * r * g * g + 0.33568536 * r * r * r * b + 0.33742870 * r * r * r * g + 0.00547573 * r * r * r * r,
        -0.01484161 + 0.00674743 * b + 0.59866921 * g + 0.00514679 * r + 0.18383020 * b * b + 0.13788395 * g * b + 0.74106620 * g * g + -0.13194785 * r * b + 0.13104010 * r * g + 0.18573301 * r * r + -0.19694888 * b * b * b + 0.13103806 * g * b * b + -0.52161213 * g * g * b + -0.32000010 * g * g * g + -0.00728325 * r * b * b + 0.00275100 * r * g * b + -0.51286338 * r * g * g + -0.01046931 * r * r * b + 0.13189212 * r * r * g + -0.19624232 * r * r * r + 0.01249881 * b * b * b * b + 0.18647509 * g * b * b * b + -0.31376534 * g * g * b * b + 0.33487501 * g * g * g * b + -0.00327077 * g * g * g * g + 0.14209558 * r * b * b * b + -0.10431126 * r * g * b * b + 0.30872301 * r * g * g * b + 0.33349657 * r * g * g * g + -0.16922197 * r * r * b * b + -0.10249903 * r * r * g * b + -0.31806292 * r * r * g * g + 0.14250621 * r * r * r * b + 0.18780178 * r * r * r * g + 0.01175921 * r * r * r * r,
        -0.01603572 + 0.61787268 * b + -0.00033567 * g + 0.00945133 * r + 0.76089724 * b * b + 0.06501625 * g * b + 0.20371013 * g * g + 0.10468797 * r * b + -0.12381779 * r * g + 0.17830787 * r * r + -0.35600981 * b * b * b + -0.47311807 * g * b * b + 0.16662881 * g * g * b + -0.21035023 * g * g * g + -0.49847781 * r * b * b + 0.03816539 * r * g * b + -0.03024088 * r * g * g + 0.14073872 * r * r * b + -0.00466158 * r * r * g + -0.19173986 * r * r * r + 0.00721805 * b * b * b * b + 0.34050468 * g * b * b * b + -0.34207079 * g * g * b * b + 0.18363017 * g * g * g * b + 0.01544011 * g * g * g * g + 0.33705008 * r * b * b * b + 0.27909853 * r * g * b * b + -0.10313306 * r * g * g * b + 0.15187257 * r * g * g * g + -0.31789803 * r * r * b * b + -0.10454325 * r * r * g * b + -0.17118205 * r * r * g * g + 0.18233692 * r * r * r * b + 0.14146218 * r * r * r * g + 0.01125372 * r * r * r * r
    ];
    return applyFloor(r, g, b, raw[0], raw[1], raw[2], 0.055000003427267075);
}

function convertInk6Day_TeamColorHueDark(r, g, b) { return calcCommon0_TeamColorHueDark(r, g, b); }

function convertInk6Day_TeamColorHueBright(r, g, b) { return calcCommon0_TeamColorHueBright(r, g, b); }

function convertInk6Night_TeamColorHueDark(r, g, b) { return calcCommon1_TeamColorHueDark(r, g, b); }

function convertInk6Night_TeamColorHueBright(r, g, b) { return calcCommon2_TeamColorHueBright(r, g, b); }

function convertInk7Day_TeamColorHueDark(r, g, b) { return calcCommon0_TeamColorHueDark(r, g, b); }

function convertInk7Day_TeamColorHueBright(r, g, b) { return calcCommon0_TeamColorHueBright(r, g, b); }

function convertInk7Night_TeamColorHueDark(r, g, b) { return calcCommon1_TeamColorHueDark(r, g, b); }

function convertInk7Night_TeamColorHueBright(r, g, b) { return calcCommon2_TeamColorHueBright(r, g, b); }

function convertInk8Day_TeamColorHueDark(r, g, b) { return calcCommon0_TeamColorHueDark(r, g, b); }

function convertInk8Day_TeamColorHueBright(r, g, b) { return calcCommon0_TeamColorHueBright(r, g, b); }

function convertInk8Night_TeamColorHueDark(r, g, b) { return calcCommon1_TeamColorHueDark(r, g, b); }

function convertInk8Night_TeamColorHueBright(r, g, b) { return calcCommon2_TeamColorHueBright(r, g, b); }

function convertInk9Day_TeamColorHueDark(r, g, b) { return calcCommon0_TeamColorHueDark(r, g, b); }

function convertInk9Day_TeamColorHueBright(r, g, b) { return calcCommon0_TeamColorHueBright(r, g, b); }

function convertInk9Night_TeamColorHueDark(r, g, b) { return calcCommon1_TeamColorHueDark(r, g, b); }

function convertInk9Night_TeamColorHueBright(r, g, b) { return calcCommon2_TeamColorHueBright(r, g, b); }
