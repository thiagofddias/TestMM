(defn reverse-string-in-pairs [input]
  (apply str (flatten (reverse (partition 2 input)))))

;(println (reverse-string-in-pairs "abcd"))
;(println (reverse-string-in-pairs "abcdef"))
;(println (reverse-string-in-pairs "ab"))
(println (reverse-string-in-pairs "abc"))

;; Nessa função, a string foi dividida em pares pela função "partition", então ela ficaria como ("a b") ("c d"). depois
;; foi feito um "reverse" nesse valor, então ele passa a ficar como ("c d", "a b"). Após isso, foi feito
;; um "flatten", que é uma função nativa do clojure para transformar varias listas em uma lista só, então a lista passa
;; a ser como ("d" "c" "b" "a"). Para finalizar e a função retornar o valor como string, foi aplicada uma função applu str
