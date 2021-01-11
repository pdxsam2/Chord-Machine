/* 
    Verbal Design:
        User can select a chord by: 
            - min/major
            - 4,6,7,9,13
        Major scale:
            - Increases steps in the following pattern: 1,1,0.5,1,1,1,0.5
        Minor scale: 
            - Increases steps in: 1,0.5,1,1,0.5,1,1
        AddX
            - just add the note into the chord
*/

const notes = ['C', 'Db', 'D','Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
const baseTriad = [1,3,5]

//both of these are from the base note
const majSteps = [1,1,0.5,1,1,1,0.5]
const minSteps = [1,0.5,1,1,0.5,1,1]

/*
 @params: 
base: base note
key: (technically used for determining min/maj but also effects all future chord values)
modifiers: list of modified notes 
*/
//TODO: modifiers need some extra logic (e.g. flat 7 needs to be adjusted)
function buildChord(base, key, modifiers){
    let min;
    let keyIndex;
    let baseIndex;
    if(base !== key){
        min= true;
        keyIndex= notes.indexOf(key);
    }
    baseIndex= notes.indexOf(base);

    if(min){
        let notesI= baseIndex;
        let chord= [];
        for(let i= 0; i < minSteps.length; ++i){
            if(baseTriad.indexOf(i+1) !== -1){
                chord.push(notes[notesI]);
            }
            else if(modifiers.indexOf(i+1) !== -1) {
                chord.push(notes[notesI]);
            }
            notesI += (minSteps[i] * 2) 
            if(notesI > 11) notesI = notesI % 12;
        }
        return chord; 
    }
    else{
        let notesI= baseIndex;
        let chord= [];
        for(let i= 0; i < majSteps.length; ++i){
            if(baseTriad.indexOf(i+1) !== -1){
                chord.push(notes[notesI]);
            }
            else if(modifiers.indexOf(i+1) !== -1) {
                chord.push(notes[notesI]);
            }
            notesI += majSteps[i] * 2;
            if(notesI > 11) notesI = notesI % 12;
        }
        return chord;
    }
}

console.log(buildChord('C', 'Eb', []));
console.log(buildChord('B', 'B', []));

