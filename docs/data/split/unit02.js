window.JAVA_STUDY_SPLIT = window.JAVA_STUDY_SPLIT || {};
window.JAVA_STUDY_SPLIT['unit02'] = [
  {
    "id": "unit02-001",
    "number": 1,
    "title": "小さい整数型の演算 #1",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        short a = 10;\n        short b = 20;\n        short c = a + b;\n        System.out.println(c);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "1020"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
        "誤答選択肢が誤りである理由：Aは誤りです。30 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。1020 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：byte、short、charは演算時にintへ昇格します。",
        "試験での注意：定数式の代入と、変数を含む式の代入を区別してください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit02-002",
    "number": 2,
    "title": "複合代入と暗黙キャスト #2",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 2;\n        x += 3.5;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "5.5"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
      "points": [
        "正解：A：5",
        "正解になる理由：`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
        "誤答選択肢が誤りである理由：Bは誤りです。5.5 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。6 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：複合代入演算子は単純代入と完全に同じではありません。",
        "試験での注意：`x = x + 3.5` ならコンパイルエラーです。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "operator",
      "output"
    ]
  },
  {
    "id": "unit02-003",
    "number": 3,
    "title": "varの使用可能箇所 #3",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    var value = 10;\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "valueはObject型になる"
      },
      {
        "key": "C",
        "text": "10が表示される"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`var` はローカル変数の型推論専用です。フィールド宣言には使えません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`var` はローカル変数の型推論専用です。フィールド宣言には使えません。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。valueはObject型になる は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。10が表示される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：varは型名ではなく、コンパイラによるローカル変数の型推論です。",
        "試験での注意：フィールド、引数、戻り値型、catchパラメータには使えません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit02-004",
    "number": 4,
    "title": "varとnull #4",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムの説明として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        var x = null;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "nullが表示される"
      },
      {
        "key": "B",
        "text": "Object型になる"
      },
      {
        "key": "C",
        "text": "空文字が表示される"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`var x = null` では右辺から型を推論できないためコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`var x = null` では右辺から型を推論できないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。nullが表示される は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Object型になる は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。空文字が表示される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：varには初期化式が必要で、推論可能な型が必要です。",
        "試験での注意：null単独では型情報になりません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit02-005",
    "number": 5,
    "title": "Stringの不変性 #5",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcde\";\n        s.replace('c', 'X');\n        System.out.println(s);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "abXde"
      },
      {
        "key": "B",
        "text": "abcde"
      },
      {
        "key": "C",
        "text": "X"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
      "points": [
        "正解：B：abcde",
        "正解になる理由：Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
        "誤答選択肢が誤りである理由：Aは誤りです。abXde は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。X は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Stringの多くのメソッドは非破壊で、新しいStringを返します。",
        "試験での注意：戻り値を代入しているかを必ず確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "output"
    ]
  },
  {
    "id": "unit02-006",
    "number": 6,
    "title": "substringの範囲 #6",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcdef\";\n        System.out.println(s.substring(2, 5));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "cde"
      },
      {
        "key": "B",
        "text": "cdef"
      },
      {
        "key": "C",
        "text": "bcd"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`substring(2,5)` は開始添字2を含み、終了添字5を含みません。結果はcdeです。",
      "points": [
        "正解：A：cde",
        "正解になる理由：`substring(2,5)` は開始添字2を含み、終了添字5を含みません。結果はcdeです。",
        "誤答選択肢が誤りである理由：Bは誤りです。cdef は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。bcd は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Stringの添字は0始まりです。",
        "試験での注意：第2引数は「そこまで」ではなく「その直前まで」です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "output"
    ]
  },
  {
    "id": "unit02-007",
    "number": 7,
    "title": "Stringの==比較 #7",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String a = \"Java\";\n        String b = new String(\"Java\");\n        System.out.println(a == b);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "Java"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`new String(\"Java\")` は新しいインスタンスを作ります。`==` は参照の同一性を比較するためfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：`new String(\"Java\")` は新しいインスタンスを作ります。`==` は参照の同一性を比較するためfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Java は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：内容比較には `equals` を使います。",
        "試験での注意：文字列リテラルとnew Stringの参照は別物です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-008",
    "number": 8,
    "title": "internと文字列プール #8",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String a = \"Java\";\n        String b = new String(\"Java\").intern();\n        System.out.println(a == b);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "Java"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`intern()` は文字列プール上の同じ内容の参照を返します。リテラル `Java` と同一参照になります。",
      "points": [
        "正解：A：true",
        "正解になる理由：`intern()` は文字列プール上の同じ内容の参照を返します。リテラル `Java` と同一参照になります。",
        "誤答選択肢が誤りである理由：Bは誤りです。false は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Java は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：文字列プールは同じリテラルを共有します。",
        "試験での注意：`intern()` の有無で `==` の結果が変わります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-009",
    "number": 9,
    "title": "StringBuilderのequals #9",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuilder a = new StringBuilder(\"A\");\n        StringBuilder b = new StringBuilder(\"A\");\n        System.out.println(a.equals(b));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "A"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。A は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：StringのequalsとStringBuilderのequalsは同じではありません。",
        "試験での注意：「見た目の文字列が同じ」だけでtrueにしないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-010",
    "number": 10,
    "title": "参照の付け替え #10",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class Sample { int n; Sample(int n){ this.n = n; } }\npublic class Main {\n    public static void main(String[] args) {\n        Sample a = new Sample(1);\n        Sample b = a;\n        a = new Sample(1);\n        System.out.println(a == b);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：参照型変数にはオブジェクトそのものではなく参照が入ります。",
        "試験での注意：フィールド値が同じでも、同じインスタンスとは限りません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-011",
    "number": 11,
    "title": "recordのequals #11",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "record Sample(int n) {}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Sample(1).equals(new Sample(1)));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
      "points": [
        "正解：A：true",
        "正解になる理由：recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
        "誤答選択肢が誤りである理由：Bは誤りです。false は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：recordはequals、hashCode、toString、アクセサを自動生成します。",
        "試験での注意：通常クラスでequals未実装の場合とは結果が異なります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "class",
      "output"
    ]
  },
  {
    "id": "unit02-012",
    "number": 12,
    "title": "参照型配列の初期値 #12",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String[] a = new String[2];\n        System.out.println(a[0].length());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：プリミティブ配列と参照型配列では要素のデフォルト値が異なります。",
        "試験での注意：配列インスタンスがあることと、各要素にオブジェクトが入っていることは別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit02-013",
    "number": 13,
    "title": "多次元配列の未初期化部分 #13",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = new int[2][];\n        a[0] = new int[]{1, 2};\n        System.out.println(a[0].length + \":\" + a[1]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "2:0"
      },
      {
        "key": "B",
        "text": "2:null"
      },
      {
        "key": "C",
        "text": "0:null"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
      "points": [
        "正解：B：2:null",
        "正解になる理由：`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
        "誤答選択肢が誤りである理由：Aは誤りです。2:0 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0:null は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Javaの多次元配列は配列の配列です。",
        "試験での注意：2次元目の配列が自動生成される形とされない形を区別します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-014",
    "number": 14,
    "title": "ArrayListのremove #14",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        list.add(1); list.add(2); list.add(3);\n        list.remove(1);\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[1, 3]"
      },
      {
        "key": "B",
        "text": "[2, 3]"
      },
      {
        "key": "C",
        "text": "[1, 2]"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
      "points": [
        "正解：A：[1, 3]",
        "正解になる理由：`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
        "誤答選択肢が誤りである理由：Bは誤りです。[2, 3] は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。[1, 2] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：ArrayListには `remove(int index)` と `remove(Object o)` があります。",
        "試験での注意：Integerリストではremoveのオーバーロード解決が狙われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "output"
    ]
  },
  {
    "id": "unit02-015",
    "number": 15,
    "title": "List.ofの変更不可 #15",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = List.of(\"A\", \"B\");\n        list.add(\"C\");\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[A, B, C]"
      },
      {
        "key": "B",
        "text": "[A, B]"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。`List.of` が返すリストは変更不可です。`add` 呼び出しはコンパイルできますが実行時例外になります。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：`List.of` が返すリストは変更不可です。`add` 呼び出しはコンパイルできますが実行時例外になります。",
        "誤答選択肢が誤りである理由：Aは誤りです。[A, B, C] は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。[A, B] は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。C は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：不変コレクションはメソッドが存在しても変更操作で失敗します。",
        "試験での注意：コンパイルエラーではなく実行時例外です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit02-016",
    "number": 16,
    "title": "前置後置インクリメント #16",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 1;\n        System.out.println(x++ + ++x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
      "points": [
        "正解：B：4",
        "正解になる理由：`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
        "誤答選択肢が誤りである理由：Aは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。5 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：後置は使用後に増加、前置は増加後に使用です。",
        "試験での注意：最終的なxの値と、式に使われる値は別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "output"
    ]
  },
  {
    "id": "unit02-017",
    "number": 17,
    "title": "小さい整数型の演算 #17",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        short a = 10;\n        short b = 20;\n        short c = a + b;\n        System.out.println(c);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "1020"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
        "誤答選択肢が誤りである理由：Aは誤りです。30 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。1020 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：byte、short、charは演算時にintへ昇格します。",
        "試験での注意：定数式の代入と、変数を含む式の代入を区別してください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit02-018",
    "number": 18,
    "title": "複合代入と暗黙キャスト #18",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 2;\n        x += 3.5;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "5.5"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
      "points": [
        "正解：A：5",
        "正解になる理由：`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
        "誤答選択肢が誤りである理由：Bは誤りです。5.5 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。6 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：複合代入演算子は単純代入と完全に同じではありません。",
        "試験での注意：`x = x + 3.5` ならコンパイルエラーです。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "operator",
      "output"
    ]
  },
  {
    "id": "unit02-019",
    "number": 19,
    "title": "varの使用可能箇所 #19",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    var value = 10;\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "valueはObject型になる"
      },
      {
        "key": "C",
        "text": "10が表示される"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`var` はローカル変数の型推論専用です。フィールド宣言には使えません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`var` はローカル変数の型推論専用です。フィールド宣言には使えません。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。valueはObject型になる は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。10が表示される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：varは型名ではなく、コンパイラによるローカル変数の型推論です。",
        "試験での注意：フィールド、引数、戻り値型、catchパラメータには使えません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit02-020",
    "number": 20,
    "title": "varとnull #20",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムの説明として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        var x = null;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "nullが表示される"
      },
      {
        "key": "B",
        "text": "Object型になる"
      },
      {
        "key": "C",
        "text": "空文字が表示される"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`var x = null` では右辺から型を推論できないためコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`var x = null` では右辺から型を推論できないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。nullが表示される は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Object型になる は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。空文字が表示される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：varには初期化式が必要で、推論可能な型が必要です。",
        "試験での注意：null単独では型情報になりません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit02-021",
    "number": 21,
    "title": "Stringの不変性 #21",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcde\";\n        s.replace('c', 'X');\n        System.out.println(s);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "abXde"
      },
      {
        "key": "B",
        "text": "abcde"
      },
      {
        "key": "C",
        "text": "X"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
      "points": [
        "正解：B：abcde",
        "正解になる理由：Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
        "誤答選択肢が誤りである理由：Aは誤りです。abXde は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。X は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Stringの多くのメソッドは非破壊で、新しいStringを返します。",
        "試験での注意：戻り値を代入しているかを必ず確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "output"
    ]
  },
  {
    "id": "unit02-022",
    "number": 22,
    "title": "substringの範囲 #22",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcdef\";\n        System.out.println(s.substring(2, 5));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "cde"
      },
      {
        "key": "B",
        "text": "cdef"
      },
      {
        "key": "C",
        "text": "bcd"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`substring(2,5)` は開始添字2を含み、終了添字5を含みません。結果はcdeです。",
      "points": [
        "正解：A：cde",
        "正解になる理由：`substring(2,5)` は開始添字2を含み、終了添字5を含みません。結果はcdeです。",
        "誤答選択肢が誤りである理由：Bは誤りです。cdef は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。bcd は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Stringの添字は0始まりです。",
        "試験での注意：第2引数は「そこまで」ではなく「その直前まで」です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "output"
    ]
  },
  {
    "id": "unit02-023",
    "number": 23,
    "title": "Stringの==比較 #23",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String a = \"Java\";\n        String b = new String(\"Java\");\n        System.out.println(a == b);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "Java"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`new String(\"Java\")` は新しいインスタンスを作ります。`==` は参照の同一性を比較するためfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：`new String(\"Java\")` は新しいインスタンスを作ります。`==` は参照の同一性を比較するためfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Java は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：内容比較には `equals` を使います。",
        "試験での注意：文字列リテラルとnew Stringの参照は別物です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-024",
    "number": 24,
    "title": "internと文字列プール #24",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String a = \"Java\";\n        String b = new String(\"Java\").intern();\n        System.out.println(a == b);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "Java"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`intern()` は文字列プール上の同じ内容の参照を返します。リテラル `Java` と同一参照になります。",
      "points": [
        "正解：A：true",
        "正解になる理由：`intern()` は文字列プール上の同じ内容の参照を返します。リテラル `Java` と同一参照になります。",
        "誤答選択肢が誤りである理由：Bは誤りです。false は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Java は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：文字列プールは同じリテラルを共有します。",
        "試験での注意：`intern()` の有無で `==` の結果が変わります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-025",
    "number": 25,
    "title": "StringBuilderのequals #25",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuilder a = new StringBuilder(\"A\");\n        StringBuilder b = new StringBuilder(\"A\");\n        System.out.println(a.equals(b));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "A"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。A は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：StringのequalsとStringBuilderのequalsは同じではありません。",
        "試験での注意：「見た目の文字列が同じ」だけでtrueにしないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-026",
    "number": 26,
    "title": "参照の付け替え #26",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class Sample { int n; Sample(int n){ this.n = n; } }\npublic class Main {\n    public static void main(String[] args) {\n        Sample a = new Sample(1);\n        Sample b = a;\n        a = new Sample(1);\n        System.out.println(a == b);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：参照型変数にはオブジェクトそのものではなく参照が入ります。",
        "試験での注意：フィールド値が同じでも、同じインスタンスとは限りません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-027",
    "number": 27,
    "title": "recordのequals #27",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "record Sample(int n) {}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Sample(1).equals(new Sample(1)));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
      "points": [
        "正解：A：true",
        "正解になる理由：recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
        "誤答選択肢が誤りである理由：Bは誤りです。false は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：recordはequals、hashCode、toString、アクセサを自動生成します。",
        "試験での注意：通常クラスでequals未実装の場合とは結果が異なります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "class",
      "output"
    ]
  },
  {
    "id": "unit02-028",
    "number": 28,
    "title": "参照型配列の初期値 #28",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String[] a = new String[2];\n        System.out.println(a[0].length());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：プリミティブ配列と参照型配列では要素のデフォルト値が異なります。",
        "試験での注意：配列インスタンスがあることと、各要素にオブジェクトが入っていることは別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit02-029",
    "number": 29,
    "title": "多次元配列の未初期化部分 #29",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = new int[2][];\n        a[0] = new int[]{1, 2};\n        System.out.println(a[0].length + \":\" + a[1]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "2:0"
      },
      {
        "key": "B",
        "text": "2:null"
      },
      {
        "key": "C",
        "text": "0:null"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
      "points": [
        "正解：B：2:null",
        "正解になる理由：`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
        "誤答選択肢が誤りである理由：Aは誤りです。2:0 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0:null は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Javaの多次元配列は配列の配列です。",
        "試験での注意：2次元目の配列が自動生成される形とされない形を区別します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-030",
    "number": 30,
    "title": "ArrayListのremove #30",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        list.add(1); list.add(2); list.add(3);\n        list.remove(1);\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[1, 3]"
      },
      {
        "key": "B",
        "text": "[2, 3]"
      },
      {
        "key": "C",
        "text": "[1, 2]"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
      "points": [
        "正解：A：[1, 3]",
        "正解になる理由：`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
        "誤答選択肢が誤りである理由：Bは誤りです。[2, 3] は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。[1, 2] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：ArrayListには `remove(int index)` と `remove(Object o)` があります。",
        "試験での注意：Integerリストではremoveのオーバーロード解決が狙われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "output"
    ]
  },
  {
    "id": "unit02-031",
    "number": 31,
    "title": "List.ofの変更不可 #31",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = List.of(\"A\", \"B\");\n        list.add(\"C\");\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[A, B, C]"
      },
      {
        "key": "B",
        "text": "[A, B]"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。`List.of` が返すリストは変更不可です。`add` 呼び出しはコンパイルできますが実行時例外になります。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：`List.of` が返すリストは変更不可です。`add` 呼び出しはコンパイルできますが実行時例外になります。",
        "誤答選択肢が誤りである理由：Aは誤りです。[A, B, C] は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。[A, B] は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。C は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：不変コレクションはメソッドが存在しても変更操作で失敗します。",
        "試験での注意：コンパイルエラーではなく実行時例外です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit02-032",
    "number": 32,
    "title": "前置後置インクリメント #32",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 1;\n        System.out.println(x++ + ++x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
      "points": [
        "正解：B：4",
        "正解になる理由：`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
        "誤答選択肢が誤りである理由：Aは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。5 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：後置は使用後に増加、前置は増加後に使用です。",
        "試験での注意：最終的なxの値と、式に使われる値は別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "output"
    ]
  },
  {
    "id": "unit02-033",
    "number": 33,
    "title": "小さい整数型の演算 #33",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        short a = 10;\n        short b = 20;\n        short c = a + b;\n        System.out.println(c);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "1020"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
        "誤答選択肢が誤りである理由：Aは誤りです。30 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。1020 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：byte、short、charは演算時にintへ昇格します。",
        "試験での注意：定数式の代入と、変数を含む式の代入を区別してください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit02-034",
    "number": 34,
    "title": "複合代入と暗黙キャスト #34",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 2;\n        x += 3.5;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "5.5"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
      "points": [
        "正解：A：5",
        "正解になる理由：`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
        "誤答選択肢が誤りである理由：Bは誤りです。5.5 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。6 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：複合代入演算子は単純代入と完全に同じではありません。",
        "試験での注意：`x = x + 3.5` ならコンパイルエラーです。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "operator",
      "output"
    ]
  },
  {
    "id": "unit02-035",
    "number": 35,
    "title": "varの使用可能箇所 #35",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    var value = 10;\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "valueはObject型になる"
      },
      {
        "key": "C",
        "text": "10が表示される"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`var` はローカル変数の型推論専用です。フィールド宣言には使えません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`var` はローカル変数の型推論専用です。フィールド宣言には使えません。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。valueはObject型になる は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。10が表示される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：varは型名ではなく、コンパイラによるローカル変数の型推論です。",
        "試験での注意：フィールド、引数、戻り値型、catchパラメータには使えません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit02-036",
    "number": 36,
    "title": "varとnull #36",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムの説明として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        var x = null;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "nullが表示される"
      },
      {
        "key": "B",
        "text": "Object型になる"
      },
      {
        "key": "C",
        "text": "空文字が表示される"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`var x = null` では右辺から型を推論できないためコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`var x = null` では右辺から型を推論できないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。nullが表示される は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Object型になる は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。空文字が表示される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：varには初期化式が必要で、推論可能な型が必要です。",
        "試験での注意：null単独では型情報になりません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit02-037",
    "number": 37,
    "title": "Stringの不変性 #37",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcde\";\n        s.replace('c', 'X');\n        System.out.println(s);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "abXde"
      },
      {
        "key": "B",
        "text": "abcde"
      },
      {
        "key": "C",
        "text": "X"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
      "points": [
        "正解：B：abcde",
        "正解になる理由：Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
        "誤答選択肢が誤りである理由：Aは誤りです。abXde は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。X は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Stringの多くのメソッドは非破壊で、新しいStringを返します。",
        "試験での注意：戻り値を代入しているかを必ず確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "output"
    ]
  },
  {
    "id": "unit02-038",
    "number": 38,
    "title": "substringの範囲 #38",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcdef\";\n        System.out.println(s.substring(2, 5));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "cde"
      },
      {
        "key": "B",
        "text": "cdef"
      },
      {
        "key": "C",
        "text": "bcd"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`substring(2,5)` は開始添字2を含み、終了添字5を含みません。結果はcdeです。",
      "points": [
        "正解：A：cde",
        "正解になる理由：`substring(2,5)` は開始添字2を含み、終了添字5を含みません。結果はcdeです。",
        "誤答選択肢が誤りである理由：Bは誤りです。cdef は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。bcd は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Stringの添字は0始まりです。",
        "試験での注意：第2引数は「そこまで」ではなく「その直前まで」です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "output"
    ]
  },
  {
    "id": "unit02-039",
    "number": 39,
    "title": "Stringの==比較 #39",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String a = \"Java\";\n        String b = new String(\"Java\");\n        System.out.println(a == b);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "Java"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`new String(\"Java\")` は新しいインスタンスを作ります。`==` は参照の同一性を比較するためfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：`new String(\"Java\")` は新しいインスタンスを作ります。`==` は参照の同一性を比較するためfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Java は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：内容比較には `equals` を使います。",
        "試験での注意：文字列リテラルとnew Stringの参照は別物です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-040",
    "number": 40,
    "title": "internと文字列プール #40",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String a = \"Java\";\n        String b = new String(\"Java\").intern();\n        System.out.println(a == b);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "Java"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`intern()` は文字列プール上の同じ内容の参照を返します。リテラル `Java` と同一参照になります。",
      "points": [
        "正解：A：true",
        "正解になる理由：`intern()` は文字列プール上の同じ内容の参照を返します。リテラル `Java` と同一参照になります。",
        "誤答選択肢が誤りである理由：Bは誤りです。false は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Java は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：文字列プールは同じリテラルを共有します。",
        "試験での注意：`intern()` の有無で `==` の結果が変わります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-041",
    "number": 41,
    "title": "StringBuilderのequals #41",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuilder a = new StringBuilder(\"A\");\n        StringBuilder b = new StringBuilder(\"A\");\n        System.out.println(a.equals(b));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "A"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。A は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：StringのequalsとStringBuilderのequalsは同じではありません。",
        "試験での注意：「見た目の文字列が同じ」だけでtrueにしないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-042",
    "number": 42,
    "title": "参照の付け替え #42",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class Sample { int n; Sample(int n){ this.n = n; } }\npublic class Main {\n    public static void main(String[] args) {\n        Sample a = new Sample(1);\n        Sample b = a;\n        a = new Sample(1);\n        System.out.println(a == b);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：参照型変数にはオブジェクトそのものではなく参照が入ります。",
        "試験での注意：フィールド値が同じでも、同じインスタンスとは限りません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-043",
    "number": 43,
    "title": "recordのequals #43",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "record Sample(int n) {}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Sample(1).equals(new Sample(1)));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
      "points": [
        "正解：A：true",
        "正解になる理由：recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
        "誤答選択肢が誤りである理由：Bは誤りです。false は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：recordはequals、hashCode、toString、アクセサを自動生成します。",
        "試験での注意：通常クラスでequals未実装の場合とは結果が異なります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "class",
      "output"
    ]
  },
  {
    "id": "unit02-044",
    "number": 44,
    "title": "参照型配列の初期値 #44",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String[] a = new String[2];\n        System.out.println(a[0].length());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：プリミティブ配列と参照型配列では要素のデフォルト値が異なります。",
        "試験での注意：配列インスタンスがあることと、各要素にオブジェクトが入っていることは別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit02-045",
    "number": 45,
    "title": "多次元配列の未初期化部分 #45",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = new int[2][];\n        a[0] = new int[]{1, 2};\n        System.out.println(a[0].length + \":\" + a[1]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "2:0"
      },
      {
        "key": "B",
        "text": "2:null"
      },
      {
        "key": "C",
        "text": "0:null"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
      "points": [
        "正解：B：2:null",
        "正解になる理由：`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
        "誤答選択肢が誤りである理由：Aは誤りです。2:0 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0:null は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Javaの多次元配列は配列の配列です。",
        "試験での注意：2次元目の配列が自動生成される形とされない形を区別します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-046",
    "number": 46,
    "title": "ArrayListのremove #46",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        list.add(1); list.add(2); list.add(3);\n        list.remove(1);\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[1, 3]"
      },
      {
        "key": "B",
        "text": "[2, 3]"
      },
      {
        "key": "C",
        "text": "[1, 2]"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
      "points": [
        "正解：A：[1, 3]",
        "正解になる理由：`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
        "誤答選択肢が誤りである理由：Bは誤りです。[2, 3] は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。[1, 2] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：ArrayListには `remove(int index)` と `remove(Object o)` があります。",
        "試験での注意：Integerリストではremoveのオーバーロード解決が狙われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "output"
    ]
  },
  {
    "id": "unit02-047",
    "number": 47,
    "title": "List.ofの変更不可 #47",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = List.of(\"A\", \"B\");\n        list.add(\"C\");\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[A, B, C]"
      },
      {
        "key": "B",
        "text": "[A, B]"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。`List.of` が返すリストは変更不可です。`add` 呼び出しはコンパイルできますが実行時例外になります。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：`List.of` が返すリストは変更不可です。`add` 呼び出しはコンパイルできますが実行時例外になります。",
        "誤答選択肢が誤りである理由：Aは誤りです。[A, B, C] は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。[A, B] は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。C は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：不変コレクションはメソッドが存在しても変更操作で失敗します。",
        "試験での注意：コンパイルエラーではなく実行時例外です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit02-048",
    "number": 48,
    "title": "前置後置インクリメント #48",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 1;\n        System.out.println(x++ + ++x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
      "points": [
        "正解：B：4",
        "正解になる理由：`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
        "誤答選択肢が誤りである理由：Aは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。5 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：後置は使用後に増加、前置は増加後に使用です。",
        "試験での注意：最終的なxの値と、式に使われる値は別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "output"
    ]
  },
  {
    "id": "unit02-049",
    "number": 49,
    "title": "小さい整数型の演算 #49",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        short a = 10;\n        short b = 20;\n        short c = a + b;\n        System.out.println(c);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "1020"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
        "誤答選択肢が誤りである理由：Aは誤りです。30 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。1020 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：byte、short、charは演算時にintへ昇格します。",
        "試験での注意：定数式の代入と、変数を含む式の代入を区別してください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit02-050",
    "number": 50,
    "title": "複合代入と暗黙キャスト #50",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 2;\n        x += 3.5;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "5.5"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
      "points": [
        "正解：A：5",
        "正解になる理由：`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
        "誤答選択肢が誤りである理由：Bは誤りです。5.5 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。6 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：複合代入演算子は単純代入と完全に同じではありません。",
        "試験での注意：`x = x + 3.5` ならコンパイルエラーです。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "operator",
      "output"
    ]
  },
  {
    "id": "unit02-051",
    "number": 51,
    "title": "varの使用可能箇所 #51",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    var value = 10;\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "valueはObject型になる"
      },
      {
        "key": "C",
        "text": "10が表示される"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`var` はローカル変数の型推論専用です。フィールド宣言には使えません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`var` はローカル変数の型推論専用です。フィールド宣言には使えません。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。valueはObject型になる は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。10が表示される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：varは型名ではなく、コンパイラによるローカル変数の型推論です。",
        "試験での注意：フィールド、引数、戻り値型、catchパラメータには使えません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit02-052",
    "number": 52,
    "title": "varとnull #52",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムの説明として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        var x = null;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "nullが表示される"
      },
      {
        "key": "B",
        "text": "Object型になる"
      },
      {
        "key": "C",
        "text": "空文字が表示される"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`var x = null` では右辺から型を推論できないためコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`var x = null` では右辺から型を推論できないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。nullが表示される は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Object型になる は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。空文字が表示される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：varには初期化式が必要で、推論可能な型が必要です。",
        "試験での注意：null単独では型情報になりません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit02-053",
    "number": 53,
    "title": "Stringの不変性 #53",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcde\";\n        s.replace('c', 'X');\n        System.out.println(s);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "abXde"
      },
      {
        "key": "B",
        "text": "abcde"
      },
      {
        "key": "C",
        "text": "X"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
      "points": [
        "正解：B：abcde",
        "正解になる理由：Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
        "誤答選択肢が誤りである理由：Aは誤りです。abXde は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。X は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Stringの多くのメソッドは非破壊で、新しいStringを返します。",
        "試験での注意：戻り値を代入しているかを必ず確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "output"
    ]
  },
  {
    "id": "unit02-054",
    "number": 54,
    "title": "substringの範囲 #54",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcdef\";\n        System.out.println(s.substring(2, 5));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "cde"
      },
      {
        "key": "B",
        "text": "cdef"
      },
      {
        "key": "C",
        "text": "bcd"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`substring(2,5)` は開始添字2を含み、終了添字5を含みません。結果はcdeです。",
      "points": [
        "正解：A：cde",
        "正解になる理由：`substring(2,5)` は開始添字2を含み、終了添字5を含みません。結果はcdeです。",
        "誤答選択肢が誤りである理由：Bは誤りです。cdef は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。bcd は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Stringの添字は0始まりです。",
        "試験での注意：第2引数は「そこまで」ではなく「その直前まで」です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "output"
    ]
  },
  {
    "id": "unit02-055",
    "number": 55,
    "title": "Stringの==比較 #55",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String a = \"Java\";\n        String b = new String(\"Java\");\n        System.out.println(a == b);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "Java"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`new String(\"Java\")` は新しいインスタンスを作ります。`==` は参照の同一性を比較するためfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：`new String(\"Java\")` は新しいインスタンスを作ります。`==` は参照の同一性を比較するためfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Java は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：内容比較には `equals` を使います。",
        "試験での注意：文字列リテラルとnew Stringの参照は別物です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-056",
    "number": 56,
    "title": "internと文字列プール #56",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String a = \"Java\";\n        String b = new String(\"Java\").intern();\n        System.out.println(a == b);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "Java"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`intern()` は文字列プール上の同じ内容の参照を返します。リテラル `Java` と同一参照になります。",
      "points": [
        "正解：A：true",
        "正解になる理由：`intern()` は文字列プール上の同じ内容の参照を返します。リテラル `Java` と同一参照になります。",
        "誤答選択肢が誤りである理由：Bは誤りです。false は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Java は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：文字列プールは同じリテラルを共有します。",
        "試験での注意：`intern()` の有無で `==` の結果が変わります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-057",
    "number": 57,
    "title": "StringBuilderのequals #57",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuilder a = new StringBuilder(\"A\");\n        StringBuilder b = new StringBuilder(\"A\");\n        System.out.println(a.equals(b));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "A"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。A は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：StringのequalsとStringBuilderのequalsは同じではありません。",
        "試験での注意：「見た目の文字列が同じ」だけでtrueにしないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-058",
    "number": 58,
    "title": "参照の付け替え #58",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class Sample { int n; Sample(int n){ this.n = n; } }\npublic class Main {\n    public static void main(String[] args) {\n        Sample a = new Sample(1);\n        Sample b = a;\n        a = new Sample(1);\n        System.out.println(a == b);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：参照型変数にはオブジェクトそのものではなく参照が入ります。",
        "試験での注意：フィールド値が同じでも、同じインスタンスとは限りません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-059",
    "number": 59,
    "title": "recordのequals #59",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "record Sample(int n) {}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Sample(1).equals(new Sample(1)));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
      "points": [
        "正解：A：true",
        "正解になる理由：recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
        "誤答選択肢が誤りである理由：Bは誤りです。false は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：recordはequals、hashCode、toString、アクセサを自動生成します。",
        "試験での注意：通常クラスでequals未実装の場合とは結果が異なります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "class",
      "output"
    ]
  },
  {
    "id": "unit02-060",
    "number": 60,
    "title": "参照型配列の初期値 #60",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String[] a = new String[2];\n        System.out.println(a[0].length());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：プリミティブ配列と参照型配列では要素のデフォルト値が異なります。",
        "試験での注意：配列インスタンスがあることと、各要素にオブジェクトが入っていることは別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit02-061",
    "number": 61,
    "title": "多次元配列の未初期化部分 #61",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = new int[2][];\n        a[0] = new int[]{1, 2};\n        System.out.println(a[0].length + \":\" + a[1]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "2:0"
      },
      {
        "key": "B",
        "text": "2:null"
      },
      {
        "key": "C",
        "text": "0:null"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
      "points": [
        "正解：B：2:null",
        "正解になる理由：`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
        "誤答選択肢が誤りである理由：Aは誤りです。2:0 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0:null は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Javaの多次元配列は配列の配列です。",
        "試験での注意：2次元目の配列が自動生成される形とされない形を区別します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-062",
    "number": 62,
    "title": "ArrayListのremove #62",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        list.add(1); list.add(2); list.add(3);\n        list.remove(1);\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[1, 3]"
      },
      {
        "key": "B",
        "text": "[2, 3]"
      },
      {
        "key": "C",
        "text": "[1, 2]"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
      "points": [
        "正解：A：[1, 3]",
        "正解になる理由：`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
        "誤答選択肢が誤りである理由：Bは誤りです。[2, 3] は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。[1, 2] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：ArrayListには `remove(int index)` と `remove(Object o)` があります。",
        "試験での注意：Integerリストではremoveのオーバーロード解決が狙われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "output"
    ]
  },
  {
    "id": "unit02-063",
    "number": 63,
    "title": "List.ofの変更不可 #63",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = List.of(\"A\", \"B\");\n        list.add(\"C\");\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[A, B, C]"
      },
      {
        "key": "B",
        "text": "[A, B]"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。`List.of` が返すリストは変更不可です。`add` 呼び出しはコンパイルできますが実行時例外になります。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：`List.of` が返すリストは変更不可です。`add` 呼び出しはコンパイルできますが実行時例外になります。",
        "誤答選択肢が誤りである理由：Aは誤りです。[A, B, C] は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。[A, B] は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。C は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：不変コレクションはメソッドが存在しても変更操作で失敗します。",
        "試験での注意：コンパイルエラーではなく実行時例外です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit02-064",
    "number": 64,
    "title": "前置後置インクリメント #64",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 1;\n        System.out.println(x++ + ++x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
      "points": [
        "正解：B：4",
        "正解になる理由：`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
        "誤答選択肢が誤りである理由：Aは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。5 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：後置は使用後に増加、前置は増加後に使用です。",
        "試験での注意：最終的なxの値と、式に使われる値は別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "output"
    ]
  },
  {
    "id": "unit02-065",
    "number": 65,
    "title": "小さい整数型の演算 #65",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        short a = 10;\n        short b = 20;\n        short c = a + b;\n        System.out.println(c);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "1020"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
        "誤答選択肢が誤りである理由：Aは誤りです。30 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。1020 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：byte、short、charは演算時にintへ昇格します。",
        "試験での注意：定数式の代入と、変数を含む式の代入を区別してください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit02-066",
    "number": 66,
    "title": "複合代入と暗黙キャスト #66",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 2;\n        x += 3.5;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "5.5"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
      "points": [
        "正解：A：5",
        "正解になる理由：`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
        "誤答選択肢が誤りである理由：Bは誤りです。5.5 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。6 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：複合代入演算子は単純代入と完全に同じではありません。",
        "試験での注意：`x = x + 3.5` ならコンパイルエラーです。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "operator",
      "output"
    ]
  },
  {
    "id": "unit02-067",
    "number": 67,
    "title": "varの使用可能箇所 #67",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    var value = 10;\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "valueはObject型になる"
      },
      {
        "key": "C",
        "text": "10が表示される"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`var` はローカル変数の型推論専用です。フィールド宣言には使えません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`var` はローカル変数の型推論専用です。フィールド宣言には使えません。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。valueはObject型になる は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。10が表示される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：varは型名ではなく、コンパイラによるローカル変数の型推論です。",
        "試験での注意：フィールド、引数、戻り値型、catchパラメータには使えません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit02-068",
    "number": 68,
    "title": "varとnull #68",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムの説明として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        var x = null;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "nullが表示される"
      },
      {
        "key": "B",
        "text": "Object型になる"
      },
      {
        "key": "C",
        "text": "空文字が表示される"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`var x = null` では右辺から型を推論できないためコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`var x = null` では右辺から型を推論できないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。nullが表示される は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Object型になる は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。空文字が表示される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：varには初期化式が必要で、推論可能な型が必要です。",
        "試験での注意：null単独では型情報になりません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit02-069",
    "number": 69,
    "title": "Stringの不変性 #69",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcde\";\n        s.replace('c', 'X');\n        System.out.println(s);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "abXde"
      },
      {
        "key": "B",
        "text": "abcde"
      },
      {
        "key": "C",
        "text": "X"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
      "points": [
        "正解：B：abcde",
        "正解になる理由：Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
        "誤答選択肢が誤りである理由：Aは誤りです。abXde は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。X は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Stringの多くのメソッドは非破壊で、新しいStringを返します。",
        "試験での注意：戻り値を代入しているかを必ず確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "output"
    ]
  },
  {
    "id": "unit02-070",
    "number": 70,
    "title": "substringの範囲 #70",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcdef\";\n        System.out.println(s.substring(2, 5));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "cde"
      },
      {
        "key": "B",
        "text": "cdef"
      },
      {
        "key": "C",
        "text": "bcd"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`substring(2,5)` は開始添字2を含み、終了添字5を含みません。結果はcdeです。",
      "points": [
        "正解：A：cde",
        "正解になる理由：`substring(2,5)` は開始添字2を含み、終了添字5を含みません。結果はcdeです。",
        "誤答選択肢が誤りである理由：Bは誤りです。cdef は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。bcd は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Stringの添字は0始まりです。",
        "試験での注意：第2引数は「そこまで」ではなく「その直前まで」です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "output"
    ]
  },
  {
    "id": "unit02-071",
    "number": 71,
    "title": "Stringの==比較 #71",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String a = \"Java\";\n        String b = new String(\"Java\");\n        System.out.println(a == b);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "Java"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`new String(\"Java\")` は新しいインスタンスを作ります。`==` は参照の同一性を比較するためfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：`new String(\"Java\")` は新しいインスタンスを作ります。`==` は参照の同一性を比較するためfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Java は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：内容比較には `equals` を使います。",
        "試験での注意：文字列リテラルとnew Stringの参照は別物です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit02-072",
    "number": 72,
    "title": "internと文字列プール #72",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String a = \"Java\";\n        String b = new String(\"Java\").intern();\n        System.out.println(a == b);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "Java"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`intern()` は文字列プール上の同じ内容の参照を返します。リテラル `Java` と同一参照になります。",
      "points": [
        "正解：A：true",
        "正解になる理由：`intern()` は文字列プール上の同じ内容の参照を返します。リテラル `Java` と同一参照になります。",
        "誤答選択肢が誤りである理由：Bは誤りです。false は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Java は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：文字列プールは同じリテラルを共有します。",
        "試験での注意：`intern()` の有無で `==` の結果が変わります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  }
];
