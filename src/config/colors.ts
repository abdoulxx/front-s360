/**
 * Configuration centralisée des couleurs de l'application
 * Modifier ces valeurs pour changer les couleurs globalement
 */

export const COLORS = {
  // Sidebar
  sidebar: {
    background: '#FF8201', // Fond de la sidebar
    text: '#FFFFFF', // Texte blanc
    logo: '#FFFFFF', // Logo S360°
    collapseButton: '#FFFFFF', // Fond du bouton collapse
    collapseButtonIcon: '#FF8201', // Icône du bouton collapse
    hover: '#E07401', // Couleur au survol des items
    separator: '#FFAB5E', // Couleur des séparateurs
    activeBackground: '#FFFFFF', // Fond du bouton actif (blanc)
    activeText: '#FF8201', // Texte du bouton actif (orange)
  },

  // Background des pages dashboard
  background: {
    gradientFrom: '#E4E4E4', // Haut du dégradé (violet foncé)
    gradientTo: '#E4E4E4', // Bas du dégradé (violet clair)
  },

  // Couleurs principales de l'application
  primary: {
    main: '#6B63C5', // Violet principal (boutons, onglets)
    dark: '#5B55B0', // Violet foncé (hover, headers)
  },

  // Couleurs pour la page Contrôle S360
  controle: {
    searchCard: '#FF9F3D', // Fond des cartes "RECHERCHE AVANCEE"
    searchButton: '#049B04', // Couleur du bouton Recherche
    searchButtonHover: '#038803', // Couleur du bouton Recherche au survol
    tabsBackground: '#FF9F3D', // Fond de la barre des onglets
    tabActive: '#FFFFFF', // Fond de l'onglet actif (blanc)
    tabInactive: '#FF9F3D', // Fond des onglets inactifs (orange)
    tableHeader: '#FF9F3D', // Fond du header du tableau
    emptyStateIcon: '#049B04', // Couleur de l'icône état vide (vert)
  },

  // Couleurs secondaires
  secondary: {
    orange: '#FF6B35', // Orange accent
  },

  // Couleurs de statut
  status: {
    success: '#22c55e', // Vert (complété)
    error: '#ef4444', // Rouge (erreur)
    pending: '#6b7280', // Gris (en attente)
  },
} as const;