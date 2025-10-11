let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// --- Fonctions principales ---
function ajouterTache(texte) {
    if (texte.trim() === "") return;
    tasks.push({ texte, done: false });
    sauvegarder();
    afficherTaches();
}
    function supprimerTache(index) {
    tasks.splice(index, 1);
    sauvegarder();
    afficherTaches();
}
    function terminerTache(index) {
    tasks[index].done = true;
    sauvegarder();
    afficherTaches();
}
    function sauvegarder() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
    function afficherTaches() {

    const liste = document.getElementById("taskList");
    const recherche = document.getElementById("searchInput").value.toLowerCase();
    liste.innerHTML = "";

    tasks.forEach((tache, index) => {
        if (!tache.texte.toLowerCase().startsWith(recherche)) return;
        const li = document.createElement("li");
        if (tache.done) li.classList.add("completed");
        const span = document.createElement("span");
    span.textContent = tache.texte;
    const actions = document.createElement("div");
    actions.classList.add("actions");
    const btnDone = document.createElement("button");

    btnDone.textContent = "Terminer";
    btnDone.classList.add("done");
    btnDone.onclick = () => terminerTache(index);
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Supprimer";
    btnDelete.onclick = () => supprimerTache(index);
    actions.appendChild(btnDone);
    actions.appendChild(btnDelete);
    li.appendChild(span);
    li.appendChild(actions);
    liste.appendChild(li);
    });
      // Mettre à jour compteur
        const total = tasks.length;
        const terminees = tasks.filter(t => t.done).length;
        document.getElementById("counter").textContent =
        `Tâches : ${total} | Terminées : ${terminees} | En cours : ${total - terminees}`;
}
    // --- Gestion des événements ---
    document.getElementById("addBtn").addEventListener("click", () => {
    ajouterTache(document.getElementById("taskInput").value);
    document.getElementById("taskInput").value = "";
});
    document.getElementById("taskInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        ajouterTache(e.target.value);
        e.target.value = "";
    }
});
    document.getElementById("searchInput").addEventListener("input", afficherTaches);
    document.getElementById("clearAll").addEventListener("click", () => {

    if (confirm("Supprimer toutes les tâches ?")) {
        tasks = [];
        sauvegarder();
        afficherTaches();
        }
});
    // --- Chargement initial ---
    afficherTaches();