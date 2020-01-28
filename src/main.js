
var der = ['Hafer', 'Hund', 'Geburtstag', 'Chef', 'Satz', 'Apfel', 'Vorname', 'Familienname', 'Kaffee', 'Tee', 'Zucker', 'Chili', 'Löffel', 'Verbraucher', 'Grad', 'Geschmack', 'Backofen', 'Speck', 'Kürbis', 'Würfel', 'Blumenkohl', 'Strunk', 'Inwer', 'Koriander', 'Topf', 'Arzt', 'Verwandter', 'Nachtisch', 'Neffe', 'Text', 'Film', 'Baum', 'Koffer', 'Computer', 'Lehrer', 'Zug', 'König', 'Regenschirm', 'Bus', 'Mann', 'Kollege', 'Zettel', 'Termin', 'Boxhandschuh', 'Rechtsanwalt', 'Flughafen', 'Dientswagen', 'Tag', 'Zoo', 'Schmerz', 'Durst'],
	die = ['Erdbeere', 'Patate', 'Pfeige', 'Kotelette', 'Blume', 'Mutter', 'Party', 'Addresse', 'Telefonnumer', 'Sprache', 'Milch', 'Lehrerin', 'Pfanne', 'Mischung', 'Minute', 'Geschirrspulzmaschine', 'Vorbereitungszeit', 'Backzeit', 'Hochzeit', 'Schale', 'Obstschale', 'Verwandte', 'Meinung', 'Aufgabe', 'Schüssel', 'Nichte', 'Häusreinigung', 'Woche', 'Seite', 'Tasche', 'Zeitung', 'Tochter', 'Frau', 'Ingenieurin', 'Programmierin', 'Reporterin', 'Stelle', 'Stadtführung', 'Autowerkstatt', 'Hilfe', 'Informatikerin', 'Zeit', 'Schokolade', 'Tablette'],
	das = ['Schnitzel', 'Buch', 'Fest', 'Party', 'Dutzend', 'Land', 'Mineralwasser', 'Gebäck', 'Geschirrtuch', 'Geschirr', 'Gewürz', 'Glück', 'Pech', 'Recht', 'Kino', 'Haus', 'Geschenk', 'Jahr', 'Fahrrad', 'Handy', 'Pferd', 'Kind', 'Brett', 'Hilfsverb', 'Bier', 'Formular', 'Flugzeug', 'Projekt'],
	plu = ['Verbrauchers', 'Grads', 'Minuten', 'Schwestern', 'Verwandte', 'Bäume', 'Jahren', 'Leute', 'Regenschirme', 'Hilfsverben', 'Boxhandschuhe'];

der = addArtikel('der', der);
die = addArtikel('die', die);
das = addArtikel('das', das);
plu = addArtikel('die', plu);

var namen = der.concat(die.concat(das.concat(plu)));
namen = shuffle(namen);

var l = der.length + die.length + das.length + plu.length,
	count = 0;

var richtig = 0;

folgend();

// FUNCTIONS

function addArtikel(art, x) {
	var i, l = x.length;
	for (i = 0; i < l; i++) {
		x[i] = art + ' ' + x[i]
	}
	return x;
}

function shuffle(x) {
	var i, j, l = x.length, aux;
	for (i = l - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		aux = x[i];
		x[i] = x[j];
		x[j] = aux;
	}
	return x;
}

function folgend() {
	if (count < l) {
		document.getElementById("Name").innerHTML = namen[count].slice(4);
	} else {
		document.getElementById("derButton").disabled = true;
		document.getElementById("dieButton").disabled = true;
		document.getElementById("dasButton").disabled = true;
		document.getElementById("Mark").innerHTML = 'Deine letzte Note ist ' +
			richtig + '/' + l + ' = ' + Math.floor(richtig / count * 100) + '%';
	}
}

function myFunction(artikel) {
	if (namen[count].slice(0, 3) == artikel) {
		count++;
		richtig++;
		document.getElementById("Result").style.backgroundColor = "chartreuse";
		document.getElementById("Result").innerHTML = 'Das ist richtig!';
		document.getElementById("Mark").style.backgroundColor = "gold";
		document.getElementById("Mark").innerHTML = richtig + '/' + l + ' = ' + Math.floor(richtig / count * 100) + '%';
		document.getElementById("List").style.backgroundColor = "khaki";
		document.getElementById("List").innerHTML += namen[count - 1] + ', ';
		setTimeout(folgend(), 3000);
	} else {
		count++;
		document.getElementById("Result").style.backgroundColor = "coral";
		document.getElementById("Result").innerHTML = 'Das ist falsch...';
		document.getElementById("Mark").style.backgroundColor = "gold";
		document.getElementById("Mark").innerHTML = richtig + '/' + l + ' = ' + Math.floor(richtig / count * 100) + '%';
		document.getElementById("List").style.backgroundColor = "khaki";
		document.getElementById("List").innerHTML += namen[count - 1] + ', ';
		setTimeout(folgend(), 3000);
	}
}
