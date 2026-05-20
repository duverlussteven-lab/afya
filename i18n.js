// ═══════════════════════════════════════════════════════════════
// I18N.JS — Système de traduction pour AFYA
// 5 langues : EN, FR, ES, IT, DE
// ✅ Persistance entre pages via localStorage
// ✅ Synchronisation avec le système interne setLang() de chaque page
// ═══════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════
  // 1) DICTIONNAIRE DE TRADUCTIONS
  // ═══════════════════════════════════════════════════════════
  
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
    'Back to home': { fr: 'Retour à l\'accueil', es: 'Volver al inicio', it: 'Torna alla home', de: 'Zurück zur Startseite' },
    'Back to restaurants': { fr: 'Retour aux restaurants', es: 'Volver a restaurantes', it: 'Torna ai ristoranti', de: 'Zurück zu Restaurants' },
    'Back to activities': { fr: 'Retour aux activités', es: 'Volver a actividades', it: 'Torna alle attività', de: 'Zurück zu Aktivitäten' },
    'Back to my space': { fr: 'Retour à mon espace', es: 'Volver a mi espacio', it: 'Torna al mio spazio', de: 'Zurück zu meinem Bereich' },
    'Mark all read': { fr: 'Tout marquer comme lu', es: 'Marcar todo como leído', it: 'Segna tutto come letto', de: 'Alle als gelesen markieren' },
    'Loading...': { fr: 'Chargement...', es: 'Cargando...', it: 'Caricamento...', de: 'Wird geladen...' },
    'No notifications yet': { fr: 'Pas encore de notifications', es: 'Aún no hay notificaciones', it: 'Nessuna notifica ancora', de: 'Noch keine Benachrichtigungen' },
    'Done!': { fr: 'Terminé !', es: '¡Listo!', it: 'Fatto!', de: 'Fertig!' },

    // HERO
    'Now with AI-powered planning': { fr: 'Maintenant avec planification IA', es: 'Ahora con planificación con IA', it: 'Ora con pianificazione AI', de: 'Jetzt mit KI-gestützter Planung' },
    'Your entire schedule': { fr: 'Ton programme complet', es: 'Toda tu agenda', it: 'Tutta la tua agenda', de: 'Dein gesamter Zeitplan' },
    'all in one place !': { fr: 'réuni en un seul endroit !', es: '¡en un solo lugar!', it: 'tutto in un posto!', de: 'alles an einem Ort!' },
    'Plan My Day': { fr: 'Planifier ma journée', es: 'Planificar mi día', it: 'Pianifica la mia giornata', de: 'Meinen Tag planen' },
    'Browse Activities': { fr: 'Voir les activités', es: 'Ver actividades', it: 'Esplora attività', de: 'Aktivitäten durchsuchen' },

    // TRUST BAR
    'Average rating': { fr: 'Note moyenne', es: 'Valoración media', it: 'Valutazione media', de: 'Durchschnittsbewertung' },
    'Verified reviews': { fr: 'Avis vérifiés', es: 'Reseñas verificadas', it: 'Recensioni verificate', de: 'Verifizierte Bewertungen' },
    'Would recommend': { fr: 'Recommanderaient', es: 'Recomendarían', it: 'Lo consiglierebbero', de: 'Würden empfehlen' },
    'Cities covered': { fr: 'Villes couvertes', es: 'Ciudades cubiertas', it: 'Città coperte', de: 'Abgedeckte Städte' },
    'Excellent': { fr: 'Excellent', es: 'Excelente', it: 'Eccellente', de: 'Ausgezeichnet' },

    // PLANNER
    'AI Day Planner': { fr: 'Planificateur IA', es: 'Planificador IA', it: 'Pianificatore AI', de: 'KI-Tagesplaner' },
    'Day Planner': { fr: 'Planificateur', es: 'Planificador', it: 'Pianificatore', de: 'Tagesplaner' },
    'Powered by AFYA AI': { fr: 'Propulsé par AFYA IA', es: 'Impulsado por AFYA IA', it: 'Alimentato da AFYA AI', de: 'Angetrieben von AFYA AI' },
    'schedule': { fr: 'planning idéal', es: 'horario perfecto', it: 'programma perfetto', de: 'Zeitplan' },
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
    'per night': { fr: 'par nuit', es: 'por noche', it: 'a notte', de: 'pro Nacht' },
    'Tonight': { fr: 'Ce soir', es: 'Esta noche', it: 'Stasera', de: 'Heute Abend' },

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
    'All': { fr: 'Tout', es: 'Todo', it: 'Tutto', de: 'Alle' },

    // ACTIVITIES SECTION
    'Top Rated Activities': { fr: 'Activités les mieux notées', es: 'Actividades mejor valoradas', it: 'Attività più votate', de: 'Bestbewertete Aktivitäten' },
    'Loved by': { fr: 'Aimées par', es: 'Amadas por', it: 'Amate da', de: 'Geliebt von' },
    'our community': { fr: 'notre communauté', es: 'nuestra comunidad', it: 'la nostra comunità', de: 'unserer Community' },

    // RESTAURANTS SECTION
    'Restaurant Explorer': { fr: 'Explorateur de restaurants', es: 'Explorador de restaurantes', it: 'Esplora ristoranti', de: 'Restaurant-Erkundung' },
    'perfect table': { fr: 'table parfaite', es: 'mesa perfecta', it: 'tavolo perfetto', de: 'perfekten Tisch' },
    'Cuisine': { fr: 'Cuisine', es: 'Cocina', it: 'Cucina', de: 'Küche' },
    'All cuisines': { fr: 'Toutes les cuisines', es: 'Todas las cocinas', it: 'Tutte le cucine', de: 'Alle Küchen' },
    'French': { fr: 'Française', es: 'Francesa', it: 'Francese', de: 'Französisch' },
    'Italian': { fr: 'Italienne', es: 'Italiana', it: 'Italiana', de: 'Italienisch' },
    'Japanese': { fr: 'Japonaise', es: 'Japonesa', it: 'Giapponese', de: 'Japanisch' },
    'American': { fr: 'Américaine', es: 'Americana', it: 'Americana', de: 'Amerikanisch' },
    'Mediterranean': { fr: 'Méditerranéenne', es: 'Mediterránea', it: 'Mediterranea', de: 'Mediterran' },
    'Asian': { fr: 'Asiatique', es: 'Asiática', it: 'Asiatica', de: 'Asiatisch' },
    'Max Distance': { fr: 'Distance max', es: 'Distancia máx', it: 'Distanza max', de: 'Max. Entfernung' },
    'Min Rating': { fr: 'Note min', es: 'Valoración mín', it: 'Valutazione min', de: 'Min. Bewertung' },
    'Be the first to review': { fr: 'Soyez le premier à donner un avis', es: 'Sé el primero en opinar', it: 'Sii il primo a recensire', de: 'Sei der Erste, der bewertet' },

    // REVIEWS SECTION
    'Community Reviews': { fr: 'Avis de la communauté', es: 'Reseñas de la comunidad', it: 'Recensioni della community', de: 'Community-Bewertungen' },
    'See on Trustpilot': { fr: 'Voir sur Trustpilot', es: 'Ver en Trustpilot', it: 'Vedi su Trustpilot', de: 'Auf Trustpilot ansehen' },
    'See on Google Maps': { fr: 'Voir sur Google Maps', es: 'Ver en Google Maps', it: 'Vedi su Google Maps', de: 'Auf Google Maps ansehen' },
    'Load more reviews': { fr: 'Voir plus d\'avis', es: 'Cargar más reseñas', it: 'Carica più recensioni', de: 'Weitere Bewertungen laden' },
    'Reply': { fr: 'Répondre', es: 'Responder', it: 'Rispondi', de: 'Antworten' },
    'Write a review': { fr: 'Écrire un avis', es: 'Escribir una reseña', it: 'Scrivi una recensione', de: 'Bewertung schreiben' },

    // FOOTER
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
    'First Name': { fr: 'Prénom', es: 'Nombre', it: 'Nome', de: 'Vorname' },
    'Email': { fr: 'Email', es: 'Correo electrónico', it: 'Email', de: 'E-Mail' },
    'Password': { fr: 'Mot de passe', es: 'Contraseña', it: 'Password', de: 'Passwort' },
    'Forgot password?': { fr: 'Mot de passe oublié ?', es: '¿Olvidaste la contraseña?', it: 'Password dimenticata?', de: 'Passwort vergessen?' },
    'Send reset email': { fr: 'Envoyer le lien', es: 'Enviar email', it: 'Invia email', de: 'E-Mail senden' },
    'Don\'t have an account?': { fr: 'Pas encore de compte ?', es: '¿No tienes una cuenta?', it: 'Non hai un account?', de: 'Noch kein Konto?' },

    // REVIEW MODAL
    'Your Rating': { fr: 'Votre note', es: 'Tu valoración', it: 'La tua valutazione', de: 'Deine Bewertung' },
    'Select a rating': { fr: 'Sélectionnez une note', es: 'Selecciona una valoración', it: 'Seleziona una valutazione', de: 'Bewertung auswählen' },
    'Review Title': { fr: 'Titre de l\'avis', es: 'Título de la reseña', it: 'Titolo della recensione', de: 'Titel der Bewertung' },
    'Your Review': { fr: 'Votre avis', es: 'Tu reseña', it: 'La tua recensione', de: 'Deine Bewertung' },
    'Trip Type': { fr: 'Type de séjour', es: 'Tipo de viaje', it: 'Tipo di viaggio', de: 'Reiseart' },
    'Optional': { fr: 'Optionnel', es: 'Opcional', it: 'Opzionale', de: 'Optional' },
    'Restaurant or Activity': { fr: 'Restaurant ou activité', es: 'Restaurante o actividad', it: 'Ristorante o attività', de: 'Restaurant oder Aktivität' },
    'Date of visit': { fr: 'Date de visite', es: 'Fecha de visita', it: 'Data della visita', de: 'Besuchsdatum' },
    'Publish My Review': { fr: 'Publier mon avis', es: 'Publicar mi reseña', it: 'Pubblica la mia recensione', de: 'Veröffentlichen' },

    // PAGES DÉTAILS
    'Visit official site': { fr: 'Visiter le site', es: 'Visitar sitio oficial', it: 'Visita il sito ufficiale', de: 'Offizielle Seite besuchen' },
    'Book / Visit site': { fr: 'Réserver / Visiter', es: 'Reservar / Visitar', it: 'Prenota / Visita', de: 'Buchen / Besuchen' },
    'Add to schedule': { fr: 'Ajouter au planning', es: 'Añadir al horario', it: 'Aggiungi al programma', de: 'Zum Zeitplan hinzufügen' },
    'AFYA reviews': { fr: 'avis AFYA', es: 'reseñas AFYA', it: 'recensioni AFYA', de: 'AFYA-Bewertungen' },
    'Address': { fr: 'Adresse', es: 'Dirección', it: 'Indirizzo', de: 'Adresse' },
    'Price range': { fr: 'Prix', es: 'Rango de precios', it: 'Fascia di prezzo', de: 'Preisspanne' },
    'Price': { fr: 'Prix', es: 'Precio', it: 'Prezzo', de: 'Preis' },
    'Distance': { fr: 'Distance', es: 'Distancia', it: 'Distanza', de: 'Entfernung' },
    'Duration (min)': { fr: 'Durée (min)', es: 'Duración (min)', it: 'Durata (min)', de: 'Dauer (Min)' },
    'About this': { fr: 'À propos de', es: 'Acerca de', it: 'Informazioni su', de: 'Über diese' },
    'A taste of': { fr: 'Un aperçu', es: 'Una muestra', it: 'Un assaggio', de: 'Ein Eindruck' },
    'opinion': { fr: 'd\'avis', es: 'de opinión', it: 'di opinione', de: 'der Meinung' },
    'activity': { fr: 'activité', es: 'actividad', it: 'attività', de: 'Aktivität' },
    'No reviews yet.': { fr: 'Pas encore d\'avis.', es: 'Aún no hay reseñas.', it: 'Nessuna recensione ancora.', de: 'Noch keine Bewertungen.' },
    'Be the first to share your experience!': { fr: 'Soyez le premier à partager votre expérience !', es: '¡Sé el primero en compartir tu experiencia!', it: 'Sii il primo a condividere la tua esperienza!', de: 'Sei der Erste, der seine Erfahrung teilt!' },

    // MON-ESPACE
    'My Wishlist': { fr: 'Ma wishlist', es: 'Mi lista de deseos', it: 'La mia wishlist', de: 'Meine Wishlist' },
    'My Programs': { fr: 'Mes programmes', es: 'Mis programas', it: 'I miei programmi', de: 'Meine Programme' },
    'New Program': { fr: 'Nouveau programme', es: 'Nuevo programa', it: 'Nuovo programma', de: 'Neues Programm' },
    'Your wishlist is empty': { fr: 'Votre wishlist est vide', es: 'Tu lista de deseos está vacía', it: 'La tua wishlist è vuota', de: 'Deine Wishlist ist leer' },
    'No programs yet': { fr: 'Pas encore de programmes', es: 'Aún no hay programas', it: 'Nessun programma ancora', de: 'Noch keine Programme' },
    'Create new program': { fr: 'Créer un programme', es: 'Crear nuevo programa', it: 'Crea nuovo programma', de: 'Neues Programm erstellen' },

    // PROGRAM PAGE
    'Day': { fr: 'Jour', es: 'Día', it: 'Giorno', de: 'Tag' },
    'No items planned for this day yet.': { fr: 'Aucun élément prévu pour ce jour.', es: 'Aún no hay elementos planeados para este día.', it: 'Nessun elemento previsto per questo giorno.', de: 'Noch keine Einträge für diesen Tag.' },
    'Danger zone': { fr: 'Zone dangereuse', es: 'Zona peligrosa', it: 'Zona di pericolo', de: 'Gefahrenzone' },
    'Delete this program': { fr: 'Supprimer ce programme', es: 'Eliminar este programa', it: 'Elimina questo programma', de: 'Dieses Programm löschen' },

    // PARAMETRES
    'Account Settings': { fr: 'Paramètres du compte', es: 'Ajustes de cuenta', it: 'Impostazioni account', de: 'Kontoeinstellungen' },
    'Profile': { fr: 'Profil', es: 'Perfil', it: 'Profilo', de: 'Profil' },
    'Security': { fr: 'Sécurité', es: 'Seguridad', it: 'Sicurezza', de: 'Sicherheit' },
    'Notifications': { fr: 'Notifications', es: 'Notificaciones', it: 'Notifiche', de: 'Benachrichtigungen' },
    'Danger Zone': { fr: 'Zone dangereuse', es: 'Zona peligrosa', it: 'Zona di pericolo', de: 'Gefahrenzone' },
    'Save changes': { fr: 'Enregistrer', es: 'Guardar cambios', it: 'Salva modifiche', de: 'Änderungen speichern' },
    'Save preferences': { fr: 'Enregistrer les préférences', es: 'Guardar preferencias', it: 'Salva preferenze', de: 'Einstellungen speichern' },
    'New password': { fr: 'Nouveau mot de passe', es: 'Nueva contraseña', it: 'Nuova password', de: 'Neues Passwort' },
    'Confirm new password': { fr: 'Confirmer le mot de passe', es: 'Confirmar contraseña', it: 'Conferma password', de: 'Passwort bestätigen' },
    'Update password': { fr: 'Mettre à jour', es: 'Actualizar contraseña', it: 'Aggiorna password', de: 'Passwort aktualisieren' },
    'Language': { fr: 'Langue', es: 'Idioma', it: 'Lingua', de: 'Sprache' },
    'Theme': { fr: 'Thème', es: 'Tema', it: 'Tema', de: 'Design' },
    'Light': { fr: 'Clair', es: 'Claro', it: 'Chiaro', de: 'Hell' },
    'Dark': { fr: 'Sombre', es: 'Oscuro', it: 'Scuro', de: 'Dunkel' },
    'Auto': { fr: 'Auto', es: 'Auto', it: 'Auto', de: 'Auto' },

    // ADD TO MODAL
    'Wishlist': { fr: 'Wishlist', es: 'Lista de deseos', it: 'Wishlist', de: 'Wishlist' },
    'Save as favorite for later': { fr: 'Enregistrer dans les favoris', es: 'Guardar como favorito', it: 'Salva come preferito', de: 'Als Favorit speichern' },
    'Add to a program': { fr: 'Ajouter à un programme', es: 'Añadir a un programa', it: 'Aggiungi a un programma', de: 'Zu einem Programm hinzufügen' },
    'Program name': { fr: 'Nom du programme', es: 'Nombre del programa', it: 'Nome del programma', de: 'Programmname' },
    'Start a new trip or itinerary': { fr: 'Commencer un nouveau séjour', es: 'Iniciar un nuevo viaje', it: 'Inizia un nuovo viaggio', de: 'Neue Reise starten' },

    // BOUTONS COMMUNS
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
    'Yes': { fr: 'Oui', es: 'Sí', it: 'Sì', de: 'Ja' },
    'No': { fr: 'Non', es: 'No', it: 'No', de: 'Nein' },

    // PARAMETRES — Sections
    'Account Settings': { fr: 'Paramètres du compte', es: 'Ajustes de cuenta', it: 'Impostazioni account', de: 'Kontoeinstellungen' },
    'Account': { fr: 'Compte', es: 'Cuenta', it: 'Account', de: 'Konto' },
    'Manage your profile, security and preferences': { fr: 'Gérez votre profil, sécurité et préférences', es: 'Gestiona tu perfil, seguridad y preferencias', it: 'Gestisci il tuo profilo, sicurezza e preferenze', de: 'Verwalte dein Profil, Sicherheit und Einstellungen' },
    'Update your personal information and avatar': { fr: 'Mettez à jour vos informations personnelles et votre avatar', es: 'Actualiza tu información personal y avatar', it: 'Aggiorna le tue informazioni personali e avatar', de: 'Aktualisiere deine persönlichen Daten und Avatar' },
    'Current avatar': { fr: 'Avatar actuel', es: 'Avatar actual', it: 'Avatar attuale', de: 'Aktueller Avatar' },
    'No avatar selected': { fr: 'Aucun avatar sélectionné', es: 'Ningún avatar seleccionado', it: 'Nessun avatar selezionato', de: 'Kein Avatar ausgewählt' },
    'Upload your photo': { fr: 'Téléchargez votre photo', es: 'Sube tu foto', it: 'Carica la tua foto', de: 'Foto hochladen' },
    'Choose from computer': { fr: 'Choisir depuis l\'ordinateur', es: 'Elegir desde el ordenador', it: 'Scegli dal computer', de: 'Vom Computer wählen' },
    'Remove photo': { fr: 'Supprimer la photo', es: 'Eliminar foto', it: 'Rimuovi foto', de: 'Foto entfernen' },
    'Or choose from the avatars below. JPG, PNG, WebP. Max 2MB.': { fr: 'Ou choisissez un avatar ci-dessous. JPG, PNG, WebP. Max 2 Mo.', es: 'O elige un avatar abajo. JPG, PNG, WebP. Máx 2MB.', it: 'O scegli un avatar qui sotto. JPG, PNG, WebP. Max 2MB.', de: 'Oder wähle einen Avatar unten. JPG, PNG, WebP. Max 2MB.' },
    'Choose your avatar': { fr: 'Choisissez votre avatar', es: 'Elige tu avatar', it: 'Scegli il tuo avatar', de: 'Wähle deinen Avatar' },
    'Adventurer': { fr: 'Aventurier', es: 'Aventurero', it: 'Avventuriero', de: 'Abenteurer' },
    'Lorelei': { fr: 'Lorelei', es: 'Lorelei', it: 'Lorelei', de: 'Lorelei' },
    'Big Smile': { fr: 'Grand sourire', es: 'Gran sonrisa', it: 'Grande sorriso', de: 'Großes Lächeln' },
    'Bottts': { fr: 'Robots', es: 'Robots', it: 'Robot', de: 'Roboter' },
    'Shapes': { fr: 'Formes', es: 'Formas', it: 'Forme', de: 'Formen' },
    'Email cannot be changed': { fr: 'L\'email ne peut pas être modifié', es: 'El correo no se puede cambiar', it: 'L\'email non può essere modificata', de: 'E-Mail kann nicht geändert werden' },
    'Member since': { fr: 'Membre depuis', es: 'Miembro desde', it: 'Membro dal', de: 'Mitglied seit' },
    'Last name': { fr: 'Nom', es: 'Apellido', it: 'Cognome', de: 'Nachname' },
    'Manage your password and account security': { fr: 'Gérez votre mot de passe et la sécurité du compte', es: 'Gestiona tu contraseña y seguridad', it: 'Gestisci la tua password e sicurezza', de: 'Verwalte dein Passwort und die Kontosicherheit' },
    'Choose what you want to be notified about': { fr: 'Choisissez ce dont vous voulez être notifié', es: 'Elige sobre qué quieres ser notificado', it: 'Scegli di cosa vuoi essere notificato', de: 'Wähle, worüber du benachrichtigt werden möchtest' },
    'Customize your AFYA experience': { fr: 'Personnalisez votre expérience AFYA', es: 'Personaliza tu experiencia AFYA', it: 'Personalizza la tua esperienza AFYA', de: 'Passe dein AFYA-Erlebnis an' },
    'Irreversible actions — proceed with caution': { fr: 'Actions irréversibles — procédez avec prudence', es: 'Acciones irreversibles — procede con cuidado', it: 'Azioni irreversibili — procedi con cautela', de: 'Unwiderrufliche Aktionen — vorsichtig vorgehen' },
    'Delete account': { fr: 'Supprimer le compte', es: 'Eliminar cuenta', it: 'Elimina account', de: 'Konto löschen' },
    'Delete my account': { fr: 'Supprimer mon compte', es: 'Eliminar mi cuenta', it: 'Elimina il mio account', de: 'Mein Konto löschen' },
    'Once you delete your account, there is no going back. All your data will be permanently removed.': { fr: 'Une fois votre compte supprimé, vous ne pourrez pas revenir en arrière. Toutes vos données seront supprimées définitivement.', es: 'Una vez que elimines tu cuenta, no hay vuelta atrás. Todos tus datos serán eliminados permanentemente.', it: 'Una volta eliminato il tuo account, non si potrà tornare indietro. Tutti i tuoi dati saranno rimossi permanentemente.', de: 'Sobald du dein Konto löschst, gibt es kein Zurück. Alle deine Daten werden dauerhaft entfernt.' },
    'Review approved': { fr: 'Avis approuvé', es: 'Reseña aprobada', it: 'Recensione approvata', de: 'Bewertung genehmigt' },
    'Review rejected': { fr: 'Avis rejeté', es: 'Reseña rechazada', it: 'Recensione respinta', de: 'Bewertung abgelehnt' },
    'New replies': { fr: 'Nouvelles réponses', es: 'Nuevas respuestas', it: 'Nuove risposte', de: 'Neue Antworten' },
    'Report updates': { fr: 'Mises à jour de signalement', es: 'Actualizaciones de informes', it: 'Aggiornamenti report', de: 'Meldungsupdates' },
    'News & updates': { fr: 'Actualités et nouveautés', es: 'Noticias y actualizaciones', it: 'Notizie e aggiornamenti', de: 'Neuigkeiten' },

    // MON-ESPACE
    'Welcome back,': { fr: 'Bon retour,', es: 'Bienvenido de nuevo,', it: 'Bentornato,', de: 'Willkommen zurück,' },
    'Your saved places, your trips, your memories.': { fr: 'Vos lieux enregistrés, vos voyages, vos souvenirs.', es: 'Tus lugares guardados, tus viajes, tus recuerdos.', it: 'I tuoi luoghi salvati, i tuoi viaggi, i tuoi ricordi.', de: 'Deine gespeicherten Orte, Reisen und Erinnerungen.' },
    'WISHLIST': { fr: 'WISHLIST', es: 'LISTA DESEOS', it: 'WISHLIST', de: 'WISHLIST' },
    'MY PROGRAMS': { fr: 'MES PROGRAMMES', es: 'MIS PROGRAMAS', it: 'I MIEI PROGRAMMI', de: 'MEINE PROGRAMME' },
    'Your wishlist is empty': { fr: 'Votre wishlist est vide', es: 'Tu lista de deseos está vacía', it: 'La tua wishlist è vuota', de: 'Deine Wishlist ist leer' },
    'Save restaurants and activities you want to explore later': { fr: 'Enregistrez les restaurants et activités à explorer plus tard', es: 'Guarda restaurantes y actividades para explorar después', it: 'Salva ristoranti e attività da esplorare in seguito', de: 'Speichere Restaurants und Aktivitäten zum späteren Erkunden' },
    'Discover places': { fr: 'Découvrir des lieux', es: 'Descubrir lugares', it: 'Scopri luoghi', de: 'Orte entdecken' },
    'Browse places': { fr: 'Parcourir les lieux', es: 'Explorar lugares', it: 'Esplora luoghi', de: 'Orte durchsuchen' },
    'Create a program to plan your trip day by day': { fr: 'Créez un programme pour planifier votre séjour jour par jour', es: 'Crea un programa para planificar tu viaje día a día', it: 'Crea un programma per pianificare il tuo viaggio giorno per giorno', de: 'Erstelle ein Programm, um deine Reise Tag für Tag zu planen' },

    // PROGRAM PAGE
    'days': { fr: 'jours', es: 'días', it: 'giorni', de: 'Tage' },
    'items': { fr: 'éléments', es: 'elementos', it: 'elementi', de: 'Einträge' },
    'item': { fr: 'élément', es: 'elemento', it: 'elemento', de: 'Eintrag' },
    'No dates set': { fr: 'Pas de dates', es: 'Sin fechas', it: 'Nessuna data', de: 'Keine Daten' },

    // PARAMETRES — Security section
    'At least 8 characters': { fr: 'Au moins 8 caractères', es: 'Al menos 8 caracteres', it: 'Almeno 8 caratteri', de: 'Mindestens 8 Zeichen' },
    'Must be at least 8 characters long': { fr: 'Doit faire au moins 8 caractères', es: 'Debe tener al menos 8 caracteres', it: 'Deve essere di almeno 8 caratteri', de: 'Muss mindestens 8 Zeichen lang sein' },
    'Re-type your new password': { fr: 'Confirmez votre nouveau mot de passe', es: 'Vuelve a escribir tu nueva contraseña', it: 'Riscrivi la tua nuova password', de: 'Wiederhole dein neues Passwort' },
    'Tip: Use a strong password mixing uppercase, lowercase, numbers and symbols.': { fr: 'Astuce : utilisez un mot de passe fort mélangeant majuscules, minuscules, chiffres et symboles.', es: 'Consejo: usa una contraseña fuerte que combine mayúsculas, minúsculas, números y símbolos.', it: 'Consiglio: usa una password forte con maiuscole, minuscole, numeri e simboli.', de: 'Tipp: Verwende ein starkes Passwort mit Groß-, Kleinbuchstaben, Zahlen und Symbolen.' },
    'Tip:': { fr: 'Astuce :', es: 'Consejo:', it: 'Consiglio:', de: 'Tipp:' },
    'Use a strong password mixing uppercase, lowercase, numbers and symbols.': { fr: 'Utilisez un mot de passe fort mélangeant majuscules, minuscules, chiffres et symboles.', es: 'Usa una contraseña fuerte que combine mayúsculas, minúsculas, números y símbolos.', it: 'Usa una password forte con maiuscole, minuscole, numeri e simboli.', de: 'Verwende ein starkes Passwort mit Groß-, Kleinbuchstaben, Zahlen und Symbolen.' },

    // PARAMETRES — Notifications section
    'When one of your reviews is approved by moderators': { fr: 'Quand l\'un de vos avis est approuvé par les modérateurs', es: 'Cuando una de tus reseñas es aprobada por moderadores', it: 'Quando una delle tue recensioni è approvata dai moderatori', de: 'Wenn eine deiner Bewertungen von Moderatoren genehmigt wird' },
    'When one of your reviews is rejected with a reason': { fr: 'Quand l\'un de vos avis est rejeté avec une raison', es: 'Cuando una de tus reseñas es rechazada con un motivo', it: 'Quando una delle tue recensioni è respinta con un motivo', de: 'Wenn eine deiner Bewertungen mit einem Grund abgelehnt wird' },
    'When someone replies to your reviews or replies': { fr: 'Quand quelqu\'un répond à vos avis ou réponses', es: 'Cuando alguien responde a tus reseñas o respuestas', it: 'Quando qualcuno risponde alle tue recensioni o risposte', de: 'Wenn jemand auf deine Bewertungen oder Antworten antwortet' },
    'When your report is reviewed by moderators': { fr: 'Quand votre signalement est traité par les modérateurs', es: 'Cuando tu informe es revisado por moderadores', it: 'Quando il tuo report è esaminato dai moderatori', de: 'Wenn deine Meldung von Moderatoren überprüft wird' },
    'Product news, tips, and travel inspiration (optional)': { fr: 'Actualités, conseils et inspirations de voyage (optionnel)', es: 'Noticias, consejos e inspiración de viaje (opcional)', it: 'Notizie, consigli e ispirazione di viaggio (opzionale)', de: 'Produktneuheiten, Tipps und Reiseinspirationen (optional)' },
    
    // PARAMETRES — Notifications avec emojis (matching exact)
    '✅ Review approved': { fr: '✅ Avis approuvé', es: '✅ Reseña aprobada', it: '✅ Recensione approvata', de: '✅ Bewertung genehmigt' },
    '⚠️ Review rejected': { fr: '⚠️ Avis rejeté', es: '⚠️ Reseña rechazada', it: '⚠️ Recensione respinta', de: '⚠️ Bewertung abgelehnt' },
    '💬 New replies': { fr: '💬 Nouvelles réponses', es: '💬 Nuevas respuestas', it: '💬 Nuove risposte', de: '💬 Neue Antworten' },
    '🚨 Report updates': { fr: '🚨 Mises à jour de signalement', es: '🚨 Actualizaciones de informes', it: '🚨 Aggiornamenti report', de: '🚨 Meldungsupdates' },
    '📣 News & updates': { fr: '📣 Actualités et nouveautés', es: '📣 Noticias y novedades', it: '📣 Notizie e aggiornamenti', de: '📣 Neuigkeiten' },
    
    // PARAMETRES — Boutons
    '💾 Save preferences': { fr: '💾 Enregistrer les préférences', es: '💾 Guardar preferencias', it: '💾 Salva preferenze', de: '💾 Einstellungen speichern' },
    '💾 Save changes': { fr: '💾 Enregistrer', es: '💾 Guardar cambios', it: '💾 Salva modifiche', de: '💾 Änderungen speichern' },
    '🔐 Update password': { fr: '🔐 Mettre à jour le mot de passe', es: '🔐 Actualizar contraseña', it: '🔐 Aggiorna password', de: '🔐 Passwort aktualisieren' },
    '🗑️ Delete my account': { fr: '🗑️ Supprimer mon compte', es: '🗑️ Eliminar mi cuenta', it: '🗑️ Elimina il mio account', de: '🗑️ Mein Konto löschen' },
    '📸 Choose from computer': { fr: '📸 Choisir depuis l\'ordinateur', es: '📸 Elegir desde el ordenador', it: '📸 Scegli dal computer', de: '📸 Vom Computer wählen' },
    '🗑️ Remove photo': { fr: '🗑️ Supprimer la photo', es: '🗑️ Eliminar foto', it: '🗑️ Rimuovi foto', de: '🗑️ Foto entfernen' },
    '📸 Upload your photo': { fr: '📸 Téléchargez votre photo', es: '📸 Sube tu foto', it: '📸 Carica la tua foto', de: '📸 Foto hochladen' },
    
    // PARAMETRES — Theme cards
    '☀️ Light': { fr: '☀️ Clair', es: '☀️ Claro', it: '☀️ Chiaro', de: '☀️ Hell' },
    '🌙 Dark': { fr: '🌙 Sombre', es: '🌙 Oscuro', it: '🌙 Scuro', de: '🌙 Dunkel' },
    '⚙️ Auto': { fr: '⚙️ Auto', es: '⚙️ Auto', it: '⚙️ Auto', de: '⚙️ Auto' },
    '🌐 Language': { fr: '🌐 Langue', es: '🌐 Idioma', it: '🌐 Lingua', de: '🌐 Sprache' },
    '🎨 Theme': { fr: '🎨 Thème', es: '🎨 Tema', it: '🎨 Tema', de: '🎨 Design' },
    
    // PARAMETRES — Sidebar avec emojis
    '👤 Profile': { fr: '👤 Profil', es: '👤 Perfil', it: '👤 Profilo', de: '👤 Profil' },
    '🔐 Security': { fr: '🔐 Sécurité', es: '🔐 Seguridad', it: '🔐 Sicurezza', de: '🔐 Sicherheit' },
    '🔔 Notifications': { fr: '🔔 Notifications', es: '🔔 Notificaciones', it: '🔔 Notifiche', de: '🔔 Benachrichtigungen' },
    '🎨 Preferences': { fr: '🎨 Préférences', es: '🎨 Preferencias', it: '🎨 Preferenze', de: '🎨 Präferenzen' },
    '⚠️ Danger Zone': { fr: '⚠️ Zone dangereuse', es: '⚠️ Zona peligrosa', it: '⚠️ Zona di pericolo', de: '⚠️ Gefahrenzone' },
    
    // PARAMETRES — Danger zone
    '⚠️ Delete account': { fr: '⚠️ Supprimer le compte', es: '⚠️ Eliminar cuenta', it: '⚠️ Elimina account', de: '⚠️ Konto löschen' },
    'Delete account': { fr: 'Supprimer le compte', es: 'Eliminar cuenta', it: 'Elimina account', de: 'Konto löschen' },
    
    // MON-ESPACE — boutons et emojis
    '❤️ Wishlist': { fr: '❤️ Wishlist', es: '❤️ Lista de deseos', it: '❤️ Wishlist', de: '❤️ Wishlist' },
    '📅 My Programs': { fr: '📅 Mes programmes', es: '📅 Mis programas', it: '📅 I miei programmi', de: '📅 Meine Programme' },
    '+ New Program': { fr: '+ Nouveau programme', es: '+ Nuevo programa', it: '+ Nuovo programma', de: '+ Neues Programm' },
    
    // PLANNER — Boutons activités AVEC emojis (matching exact)
    '🍽 Food': { fr: '🍽 Cuisine', es: '🍽 Comida', it: '🍽 Cibo', de: '🍽 Essen' },
    '🍽️ Food': { fr: '🍽️ Cuisine', es: '🍽️ Comida', it: '🍽️ Cibo', de: '🍽️ Essen' },
    '🌿 Outdoors': { fr: '🌿 Plein air', es: '🌿 Aire libre', it: '🌿 All\'aperto', de: '🌿 Draußen' },
    '🏛 Culture': { fr: '🏛 Culture', es: '🏛 Cultura', it: '🏛 Cultura', de: '🏛 Kultur' },
    '🏛️ Culture': { fr: '🏛️ Culture', es: '🏛️ Cultura', it: '🏛️ Cultura', de: '🏛️ Kultur' },
    '⚽ Sports': { fr: '⚽ Sports', es: '⚽ Deportes', it: '⚽ Sport', de: '⚽ Sport' },
    '📸 Sightseeing': { fr: '📸 Tourisme', es: '📸 Turismo', it: '📸 Visite turistiche', de: '📸 Sehenswürdigkeiten' },
    '🎵 Nightlife': { fr: '🎵 Vie nocturne', es: '🎵 Vida nocturna', it: '🎵 Vita notturna', de: '🎵 Nachtleben' },
    '🎶 Nightlife': { fr: '🎶 Vie nocturne', es: '🎶 Vida nocturna', it: '🎶 Vita notturna', de: '🎶 Nachtleben' },
    '🧘 Wellness': { fr: '🧘 Bien-être', es: '🧘 Bienestar', it: '🧘 Benessere', de: '🧘 Wellness' },
    '🧘‍♀️ Wellness': { fr: '🧘‍♀️ Bien-être', es: '🧘‍♀️ Bienestar', it: '🧘‍♀️ Benessere', de: '🧘‍♀️ Wellness' },
    '🛍 Shopping': { fr: '🛍 Shopping', es: '🛍 Compras', it: '🛍 Shopping', de: '🛍 Einkaufen' },
    '🛍️ Shopping': { fr: '🛍️ Shopping', es: '🛍️ Compras', it: '🛍️ Shopping', de: '🛍️ Einkaufen' },
    '🎭 Shows': { fr: '🎭 Spectacles', es: '🎭 Espectáculos', it: '🎭 Spettacoli', de: '🎭 Shows' },
    
    // PLANNER — Boutons "ALL"
    '🌟 All': { fr: '🌟 Tout', es: '🌟 Todo', it: '🌟 Tutto', de: '🌟 Alle' },
    '✨ All': { fr: '✨ Tout', es: '✨ Todo', it: '✨ Tutto', de: '✨ Alle' },
    
    // REVIEWS — Boutons avec emoji
    '✏️ Write a review': { fr: '✏️ Écrire un avis', es: '✏️ Escribir reseña', it: '✏️ Scrivi recensione', de: '✏️ Bewertung schreiben' },
    '📝 Write a review': { fr: '📝 Écrire un avis', es: '📝 Escribir reseña', it: '📝 Scrivi recensione', de: '📝 Bewertung schreiben' },
    
    // REVIEWS — Compteurs dynamiques (le nombre est conservé via regex côté JS)
    '__based_on_reviews__': { 
      _pattern: /^Based on (\d+) reviews?$/,
      _template: { 
        fr: 'Basé sur $1 avis', 
        es: 'Basado en $1 reseñas', 
        it: 'Basato su $1 recensioni', 
        de: 'Basierend auf $1 Bewertungen' 
      }
    },
    '__showing_restaurants__': {
      _pattern: /^Showing (\d+) restaurants?$/,
      _template: {
        fr: 'Affichage de $1 restaurants',
        es: 'Mostrando $1 restaurantes',
        it: 'Mostrando $1 ristoranti',
        de: 'Zeige $1 Restaurants'
      }
    },
    '__showing_activities__': {
      _pattern: /^Showing (\d+) activities$/,
      _template: {
        fr: 'Affichage de $1 activités',
        es: 'Mostrando $1 actividades',
        it: 'Mostrando $1 attività',
        de: 'Zeige $1 Aktivitäten'
      }
    },
    '__based_on_x_reviews__': {
      _pattern: /^Based on (\d+) review$/,
      _template: {
        fr: 'Basé sur $1 avis',
        es: 'Basado en $1 reseña',
        it: 'Basato su $1 recensione',
        de: 'Basierend auf $1 Bewertung'
      }
    },

    // SECTION RESTAURANTS / ACTIVITIES — Sub-headings
    'Find the': { fr: 'Trouvez la', es: 'Encuentra la', it: 'Trova il', de: 'Finde den' },
    'perfect table': { fr: 'table parfaite', es: 'mesa perfecta', it: 'tavolo perfetto', de: 'perfekten Tisch' },
    'Browse, filter, read real guest reviews and add to your schedule.': { fr: 'Parcourez, filtrez, lisez de vrais avis et ajoutez à votre planning.', es: 'Explora, filtra, lee reseñas reales y añade a tu horario.', it: 'Sfoglia, filtra, leggi recensioni reali e aggiungi al tuo programma.', de: 'Durchsuche, filtere, lies echte Bewertungen und füge zum Zeitplan hinzu.' },
    'Hand-picked by AI and validated by thousands of real travellers.': { fr: 'Sélectionnées par l\'IA et validées par des milliers de vrais voyageurs.', es: 'Seleccionadas por la IA y validadas por miles de viajeros reales.', it: 'Selezionate dall\'AI e convalidate da migliaia di veri viaggiatori.', de: 'Von der KI handverlesen und von Tausenden echten Reisenden bestätigt.' },

    // RESTAURANTS — Filtres et options
    'Any': { fr: 'Toutes', es: 'Cualquiera', it: 'Qualsiasi', de: 'Alle' },
    'Distance max': { fr: 'Distance max', es: 'Distancia máx', it: 'Distanza max', de: 'Max. Entfernung' },
    'Note min': { fr: 'Note min', es: 'Valoración mín', it: 'Voto min', de: 'Min. Bewertung' },
    'BUDGET ($)': { fr: 'BUDGET ($)', es: 'PRESUPUESTO ($)', it: 'BUDGET ($)', de: 'BUDGET ($)' },
    'Top': { fr: 'Top', es: 'Top', it: 'Top', de: 'Top' },
    'Near': { fr: 'Proche', es: 'Cerca', it: 'Vicino', de: 'Nah' },
    'Most': { fr: 'Plus', es: 'Más', it: 'Più', de: 'Mehr' },
    'Showing 4 restaurants': { fr: 'Affichage de 4 restaurants', es: 'Mostrando 4 restaurantes', it: 'Mostrando 4 ristoranti', de: 'Zeige 4 Restaurants' },

    // REVIEWS SECTION détaillées
    'What travellers': { fr: 'Ce que les voyageurs', es: 'Lo que dicen', it: 'Cosa dicono', de: 'Was Reisende' },
    'are saying': { fr: 'en disent', es: 'los viajeros', it: 'i viaggiatori', de: 'sagen' },
    'Write a review': { fr: 'Écrire un avis', es: 'Escribir reseña', it: 'Scrivi recensione', de: 'Bewertung schreiben' },
    'Based on': { fr: 'Basé sur', es: 'Basado en', it: 'Basato su', de: 'Basierend auf' },
    'reviews': { fr: 'avis', es: 'reseñas', it: 'recensioni', de: 'Bewertungen' },

    // FEATURES SECTION
    'Why AFYA': { fr: 'Pourquoi AFYA', es: 'Por qué AFYA', it: 'Perché AFYA', de: 'Warum AFYA' },
    'Everything in': { fr: 'Tout au', es: 'Todo en', it: 'Tutto in', de: 'Alles an' },
    'one place': { fr: 'même endroit', es: 'un lugar', it: 'un posto', de: 'einem Ort' },
    'AI Planning': { fr: 'Planification IA', es: 'Planificación IA', it: 'Pianificazione AI', de: 'KI-Planung' },
    'Context-aware AI builds full-day schedules tailored to your group, budget and interests.': { fr: 'Une IA contextuelle construit des plannings adaptés à votre groupe, budget et centres d\'intérêt.', es: 'Una IA contextual crea horarios adaptados a tu grupo, presupuesto e intereses.', it: 'L\'AI contestuale crea programmi adattati al tuo gruppo, budget e interessi.', de: 'Kontextbewusste KI erstellt Tagespläne, die auf deine Gruppe, dein Budget und deine Interessen zugeschnitten sind.' },
    'Real Reviews': { fr: 'Vrais avis', es: 'Reseñas reales', it: 'Recensioni reali', de: 'Echte Bewertungen' },
    'Thousands of verified reviews from AFYA users, Trustpilot, and Google Maps.': { fr: 'Des milliers d\'avis vérifiés provenant des utilisateurs AFYA, Trustpilot et Google Maps.', es: 'Miles de reseñas verificadas de usuarios AFYA, Trustpilot y Google Maps.', it: 'Migliaia di recensioni verificate da utenti AFYA, Trustpilot e Google Maps.', de: 'Tausende von verifizierten Bewertungen von AFYA-Nutzern, Trustpilot und Google Maps.' },
    'Calendar Sync': { fr: 'Synchro calendrier', es: 'Sincronización con calendario', it: 'Sincronizzazione calendario', de: 'Kalender-Synchronisation' },
    'Every activity syncs to your phone\'s calendar with departure reminders.': { fr: 'Chaque activité se synchronise avec votre calendrier avec des rappels de départ.', es: 'Cada actividad se sincroniza con tu calendario con recordatorios de salida.', it: 'Ogni attività si sincronizza con il tuo calendario con promemoria di partenza.', de: 'Jede Aktivität wird mit deinem Kalender synchronisiert, inklusive Abfahrtserinnerungen.' },
    'Budget Control': { fr: 'Contrôle du budget', es: 'Control del presupuesto', it: 'Controllo budget', de: 'Budgetkontrolle' },
    'Set precise min/max budgets — AFYA only shows what fits.': { fr: 'Définissez des budgets min/max précis — AFYA n\'affiche que ce qui convient.', es: 'Establece presupuestos mín/máx precisos — AFYA solo muestra lo que encaja.', it: 'Imposta budget min/max precisi — AFYA mostra solo ciò che si adatta.', de: 'Lege präzise Min/Max-Budgets fest — AFYA zeigt nur, was passt.' },
    'Radius Filters': { fr: 'Filtres de rayon', es: 'Filtros de radio', it: 'Filtri di raggio', de: 'Radius-Filter' },
    'From 500m walks to 50km day trips — total control of your range.': { fr: 'Des balades de 500m aux excursions de 50km — contrôle total de votre rayon.', es: 'Desde caminatas de 500m hasta excursiones de 50km — control total de tu alcance.', it: 'Da passeggiate di 500m a gite di 50km — controllo totale del tuo raggio.', de: 'Von 500m-Spaziergängen bis zu 50km-Tagesausflügen — totale Kontrolle über deine Reichweite.' },
    'Hotel Packages': { fr: 'Packs hôtels', es: 'Paquetes hoteleros', it: 'Pacchetti hotel', de: 'Hotel-Pakete' },
    'Multi-day trips include curated hotel suggestions per night.': { fr: 'Les séjours multi-jours incluent des suggestions d\'hôtels sélectionnés par nuit.', es: 'Los viajes de varios días incluyen sugerencias de hoteles seleccionados por noche.', it: 'I viaggi di più giorni includono suggerimenti di hotel selezionati per notte.', de: 'Mehrtägige Reisen enthalten kuratierte Hotelvorschläge pro Nacht.' },

    // CTA FINAL
    'Join 50,000+ people': { fr: 'Rejoignez 50 000+ personnes', es: 'Únete a 50.000+ personas', it: 'Unisciti a 50.000+ persone', de: 'Schließe dich 50.000+ Menschen an' },
    'planning better days': { fr: 'qui planifient mieux leurs journées', es: 'planificando días mejores', it: 'che pianificano giorni migliori', de: 'die bessere Tage planen' },
    'Free to start. No credit card required.': { fr: 'Gratuit pour commencer. Pas de carte bancaire requise.', es: 'Gratis para empezar. Sin tarjeta de crédito.', it: 'Inizio gratuito. Nessuna carta di credito richiesta.', de: 'Kostenloser Start. Keine Kreditkarte erforderlich.' },
    'Start Planning Free': { fr: 'Commencer gratuitement', es: 'Empezar gratis', it: 'Inizia gratis', de: 'Kostenlos starten' },
    'Start planning free': { fr: 'Commencer gratuitement', es: 'Empezar gratis', it: 'Inizia gratis', de: 'Kostenlos starten' }
  };

  // ═══════════════════════════════════════════════════════════
  // 2) ÉTAT INTERNE
  // ═══════════════════════════════════════════════════════════
  
  const SUPPORTED_LANGS = ['en', 'fr', 'es', 'it', 'de'];
  
  // 🔑 PERSISTANCE FORTE : lit depuis localStorage AU CHARGEMENT
  let currentLang = (function() {
    try {
      const saved = localStorage.getItem('afya_lang');
      if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
    } catch(e) {}
    return 'en';
  })();
  
  const originalTexts = new WeakMap();
  let mutationObserver = null;

  // ═══════════════════════════════════════════════════════════
  // 3) FONCTIONS DE TRADUCTION
  // ═══════════════════════════════════════════════════════════
  
  function translate(text) {
    if (!text) return text;
    const trimmed = text.trim();
    if (!trimmed) return text;
    if (currentLang === 'en') return text;
    
    // 1) Cherche traduction exacte
    const entry = TRANSLATIONS[trimmed];
    if (entry && entry[currentLang]) {
      return text.replace(trimmed, entry[currentLang]);
    }
    
    // 2) Cherche un pattern dynamique (avec nombre)
    for (const key in TRANSLATIONS) {
      const t = TRANSLATIONS[key];
      if (t._pattern && t._template && t._template[currentLang]) {
        const match = trimmed.match(t._pattern);
        if (match) {
          let translated = t._template[currentLang];
          // Remplace $1, $2, $3... par les groupes capturés
          for (let i = 1; i < match.length; i++) {
            translated = translated.replace('$' + i, match[i]);
          }
          return text.replace(trimmed, translated);
        }
      }
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
      const tag = node.tagName?.toLowerCase();
      if (tag === 'script' || tag === 'style' || tag === 'code' || tag === 'pre') return;
      if (node.classList && node.classList.contains('no-translate')) return;
      if (node.getAttribute && node.getAttribute('translate') === 'no') return;
      
      if (node.hasAttribute && node.hasAttribute('placeholder')) {
        const orig = node.dataset._origPlaceholder || node.getAttribute('placeholder');
        if (!node.dataset._origPlaceholder) node.dataset._origPlaceholder = orig;
        const tr = TRANSLATIONS[orig.trim()];
        if (tr && tr[currentLang]) node.setAttribute('placeholder', tr[currentLang]);
        else if (currentLang === 'en') node.setAttribute('placeholder', orig);
      }
      
      for (const child of node.childNodes) {
        translateNode(child);
      }
    }
  }

  function translatePage() {
    if (currentLang === 'en') return;
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
      }
    });
    
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: false
    });
  }

  // ═══════════════════════════════════════════════════════════
  // 5) SYNCHRONISATION AVEC LE SYSTÈME INTERNE setLang()
  // ═══════════════════════════════════════════════════════════
  
  function syncInternalSystem() {
    // 🔑 Force la mise à jour du système interne de la page
    if (typeof window.setLang === 'function' && !window._afyaI18nHooked) {
      window._afyaI18nHooked = true;
      const originalSetLang = window.setLang;
      window.setLang = function(lang) {
        originalSetLang.call(this, lang);
        window.afyaI18n.setLang(lang);
      };
    }
    
    // 🔑 Si la page a une variable currentLang globale, on la synchronise
    if (typeof window.currentLang !== 'undefined' && window.currentLang !== currentLang) {
      try {
        window.currentLang = currentLang;
        // Si elle a une fonction pour mettre à jour le picker visuel
        if (typeof window.applyLang === 'function') window.applyLang(currentLang);
        if (typeof window.updateLangPicker === 'function') window.updateLangPicker(currentLang);
      } catch(e) {}
    }
  }

  // ═══════════════════════════════════════════════════════════
  // 6) API PUBLIQUE
  // ═══════════════════════════════════════════════════════════
  
  window.afyaI18n = {
    setLang: function(lang) {
      if (!SUPPORTED_LANGS.includes(lang)) return;
      currentLang = lang;
      try { localStorage.setItem('afya_lang', lang); } catch(e) {}
      
      if (lang === 'en') {
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
      
      document.dispatchEvent(new CustomEvent('afya:langchange', { detail: { lang } }));
    },
    
    getLang: function() { return currentLang; },
    getSupportedLangs: function() { return [...SUPPORTED_LANGS]; },
    translate: translate,
    refresh: function() { translatePage(); }
  };

  // ═══════════════════════════════════════════════════════════
  // 7) INITIALISATION AVEC PERSISTANCE FORTE
  // ═══════════════════════════════════════════════════════════
  
  function init() {
    // Première traduction si pas en anglais
    translatePage();
    
    // Observer pour les contenus dynamiques
    startObserver();
    
    // Synchronise avec le système interne de la page
    syncInternalSystem();
    
    // Re-synchronise plusieurs fois pour rattraper les chargements tardifs
    setTimeout(() => { translatePage(); syncInternalSystem(); }, 200);
    setTimeout(() => { translatePage(); syncInternalSystem(); }, 800);
    setTimeout(() => { translatePage(); syncInternalSystem(); }, 2000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  console.log('✅ AFYA i18n loaded — Current language:', currentLang);
})();