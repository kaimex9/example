function nurses() {
    $jsonData = [{"user":"Emmeline","password":"iM5}~tp/"},
    {"user":"Susana","password":"wP7@bQp@|S~HlhI"},
    {"user":"Aharon","password":"zE4)U\'ptR"},
    {"user":"Ardath","password":"eE3/}$}Fh5"},
    {"user":"Cyrill","password":"pQ7?\'1+$<l"}];
    
    return json_decode($jsonData, true); // Corrección aquí
}