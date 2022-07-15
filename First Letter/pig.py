def pig_it(text):
    phrases = text.split(" ")
    new_phrases = []
    for phrase in phrases:
        if phrase.isalpha():
            new_phrase = phrase[1:] + phrase[0] + "ay"
            new_phrases.append(new_phrase)
        else:
            new_phrases.append(phrase)
    return " ".join(new_phrases)

print (pig_it('Pig latin is cool'))
print (pig_it('Hello world !'))