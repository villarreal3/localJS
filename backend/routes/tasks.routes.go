package routes

import "net/http"

func homeHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hola que harce"))
}
