import React from 'react';

function OneTwo() {
  return (
    <div id="main">
      <div className="top">
        <div className="title">Lesson 2: The Alphabet</div>
        <div className="sub">
          <div className="time">🕙 8 min</div>
          <div className="difficulty">2</div>
        </div>
      </div>
      <div className="mbody">
        <div className="bodyText">
          Welcome to the second lesson! Here you will learn all about the Coptic
          alphabet. First, one important distinction must be made. This course
          will be following Greco-Bohairic (also known as New Bohairic)
          pronunciation instead of Old Bohairic. It is the more widely used
          pronunciation currently, although some villages still use their native
          dialects in their liturgical services (if you want to learn more about
          the difference, go <a href="https://en.wikipedia.org/wiki/Coptic_pronunciation_reform">here</a>).
          <h2>Vowels</h2>
            <coptic id="alpha">Aa</coptic>='ah' (w<b>a</b>ter)<br />
            <coptic id="eey">Ee</coptic>='eh' (m<b>e</b>t)<br />
            <coptic id="eeta">?/</coptic>='ee' (b<b>ee</b>)<br />
            <coptic id="yota">Ii</coptic>='i' (p<b>i</b>zza), 'y' at the beginning of a word<br />
            <coptic id="oh">Oo</coptic>='oh' (r<b>o</b>se)<br />
            <coptic id="uhpsilon">Uu</coptic>='v' when next to another vowel (ⲉⲩ='e<b>v</b>'), 'u' if next to <coptic id="oh">o</coptic> (ⲟⲩ='o<b>u</b>')<br />
            <coptic id="oou">Ww</coptic>=long 'o' (l<b>o</b>ng)<br />
          <h2>Consonants</h2>
            <coptic id="beta">Bb</coptic>='v' (<b>v</b>iolin), 'b' at the end of a word (<b>b</b>at)<br />
            <coptic id="gamma">Gg</coptic>='gh' (no direct english equivalent)<br />
            <coptic id="delta">Dd</coptic>='d' (<b>d</b>avid)<br />
            <coptic id="zeeta">Zz</coptic>='z' (<b>z</b>ebra)<br />
            <coptic id="theta">Yy</coptic>='th' (pa<b>th</b>)<br />
            <coptic id="kappa">Kk</coptic>='k' (ra<b>k</b>e)<br />
            <coptic id="lola">Ll</coptic>='l' (<b>l</b>augh)<br />
            <coptic id="mey">Mm</coptic>='m' (<b>m</b>ake)<br />
            <coptic id="ney">Nn</coptic>='n' (rai<b>n</b>)<br />
            <coptic id="exee">Xx</coptic>='x' (rela<b>x</b>)<br />
            <coptic id="pee">Pp</coptic>='p' (<b>p</b>rince)<br />
            <coptic id="roo">Rr</coptic>='r' (laye<b>r</b>)<br />
            <coptic id="seema">Cc</coptic>='s' (ca<b>s</b>e)<br />
            <coptic id="tav">Tt</coptic>='t' (<b>t</b>able)<br />
            <coptic id="fee">Vv</coptic>='f' (<b>f</b>ade)<br />
            <coptic id="chi">,</coptic>='k' (ra<b>k</b>e)<br />
            <coptic id="epsee">"'</coptic>='ps' (pe<b>ps</b>i)<br />
            <coptic id="shy">Ss</coptic>='sh' (<b>sh</b>are)<br />
            <coptic id="fi">Ff</coptic>='f' (<b>f</b>ade)<br />
            <coptic id="khai">Qq</coptic>='kh' (no direct english equivalent)<br />
            <coptic id="hori">Hh</coptic>='h' (<b>h</b>air), usually very airy<br />
            <coptic id="janja">Jj</coptic>='dj' (garba<b>g</b>e)<br />
            <coptic id="cheema">&#123;</coptic>='ch' (<b>ch</b>air)<br />
            <coptic id="tea">&#125;</coptic>='ti' (<b>tea</b>)<br />
          <h2>Diacritical Marks</h2>
          <coptic id="jinkim">̀a</coptic> (called the 'jinkim') = adds an extra "eh" sound before the letter it is above (<coptic id="ef no tea">̀vnou]</coptic>)<br />
          <coptic id="overline">ⲁ̅</coptic> = indicates an abbreviation (<coptic id="eth oh ebb">ⲉⲑ̅ⲃ̅</coptic> is the same as <coptic id="eth oh ebb">eyouab</coptic>)<br />
          {/* <h2>Numbers & Numerals</h2>
          <coptic>0</coptic>=0 ()<br />
          <coptic>1</coptic>=1 ()<br />
          <coptic>2</coptic>=2 ()<br />
          <coptic>3</coptic>=3 ()<br />
          <coptic>4</coptic>=4 ()<br />
          <coptic>5</coptic>=5 ()<br />
          <coptic>6</coptic>=6 ()<br />
          <coptic>7</coptic>=7 ()<br />
          <coptic>8</coptic>=8 ()<br />
          <coptic id="nine">9</coptic>=9 ()<br /> 
        https://omniglot.com/language/numbers/coptic.htm */}
        </div>
        <div className="bottom">
          <a href="../quizzes/1-2.html">
            <button className="bQuiz">Start Quiz</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OneTwo;
