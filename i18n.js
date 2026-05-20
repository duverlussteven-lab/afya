// ═══════════════════════════════════════════════════════════════
// I18N.JS — Système de traduction automatique pour AFYA
// 5 langues : EN, FR, ES, IT, DE
// Usage : <script src="i18n.js" defer></script>
// ═══════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════
  // 1) DICTIONNAIRE DE TRADUCTIONS
  // ═══════════════════════════════════════════════════════════
  // Format : chaque clé = texte anglais original, valeur = traductions
  
  const TRANSLATIONS = {
    // NAVIGATION
    'Plan': { fr: 'Planifier', es: 'Planificar', it: 'Pianifica', de: 'Planen' },
    'Activities': { fr: 'Activités', es: 'Actividades', it: 'Attività', de: 'Aktivitäten' },
    'Restaurants': { fr: 'Restaurants', es: 'Restaurantes', it: 'Ristoranti', de: 'Restaurants' },
    'Reviews': { fr: 'Avis', es: 'Reseñas', it: 'Recensioni', de: 'Bewertungen' },
    'Features': { fr: 'Fonctionnalités', es: 'Funciones', it: 'Funzionalità', de: 'Funktionen' },
    'Sign In': { fr: 'Connexion', es: 'Iniciar sesión', it: 'Accedi', de: 'Anmelden' },
    'Sign Up': { fr: 'Inscription', es: 'Registrarse', it: 'Registrati', de: 'Registrieren' },
    'Sign Out': { fr: 'Déconnexion', es: 'Cerrar sesión', it: 'Esci', de: 'Abmelden' },
    'My Space': { fr: 'Mon espace', es: 'Mi espacio', it: 'Il mio spazio', de: 'Mein Bereich' },
    'Settings': { fr: 'Paramètres', es: 'Ajustes', it: 'Impostazioni', de: 'Einstellungen' },
    'Admin Panel': { fr: 'Panneau admin', es: 'Panel admin', it: 'Pannello admin', de: 'Admin-Panel' },
    'Contact': { fr: 'Contact', es: 'Contacto', it: 'Contatto', de: 'Kontakt' },
    'Mark all read': { fr: 'Tout marquer comme lu', es: 'Marcar todo como leído', it: 'Segna tutto come letto', de: 'Alle als gelesen markieren' },
    'Loading...': { fr: 'Chargement...', es: 'Cargando...', it: 'Caricamento...', de: 'Wird geladen...' },
    'No notifications yet': { fr: 'Pas encore de notifications', es: 'Aún no hay notificaciones', it: 'Nessuna notifica ancora', de: 'Noch keine Benachrichtigungen' },
    'Done!': { fr: 'Terminé !', es: '¡Listo!', it: 'Fatto!', de: 'Fertig!' },

    // HERO
    'Now with AI-powered planning': { fr: 'Maintenant avec planification IA', es: 'Ahora con planificación con IA', it: 'Ora con pianificazione AI', de: 'Jetzt mit KI-gestützter Planung' },
    'Your entire schedule': { fr: 'Ton programme complet', es: 'Toda tu agenda', it: 'Tutta la tua agenda', de: 'Dein gesamter Zeitplan' },
    'all in one place !': { fr: 'réuni en un seul endroit !', es: '¡en un solo lugar!', it: 'tutto in un posto!', de: 'alles an einem Ort!' },
    'Plan your day or your trip with AI, discover activities reviewed by a community of real travellers, and sync everything to your calendar.': { fr: 'Planifiez votre journée ou votre séjour avec l\'IA, découvrez des activités notées par une communauté de vrais voyageurs, et synchronisez tout avec votre calendrier.', es: 'Planifica tu día o viaje con IA, descubre actividades valoradas por una comunidad de viajeros reales, y sincroniza todo con tu calendario.', it: 'Pianifica la tua giornata o il tuo viaggio con l\'AI, scopri attività recensite da una comunità di veri viaggiatori, e sincronizza tutto con il tuo calendario.', de: 'Plane deinen Tag oder deine Reise mit KI, entdecke Aktivitäten, die von einer Community echter Reisender bewertet wurden, und synchronisiere alles mit deinem Kalender.' },
    'Plan My Day': { fr: 'Planifier ma journée', es: 'Planificar mi día', it: 'Pianifica la mia giornata', de: 'Meinen Tag planen' },
    'Browse Activities': { fr: 'Voir les activités', es: 'Ver actividades', it: 'Esplora attività', de: 'Aktivitäten durchsuchen' },

    // TRUST BAR
    'Average rating': { fr: 'Note moyenne', es: 'Valoración media', it: 'Valutazione media', de: 'Durchschnittsbewertung' },
    'Verified reviews': { fr: 'Avis vérifiés', es: 'Reseñas verificadas', it: 'Recensioni verificate', de: 'Verifizierte Bewertungen' },
    'Would recommend': { fr: 'Recommanderaient', es: 'Recomendarían', it: 'Lo consiglierebbero', de: 'Würden empfehlen' },
    'Cities covered': { fr: 'Villes couvertes', es: 'Ciudades cubiertas', it: 'Città coperte', de: 'Abgedeckte Städte' },
    'Excellent': { fr: 'Excellent', es: 'Excelente', it: 'Eccellente', de: 'Ausgezeichnet' },
    'Trustpilot': { fr: 'Trustpilot', es: 'Trustpilot', it: 'Trustpilot', de: 'Trustpilot' },

    // PLANNER
    'AI Day Planner': { fr: 'Planificateur IA', es: 'Planificador IA', it: 'Pianificatore AI', de: 'KI-Tagesplaner' },
    'Day Planner': { fr: 'Planificateur', es: 'Planificador', it: 'Pianificatore', de: 'Tagesplaner' },
    'Powered by AFYA AI': { fr: 'Propulsé par AFYA IA', es: 'Impulsado por AFYA IA', it: 'Alimentato da AFYA AI', de: 'Angetrieben von AFYA AI' },
    'Build your perfect': { fr: 'Construisez votre', es: 'Construye tu', it: 'Costruisci il tuo', de: 'Erstelle deinen perfekten' },
    'schedule': { fr: 'planning idéal', es: 'horario perfecto', it: 'programma perfetto', de: 'Zeitplan' },
    'One day or a full week — AFYA plans every moment with departure times and syncs to your calendar.': { fr: 'Une journée ou une semaine — AFYA planifie chaque moment avec les horaires de départ et synchronise avec votre calendrier.', es: 'Un día o una semana entera — AFYA planifica cada momento con horarios de salida y sincroniza con tu calendario.', it: 'Un giorno o una settimana intera — AFYA pianifica ogni momento con gli orari di partenza e si sincronizza con il tuo calendario.', de: 'Ein Tag oder eine ganze Woche — AFYA plant jeden Moment mit Abfahrtszeiten und synchronisiert mit deinem Kalender.' },
    '📅 Single Day': { fr: '📅 Jour unique', es: '📅 Un día', it: '📅 Singolo giorno', de: '📅 Einzeltag' },
    '🗺️ Multi-Day Trip': { fr: '🗺️ Multi-jours', es: '🗺️ Viaje de varios días', it: '🗺️ Viaggio di più giorni', de: '🗺️ Mehrtägige Reise' },
    'Who are you going with?': { fr: 'Avec qui partez-vous ?', es: '¿Con quién vas?', it: 'Con chi vai?', de: 'Mit wem reist du?' },
    'Friends': { fr: 'Amis', es: 'Amigos', it: 'Amici', de: 'Freunde' },
    'Partner': { fr: 'Partenaire', es: 'Pareja', it: 'Partner', de: 'Partner' },
    'Family': { fr: 'Famille', es: 'Familia', it: 'Famiglia', de: 'Familie' },
    'Business': { fr: 'Affaires', es: 'Negocios', it: 'Lavoro', de: 'Geschäftlich' },
    'Solo': { fr: 'Solo', es: 'Solo', it: 'Da solo', de: 'Allein' },
    'Date & Time': { fr: 'Date et heure', es: 'Fecha y hora', it: 'Data e ora', de: 'Datum & Uhrzeit' },
    'Start Date': { fr: 'Début', es: 'Fecha de inicio', it: 'Data di inizio', de: 'Startdatum' },
    'End Date': { fr: 'Fin', es: 'Fecha de fin', it: 'Data di fine', de: 'Enddatum' },
    'Duration': { fr: 'Durée', es: 'Duración', it: 'Durata', de: 'Dauer' },
    'Leave Home At': { fr: 'Départ', es: 'Salir a las', it: 'Partenza', de: 'Aufbruch um' },
    'Return By': { fr: 'Retour', es: 'Volver a las', it: 'Ritorno', de: 'Rückkehr bis' },
    'Preferences': { fr: 'Préférences', es: 'Preferencias', it: 'Preferenze', de: 'Präferenzen' },
    'City': { fr: 'Ville', es: 'Ciudad', it: 'Città', de: 'Stadt' },
    'Radius': { fr: 'Rayon', es: 'Radio', it: 'Raggio', de: 'Radius' },
    'Pace': { fr: 'Rythme', es: 'Ritmo', it: 'Ritmo', de: 'Tempo' },
    'Budget': { fr: 'Budget', es: 'Presupuesto', it: 'Budget', de: 'Budget' },
    'Budget (per person, per day)': { fr: 'Budget (par personne, par jour)', es: 'Presupuesto (por persona, por día)', it: 'Budget (a persona, al giorno)', de: 'Budget (pro Person, pro Tag)' },
    'Minimum': { fr: 'Minimum', es: 'Mínimo', it: 'Minimo', de: 'Minimum' },
    'Maximum': { fr: 'Maximum', es: 'Máximo', it: 'Massimo', de: 'Maximum' },
    'What activities?': { fr: 'Quelles activités ?', es: '¿Qué actividades?', it: 'Quali attività?', de: 'Welche Aktivitäten?' },
    'Hotel Preferences': { fr: 'Hôtel', es: 'Preferencias de hotel', it: 'Preferenze hotel', de: 'Hotelpräferenzen' },
    'Category': { fr: 'Catégorie', es: 'Categoría', it: 'Categoria', de: 'Kategorie' },
    'Mid-range': { fr: 'Milieu de gamme', es: 'Gama media', it: 'Fascia media', de: 'Mittelklasse' },
    'Luxury': { fr: 'Luxe', es: 'Lujo', it: 'Lusso', de: 'Luxus' },
    'Boutique': { fr: 'Boutique', es: 'Boutique', it: 'Boutique', de: 'Boutique' },
    'Apartment': { fr: 'Appartement', es: 'Apartamento', it: 'Appartamento', de: 'Apartment' },
    'Location': { fr: 'Emplacement', es: 'Ubicación', it: 'Posizione', de: 'Lage' },
    'City centre': { fr: 'Centre-ville', es: 'Centro de la ciudad', it: 'Centro città', de: 'Stadtzentrum' },
    'Near attractions': { fr: 'Près des attractions', es: 'Cerca de atracciones', it: 'Vicino alle attrazioni', de: 'In der Nähe von Attraktionen' },
    'Quiet area': { fr: 'Zone calme', es: 'Zona tranquila', it: 'Zona tranquilla', de: 'Ruhige Gegend' },
    'Generate My Schedule': { fr: 'Générer mon planning', es: 'Generar mi horario', it: 'Genera il mio programma', de: 'Meinen Zeitplan generieren' },
    'Add All to Calendar': { fr: 'Tout ajouter à l\'agenda', es: 'Añadir todo al calendario', it: 'Aggiungi tutto al calendario', de: 'Alle zum Kalender hinzufügen' },
    'AFYA AI — Your Trip Summary': { fr: 'AFYA IA — Résumé du séjour', es: 'AFYA IA — Resumen de tu viaje', it: 'AFYA AI — Riepilogo del tuo viaggio', de: 'AFYA AI — Deine Reisezusammenfassung' },
    'Your Day in': { fr: 'Votre journée à', es: 'Tu día en', it: 'La tua giornata a', de: 'Dein Tag in' },
    'per night': { fr: 'par nuit', es: 'por noche', it: 'a notte', de: 'pro Nacht' },
    'Tonight': { fr: 'Ce soir', es: 'Esta noche', it: 'Stasera', de: 'Heute Abend' },

    // ACTIVITIES SECTION
    'Top Rated Activities': { fr: 'Activités les mieux notées', es: 'Actividades mejor valoradas', it: 'Attività più votate', de: 'Bestbewertete Aktivitäten' },
    'Loved by': { fr: 'Aimées par', es: 'Amadas por', it: 'Amate da', de: 'Geliebt von' },
    'our community': { fr: 'notre communauté', es: 'nuestra comunidad', it: 'la nostra comunità', de: 'unserer Community' },
    'Hand-picked by AI and validated by thousands of real travellers.': { fr: 'Sélectionnées par l\'IA et validées par des milliers de vrais voyageurs.', es: 'Elegidas a mano por la IA y validadas por miles de viajeros reales.', it: 'Selezionate dall\'AI e convalidate da migliaia di veri viaggiatori.', de: 'Von der KI handverlesen und von Tausenden echten Reisenden bestätigt.' },

    // RESTAURANTS SECTION
    'Restaurant Explorer': { fr: 'Explorateur de restaurants', es: 'Explorador de restaurantes', it: 'Esplora ristoranti', de: 'Restaurant-Erkundung' },
    'Find the': { fr: 'Trouvez la', es: 'Encuentra la', it: 'Trova il', de: 'Finde den' },
    'perfect table': { fr: 'table parfaite', es: 'mesa perfecta', it: 'tavolo perfetto', de: 'perfekten Tisch' },
    'Browse, filter, read real guest reviews and add to your schedule.': { fr: 'Parcourez, filtrez, lisez de vrais avis et ajoutez à votre planning.', es: 'Explora, filtra, lee reseñas reales y añade a tu horario.', it: 'Sfoglia, filtra, leggi recensioni reali e aggiungi al tuo programma.', de: 'Durchsuchen, filtern, echte Bewertungen lesen und zum Zeitplan hinzufügen.' },
    'Cuisine': { fr: 'Cuisine', es: 'Cocina', it: 'Cucina', de: 'Küche' },
    'All cuisines': { fr: 'Toutes les cuisines', es: 'Todas las cocinas', it: 'Tutte le cucine', de: 'Alle Küchen' },
    'French': { fr: 'Française', es: 'Francesa', it: 'Francese', de: 'Französisch' },
    'Italian': { fr: 'Italienne', es: 'Italiana', it: 'Italiana', de: 'Italienisch' },
    'Japanese': { fr: 'Japonaise', es: 'Japonesa', it: 'Giapponese', de: 'Japanisch' },
    'American': { fr: 'Américaine', es: 'Americana', it: 'Americana', de: 'Amerikanisch' },
    'Mediterranean': { fr: 'Méditerranéenne', es: 'Mediterránea', it: 'Mediterranea', de: 'Mediterran' },
    'Asian': { fr: 'Asiatique', es: 'Asiática', it: 'Asiatica', de: 'Asiatisch' },
    'Max Distance': { fr: 'Distance max', es: 'Distancia máx', it: 'Distanza max', de: 'Max. Entfernung' },
    'Under 500m': { fr: 'Moins de 500m', es: 'Menos de 500m', it: 'Meno di 500m', de: 'Unter 500m' },
    'Under 1km': { fr: 'Moins de 1km', es: 'Menos de 1km', it: 'Meno di 1km', de: 'Unter 1km' },
    'Under 3km': { fr: 'Moins de 3km', es: 'Menos de 3km', it: 'Meno di 3km', de: 'Unter 3km' },
    'Under 5km': { fr: 'Moins de 5km', es: 'Menos de 5km', it: 'Meno di 5km', de: 'Unter 5km' },
    'Min Rating': { fr: 'Note min', es: 'Valoración mín', it: 'Valutazione min', de: 'Min. Bewertung' },
    'Be the first to review': { fr: 'Soyez le premier à donner un avis', es: 'Sé el primero en opinar', it: 'Sii il primo a recensire', de: 'Sei der Erste, der bewertet' },

    // PLANNER — Dropdown Radius
    '1 km — Walking only': { fr: '1 km — À pied uniquement', es: '1 km — Solo a pie', it: '1 km — Solo a piedi', de: '1 km — Nur zu Fuß' },
    '5 km — Neighbourhood': { fr: '5 km — Quartier', es: '5 km — Vecindario', it: '5 km — Quartiere', de: '5 km — Nachbarschaft' },
    '15 km — City wide': { fr: '15 km — Ville entière', es: '15 km — Toda la ciudad', it: '15 km — Tutta la città', de: '15 km — Stadtweit' },
    '30 km — Greater area': { fr: '30 km — Région étendue', es: '30 km — Área extendida', it: '30 km — Area estesa', de: '30 km — Großraum' },
    '50 km — Day trip': { fr: '50 km — Excursion', es: '50 km — Excursión de un día', it: '50 km — Gita giornaliera', de: '50 km — Tagesausflug' },

    // PLANNER — Dropdown Pace
    'Relaxed — 2-3 acts': { fr: 'Détendu — 2-3 activités', es: 'Relajado — 2-3 actividades', it: 'Rilassato — 2-3 attività', de: 'Entspannt — 2-3 Aktivitäten' },
    'Balanced — 5-6 acts': { fr: 'Équilibré — 5-6 activités', es: 'Equilibrado — 5-6 actividades', it: 'Equilibrato — 5-6 attività', de: 'Ausgewogen — 5-6 Aktivitäten' },
    'Packed — 8+ acts': { fr: 'Chargé — 8+ activités', es: 'Cargado — 8+ actividades', it: 'Intenso — 8+ attività', de: 'Voll — 8+ Aktivitäten' },

    // PLANNER — Boutons activités
    'Food': { fr: 'Cuisine', es: 'Comida', it: 'Cibo', de: 'Essen' },
    'Outdoors': { fr: 'Plein air', es: 'Aire libre', it: 'All\'aperto', de: 'Draußen' },
    'Culture': { fr: 'Culture', es: 'Cultura', it: 'Cultura', de: 'Kultur' },
    'Sports': { fr: 'Sports', es: 'Deportes', it: 'Sport', de: 'Sport' },
    'Sightseeing': { fr: 'Tourisme', es: 'Turismo', it: 'Visite turistiche', de: 'Sehenswürdigkeiten' },
    'Nightlife': { fr: 'Vie nocturne', es: 'Vida nocturna', it: 'Vita notturna', de: 'Nachtleben' },
    'Wellness': { fr: 'Bien-être', es: 'Bienestar', it: 'Benessere', de: 'Wellness' },
    'Shopping': { fr: 'Shopping', es: 'Compras', it: 'Shopping', de: 'Einkaufen' },
    'Shows': { fr: 'Spectacles', es: 'Espectáculos', it: 'Spettacoli', de: 'Shows' },

    // PLANNER — Categories activités
    'All': { fr: 'Tout', es: 'Todo', it: 'Tutto', de: 'Alle' },
    'All Categories': { fr: 'Toutes catégories', es: 'Todas las categorías', it: 'Tutte le categorie', de: 'Alle Kategorien' },

    // PLANNER — Hotel categories supplémentaires
    'Budget hotel': { fr: 'Hôtel économique', es: 'Hotel económico', it: 'Hotel economico', de: 'Budget-Hotel' },
    'Budget — under $100': { fr: 'Économique — moins de 100$', es: 'Económico — menos de $100', it: 'Economico — meno di 100$', de: 'Budget — unter 100$' },
    'Mid-range — $100-$250': { fr: 'Milieu de gamme — 100$-250$', es: 'Gama media — $100-$250', it: 'Fascia media — 100$-250$', de: 'Mittelklasse — 100$-250$' },
    'Luxury — $250+': { fr: 'Luxe — 250$+', es: 'Lujo — $250+', it: 'Lusso — 250$+', de: 'Luxus — 250$+' },

    // PLANNER — Trip Type review
    'Solo trip': { fr: 'Voyage solo', es: 'Viaje en solitario', it: 'Viaggio solitario', de: 'Solo-Reise' },
    'Couple': { fr: 'En couple', es: 'En pareja', it: 'In coppia', de: 'Als Paar' },
    'Family with kids': { fr: 'Famille avec enfants', es: 'Familia con niños', it: 'Famiglia con bambini', de: 'Familie mit Kindern' },
    'Group of friends': { fr: 'Groupe d\'amis', es: 'Grupo de amigos', it: 'Gruppo di amici', de: 'Freundesgruppe' },
    'Business trip': { fr: 'Voyage d\'affaires', es: 'Viaje de negocios', it: 'Viaggio di lavoro', de: 'Geschäftsreise' },

    // PLANNER — Suggestions
    'Showing': { fr: 'Affichage de', es: 'Mostrando', it: 'Mostrando', de: 'Anzeige von' },
    'restaurants': { fr: 'restaurants', es: 'restaurantes', it: 'ristoranti', de: 'Restaurants' },
    'restaurant': { fr: 'restaurant', es: 'restaurante', it: 'ristorante', de: 'Restaurant' },
    'activities': { fr: 'activités', es: 'actividades', it: 'attività', de: 'Aktivitäten' },
    'activity': { fr: 'activité', es: 'actividad', it: 'attività', de: 'Aktivität' },

    // BOUTON ACTIONS communs
    'Add to schedule': { fr: 'Ajouter à mon planning', es: 'Añadir al horario', it: 'Aggiungi al programma', de: 'Zum Zeitplan hinzufügen' },
    '+ Add to schedule': { fr: '+ Ajouter au planning', es: '+ Añadir al horario', it: '+ Aggiungi al programma', de: '+ Zum Zeitplan hinzufügen' },
    'Visit': { fr: 'Visiter', es: 'Visitar', it: 'Visita', de: 'Besuchen' },
    'Save': { fr: 'Enregistrer', es: 'Guardar', it: 'Salva', de: 'Speichern' },
    'Cancel': { fr: 'Annuler', es: 'Cancelar', it: 'Annulla', de: 'Abbrechen' },
    'Close': { fr: 'Fermer', es: 'Cerrar', it: 'Chiudi', de: 'Schließen' },
    'Delete': { fr: 'Supprimer', es: 'Eliminar', it: 'Elimina', de: 'Löschen' },
    'Edit': { fr: 'Modifier', es: 'Editar', it: 'Modifica', de: 'Bearbeiten' },
    'Send': { fr: 'Envoyer', es: 'Enviar', it: 'Invia', de: 'Senden' },
    'Submit': { fr: 'Soumettre', es: 'Enviar', it: 'Invia', de: 'Absenden' },
    'Confirm': { fr: 'Confirmer', es: 'Confirmar', it: 'Conferma', de: 'Bestätigen' },
    'Back': { fr: 'Retour', es: 'Atrás', it: 'Indietro', de: 'Zurück' },
    'Next': { fr: 'Suivant', es: 'Siguiente', it: 'Avanti', de: 'Weiter' },
    'Previous': { fr: 'Précédent', es: 'Anterior', it: 'Precedente', de: 'Zurück' },
    'Yes': { fr: 'Oui', es: 'Sí', it: 'Sì', de: 'Ja' },
    'No': { fr: 'Non', es: 'No', it: 'No', de: 'Nein' },

    // REVIEWS SECTION
    'Community Reviews': { fr: 'Avis de la communauté', es: 'Reseñas de la comunidad', it: 'Recensioni della community', de: 'Community-Bewertungen' },
    'What travellers': { fr: 'Ce que les voyageurs', es: 'Lo que dicen', it: 'Cosa dicono', de: 'Was Reisende' },
    'are saying': { fr: 'en disent', es: 'los viajeros', it: 'i viaggiatori', de: 'sagen' },
    'See on Trustpilot': { fr: 'Voir sur Trustpilot', es: 'Ver en Trustpilot', it: 'Vedi su Trustpilot', de: 'Auf Trustpilot ansehen' },
    'See on Google Maps': { fr: 'Voir sur Google Maps', es: 'Ver en Google Maps', it: 'Vedi su Google Maps', de: 'Auf Google Maps ansehen' },
    'Load more reviews': { fr: 'Voir plus d\'avis', es: 'Cargar más reseñas', it: 'Carica più recensioni', de: 'Weitere Bewertungen laden' },
    'Reply': { fr: 'Répondre', es: 'Responder', it: 'Rispondi', de: 'Antworten' },
    'ADMIN': { fr: 'ADMIN', es: 'ADMIN', it: 'ADMIN', de: 'ADMIN' },

    // FEATURES SECTION
    'Why AFYA': { fr: 'Pourquoi AFYA', es: 'Por qué AFYA', it: 'Perché AFYA', de: 'Warum AFYA' },
    'Everything in': { fr: 'Tout au', es: 'Todo en', it: 'Tutto in', de: 'Alles an' },
    'one place': { fr: 'même endroit', es: 'un lugar', it: 'un posto', de: 'einem Ort' },
    'AI Planning': { fr: 'Planification IA', es: 'Planificación IA', it: 'Pianificazione AI', de: 'KI-Planung' },
    'Context-aware AI builds full-day schedules tailored to your group, budget and interests.': { fr: 'Une IA contextuelle construit des plannings adaptés à votre groupe, budget et centres d\'intérêt.', es: 'Una IA contextual crea horarios adaptados a tu grupo, presupuesto e intereses.', it: 'L\'AI contestuale crea programmi adattati al tuo gruppo, budget e interessi.', de: 'Kontextbewusste KI erstellt Tagespläne, die auf deine Gruppe, dein Budget und deine Interessen zugeschnitten sind.' },
    'Real Reviews': { fr: 'Vrais avis', es: 'Reseñas reales', it: 'Recensioni reali', de: 'Echte Bewertungen' },
    'Thousands of verified reviews from AFYA users, Trustpilot, and Google Maps.': { fr: 'Des milliers d\'avis vérifiés provenant des utilisateurs AFYA, Trustpilot et Google Maps.', es: 'Miles de reseñas verificadas de usuarios AFYA, Trustpilot y Google Maps.', it: 'Migliaia di recensioni verificate da utenti AFYA, Trustpilot e Google Maps.', de: 'Tausende von verifizierten Bewertungen von AFYA-Nutzern, Trustpilot und Google Maps.' },
    'Calendar Sync': { fr: 'Synchro calendrier', es: 'Sincronización con calendario', it: 'Sincronizzazione calendario', de: 'Kalender-Synchronisation' },
    'Every activity syncs to your phone\'s calendar with departure reminders.': { fr: 'Chaque activité se synchronise avec le calendrier de votre téléphone avec des rappels de départ.', es: 'Cada actividad se sincroniza con el calendario de tu teléfono con recordatorios de salida.', it: 'Ogni attività si sincronizza con il calendario del tuo telefono con promemoria di partenza.', de: 'Jede Aktivität wird mit dem Kalender deines Telefons synchronisiert, inklusive Abfahrtserinnerungen.' },
    'Budget Control': { fr: 'Contrôle du budget', es: 'Control del presupuesto', it: 'Controllo budget', de: 'Budgetkontrolle' },
    'Set precise min/max budgets — AFYA only shows what fits.': { fr: 'Définissez des budgets min/max précis — AFYA n\'affiche que ce qui convient.', es: 'Establece presupuestos mín/máx precisos — AFYA solo muestra lo que encaja.', it: 'Imposta budget min/max precisi — AFYA mostra solo ciò che si adatta.', de: 'Lege präzise Min/Max-Budgets fest — AFYA zeigt nur, was passt.' },
    'Radius Filters': { fr: 'Filtres de rayon', es: 'Filtros de radio', it: 'Filtri di raggio', de: 'Radius-Filter' },
    'From 500m walks to 50km day trips — total control of your range.': { fr: 'Des balades de 500m aux excursions de 50km — contrôle total de votre rayon.', es: 'Desde caminatas de 500m hasta excursiones de 50km — control total de tu alcance.', it: 'Da passeggiate di 500m a gite di 50km — controllo totale del tuo raggio.', de: 'Von 500m-Spaziergängen bis zu 50km-Tagesausflügen — totale Kontrolle über deine Reichweite.' },
    'Hotel Packages': { fr: 'Packs hôtels', es: 'Paquetes hoteleros', it: 'Pacchetti hotel', de: 'Hotel-Pakete' },
    'Multi-day trips include curated hotel suggestions per night.': { fr: 'Les séjours multi-jours incluent des suggestions d\'hôtels sélectionnés par nuit.', es: 'Los viajes de varios días incluyen sugerencias de hoteles seleccionados por noche.', it: 'I viaggi di più giorni includono suggerimenti di hotel selezionati per notte.', de: 'Mehrtägige Reisen enthalten kuratierte Hotelvorschläge pro Nacht.' },

    // CTA + FOOTER
    'planning better days': { fr: 'planifient leurs journées', es: 'planificando días mejores', it: 'pianificare giorni migliori', de: 'bessere Tage planen' },
    'Free to start. No credit card required.': { fr: 'Gratuit pour commencer. Pas de carte bancaire requise.', es: 'Gratis para empezar. No se requiere tarjeta de crédito.', it: 'Inizio gratuito. Nessuna carta di credito richiesta.', de: 'Kostenloser Start. Keine Kreditkarte erforderlich.' },
    'Start Planning Free': { fr: 'Commencer gratuitement', es: 'Empezar gratis', it: 'Inizia gratis', de: 'Kostenlos starten' },
    'AI-powered day planning with real community reviews.': { fr: 'Planification de journée IA avec de vrais avis communautaires.', es: 'Planificación de día con IA y reseñas reales de la comunidad.', it: 'Pianificazione giornaliera con AI e recensioni reali della community.', de: 'KI-gestützte Tagesplanung mit echten Community-Bewertungen.' },
    'Product': { fr: 'Produit', es: 'Producto', it: 'Prodotto', de: 'Produkt' },
    'Community': { fr: 'Communauté', es: 'Comunidad', it: 'Community', de: 'Community' },
    'Company': { fr: 'Entreprise', es: 'Empresa', it: 'Azienda', de: 'Unternehmen' },
    'Write a Review': { fr: 'Écrire un avis', es: 'Escribir una reseña', it: 'Scrivi una recensione', de: 'Bewertung schreiben' },
    'All Reviews': { fr: 'Tous les avis', es: 'Todas las reseñas', it: 'Tutte le recensioni', de: 'Alle Bewertungen' },
    'Blog': { fr: 'Blog', es: 'Blog', it: 'Blog', de: 'Blog' },
    'About': { fr: 'À propos', es: 'Acerca de', it: 'Chi siamo', de: 'Über uns' },
    'Careers': { fr: 'Carrières', es: 'Empleo', it: 'Carriere', de: 'Karriere' },
    'Privacy': { fr: 'Confidentialité', es: 'Privacidad', it: 'Privacy', de: 'Datenschutz' },
    'Terms': { fr: 'Conditions', es: 'Términos', it: 'Termini', de: 'Bedingungen' },

    // AUTH MODAL
    'Welcome back': { fr: 'Bon retour', es: 'Bienvenido de nuevo', it: 'Bentornato', de: 'Willkommen zurück' },
    'Sign in to write reviews and save your trips.': { fr: 'Connectez-vous pour écrire des avis et enregistrer vos séjours.', es: 'Inicia sesión para escribir reseñas y guardar tus viajes.', it: 'Accedi per scrivere recensioni e salvare i tuoi viaggi.', de: 'Melde dich an, um Bewertungen zu schreiben und deine Reisen zu speichern.' },
    'First Name': { fr: 'Prénom', es: 'Nombre', it: 'Nome', de: 'Vorname' },
    'Email': { fr: 'Email', es: 'Correo electrónico', it: 'Email', de: 'E-Mail' },
    'Password': { fr: 'Mot de passe', es: 'Contraseña', it: 'Password', de: 'Passwort' },
    'Forgot password?': { fr: 'Mot de passe oublié ?', es: '¿Olvidaste la contraseña?', it: 'Password dimenticata?', de: 'Passwort vergessen?' },
    'Forgot your': { fr: 'Mot de passe', es: '¿Olvidaste tu', it: 'Hai dimenticato', de: 'Passwort' },
    'Enter your email and we\'ll send you a reset link.': { fr: 'Entrez votre email et nous vous enverrons un lien de réinitialisation.', es: 'Introduce tu email y te enviaremos un enlace de restablecimiento.', it: 'Inserisci la tua email e ti invieremo un link di reset.', de: 'Gib deine E-Mail ein und wir senden dir einen Reset-Link.' },
    'Send reset email': { fr: 'Envoyer le lien', es: 'Enviar email', it: 'Invia email', de: 'E-Mail senden' },
    'Don\'t have an account?': { fr: 'Pas encore de compte ?', es: '¿No tienes una cuenta?', it: 'Non hai un account?', de: 'Noch kein Konto?' },

    // REVIEW MODAL
    'Share your': { fr: 'Partagez votre', es: 'Comparte tu', it: 'Condividi la tua', de: 'Teile deine' },
    'Your honest review helps others discover the best activities.': { fr: 'Votre avis sincère aide les autres à découvrir les meilleures activités.', es: 'Tu reseña honesta ayuda a otros a descubrir las mejores actividades.', it: 'La tua recensione onesta aiuta gli altri a scoprire le migliori attività.', de: 'Deine ehrliche Bewertung hilft anderen, die besten Aktivitäten zu entdecken.' },
    'Your Rating': { fr: 'Votre note', es: 'Tu valoración', it: 'La tua valutazione', de: 'Deine Bewertung' },
    'Select a rating': { fr: 'Sélectionnez une note', es: 'Selecciona una valoración', it: 'Seleziona una valutazione', de: 'Bewertung auswählen' },
    'Review Title': { fr: 'Titre de l\'avis', es: 'Título de la reseña', it: 'Titolo della recensione', de: 'Titel der Bewertung' },
    'Your Review': { fr: 'Votre avis', es: 'Tu reseña', it: 'La tua recensione', de: 'Deine Bewertung' },
    'Trip Type': { fr: 'Type de séjour', es: 'Tipo de viaje', it: 'Tipo di viaggio', de: 'Reiseart' },
    'Optional': { fr: 'Optionnel', es: 'Opcional', it: 'Opzionale', de: 'Optional' },
    'Restaurant or Activity': { fr: 'Restaurant ou activité', es: 'Restaurante o actividad', it: 'Ristorante o attività', de: 'Restaurant oder Aktivität' },
    'Date of visit': { fr: 'Date de visite', es: 'Fecha de visita', it: 'Data della visita', de: 'Besuchsdatum' },
    'Publish My Review': { fr: 'Publier mon avis', es: 'Publicar mi reseña', it: 'Pubblica la mia recensione', de: 'Meine Bewertung veröffentlichen' }
  };

  // ═══════════════════════════════════════════════════════════
  // 2) ÉTAT INTERNE
  // ═══════════════════════════════════════════════════════════
  
  const SUPPORTED_LANGS = ['en', 'fr', 'es', 'it', 'de'];
  let currentLang = localStorage.getItem('afya_lang') || 'en';
  if (!SUPPORTED_LANGS.includes(currentLang)) currentLang = 'en';
  
  // Cache des nœuds texte traduits (texte original)
  const originalTexts = new WeakMap();
  let mutationObserver = null;

  // ═══════════════════════════════════════════════════════════
  // 3) FONCTIONS DE TRADUCTION
  // ═══════════════════════════════════════════════════════════
  
  function translate(text) {
    if (!text) return text;
    const trimmed = text.trim();
    if (!trimmed) return text;
    
    // Si on est en anglais, retour au texte original (ou inchangé)
    if (currentLang === 'en') return text;
    
    // Cherche traduction exacte
    const entry = TRANSLATIONS[trimmed];
    if (entry && entry[currentLang]) {
      // Préserve les espaces autour
      return text.replace(trimmed, entry[currentLang]);
    }
    
    return text;
  }

  function translateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const original = originalTexts.get(node) || node.textContent;
      if (!originalTexts.has(node)) {
        originalTexts.set(node, original);
      }
      const translated = translate(original);
      if (translated !== node.textContent) {
        node.textContent = translated;
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // Ignore script, style, code
      const tag = node.tagName?.toLowerCase();
      if (tag === 'script' || tag === 'style' || tag === 'code' || tag === 'pre') return;
      
      // Ignore les elements no-translate
      if (node.classList && node.classList.contains('no-translate')) return;
      if (node.getAttribute && node.getAttribute('translate') === 'no') return;
      
      // Traduit les attributs placeholder et title
      if (node.hasAttribute && node.hasAttribute('placeholder')) {
        const orig = node.dataset._origPlaceholder || node.getAttribute('placeholder');
        if (!node.dataset._origPlaceholder) node.dataset._origPlaceholder = orig;
        const tr = TRANSLATIONS[orig.trim()];
        if (tr && tr[currentLang]) node.setAttribute('placeholder', tr[currentLang]);
        else if (currentLang === 'en') node.setAttribute('placeholder', orig);
      }
      
      // Récurse dans les enfants
      for (const child of node.childNodes) {
        translateNode(child);
      }
    }
  }

  function translatePage() {
    translateNode(document.body);
  }

  // ═══════════════════════════════════════════════════════════
  // 4) OBSERVER POUR LES NOUVEAUX CONTENUS
  // ═══════════════════════════════════════════════════════════
  
  function startObserver() {
    if (mutationObserver) mutationObserver.disconnect();
    
    mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          translateNode(node);
        }
        if (mutation.type === 'characterData') {
          translateNode(mutation.target);
        }
      }
    });
    
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: false
    });
  }

  // ═══════════════════════════════════════════════════════════
  // 5) API PUBLIQUE
  // ═══════════════════════════════════════════════════════════
  
  window.afyaI18n = {
    setLang: function(lang) {
      if (!SUPPORTED_LANGS.includes(lang)) return;
      currentLang = lang;
      localStorage.setItem('afya_lang', lang);
      
      // Recharge les textes originaux (en) puis re-traduit
      if (lang === 'en') {
        // Restaure tous les textes originaux
        document.querySelectorAll('*').forEach(el => {
          for (const node of el.childNodes) {
            if (node.nodeType === Node.TEXT_NODE && originalTexts.has(node)) {
              node.textContent = originalTexts.get(node);
            }
          }
        });
      } else {
        translatePage();
      }
      
      // Émet un événement custom
      document.dispatchEvent(new CustomEvent('afya:langchange', { detail: { lang } }));
    },
    
    getLang: function() { return currentLang; },
    
    getSupportedLangs: function() { return [...SUPPORTED_LANGS]; },
    
    translate: translate,
    
    // Re-traduit la page (utile après modif programmatique)
    refresh: function() { translatePage(); }
  };

  // ═══════════════════════════════════════════════════════════
  // 6) HOOK AUTOMATIQUE SUR setLang() EXISTANT
  // ═══════════════════════════════════════════════════════════
  
  // Si le code de la page a déjà une fonction setLang, on la wrap
  document.addEventListener('DOMContentLoaded', () => {
    // Première traduction
    translatePage();
    
    // Lance l'observer pour les contenus dynamiques (modals, listes générées)
    startObserver();
    
    // Hook sur setLang existant si présent
    if (typeof window.setLang === 'function') {
      const originalSetLang = window.setLang;
      window.setLang = function(lang) {
        originalSetLang.call(this, lang);
        window.afyaI18n.setLang(lang);
      };
    }
  });

  // Si DOMContentLoaded déjà passé
  if (document.readyState === 'loading') {
    // ok, on attend
  } else {
    setTimeout(() => {
      translatePage();
      startObserver();
      if (typeof window.setLang === 'function' && !window._afyaI18nHooked) {
        window._afyaI18nHooked = true;
        const originalSetLang = window.setLang;
        window.setLang = function(lang) {
          originalSetLang.call(this, lang);
          window.afyaI18n.setLang(lang);
        };
      }
    }, 100);
  }
  
  console.log('✅ AFYA i18n loaded:', SUPPORTED_LANGS.join(', '), '— Current:', currentLang);
})();