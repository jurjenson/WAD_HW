const POSTS_URL = "https://api.jsonbin.io/v3/b/6ae10093ffd5d1605390e7b8";

// "2026-09-23" -> "Sep 23,2026"
function formatDate(isoString) {
    return new Date(isoString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year:"numeric"
    })
}

