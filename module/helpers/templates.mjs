/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/wizardworld/templates/actor/parts/actor-moves.html",
    "systems/wizardworld/templates/actor/parts/actor-spells.html",
    "systems/wizardworld/templates/actor/parts/actor-personal.html",
    "systems/wizardworld/templates/actor/parts/actor-health.html",
    "systems/wizardworld/templates/actor/parts/covenant-library.html",
    
    "systems/wizardworld/templates/actor/parts/actor-effects.html",
  ]);
};
