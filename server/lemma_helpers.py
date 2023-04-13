import spacy 

def get_lemmas(input_text):
    nlp = spacy.load('fr_core_news_sm')
    doc = nlp(input_text)
    return [(token.lemma_.lower(), token.pos_) for token in doc if not token.is_stop and token.is_alpha]


def get_frequent_lemmas(lemmas):
    lemma_freq = {}
    for lemma, pos in lemmas:
        if lemma not in lemma_freq:
            lemma_freq[lemma] = {"frequency": 1, "pos": pos}
        else:
            lemma_freq[lemma]["frequency"] += 1
    return {k: v for k, v in lemma_freq.items() if v["frequency"] >= 3}


def get_sorted_lemmas(frequent_lemmas):
    return sorted(frequent_lemmas.items(), key=lambda x: x[1]["frequency"], reverse=True)


def add_rank(sorted_lemmas):
    result = [{"lemma": l[0], "frequency": l[1]["frequency"], "pos": l[1]["pos"]} for l in sorted_lemmas]
    for i, r in enumerate(result):
        r["rank"] = i + 1
    return result