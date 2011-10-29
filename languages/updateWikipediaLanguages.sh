#!/bin/sh
wget --output-document=Names.php 'http://svn.wikimedia.org/viewvc/mediawiki/trunk/phase3/languages/Names.php?view=co'
php dumpLanguagesAsJSON.php | python -mjson.tool > Names.json

cp Names.json ../js/languages.js
