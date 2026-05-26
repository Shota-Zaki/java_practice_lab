window.JAVA_STUDY_SPLIT = window.JAVA_STUDY_SPLIT || {};
window.JAVA_STUDY_SPLIT['unit01'] = [
  {
    "id": "unit01-001",
    "number": 1,
    "title": "mainメソッドと起動引数 #1",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main red blue` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(args[0] + \":\" + args.length);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "red:1"
      },
      {
        "key": "B",
        "text": "blue:2"
      },
      {
        "key": "C",
        "text": "red:2"
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
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
      "points": [
        "正解：C：red:2",
        "正解になる理由：`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。red:1 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。blue:2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：起動引数にはクラス名は含まれません。`String[] args` と `String... args` はどちらも有効です。",
        "試験での注意：添字は0始まりですが、lengthは要素数です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "output"
    ]
  },
  {
    "id": "unit01-002",
    "number": 2,
    "title": "起動引数なし実行 #2",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String... args) {\n        System.out.println(args[0]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "null"
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
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`args` 自体は通常nullではありません。空配列として渡されます。",
        "試験での注意：nullと空配列を混同しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit01-003",
    "number": 3,
    "title": "publicクラスとファイル名 #3",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "`App.java` に次のコードを保存した場合の説明として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"run\");\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "runが表示される"
      },
      {
        "key": "B",
        "text": "Mainが表示される"
      },
      {
        "key": "C",
        "text": "実行時例外"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "何も表示されない"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。publicクラス名 `Main` とファイル名 `App.java` が一致していないためコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：publicクラス名 `Main` とファイル名 `App.java` が一致していないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。runが表示される は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Mainが表示される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：トップレベルpublicクラスはファイル名と一致する必要があります。",
        "試験での注意：この種の問題は実行結果ではなく、まずソースファイル規則で落ちます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "compile"
    ]
  },
  {
    "id": "unit01-004",
    "number": 4,
    "title": "小さい整数型の演算 #4",
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
    "id": "unit01-005",
    "number": 5,
    "title": "複合代入と暗黙キャスト #5",
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
    "id": "unit01-006",
    "number": 6,
    "title": "varの使用可能箇所 #6",
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
    "id": "unit01-007",
    "number": 7,
    "title": "varとnull #7",
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
    "id": "unit01-008",
    "number": 8,
    "title": "mainメソッドと起動引数 #8",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main red blue` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(args[0] + \":\" + args.length);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "red:1"
      },
      {
        "key": "B",
        "text": "blue:2"
      },
      {
        "key": "C",
        "text": "red:2"
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
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
      "points": [
        "正解：C：red:2",
        "正解になる理由：`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。red:1 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。blue:2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：起動引数にはクラス名は含まれません。`String[] args` と `String... args` はどちらも有効です。",
        "試験での注意：添字は0始まりですが、lengthは要素数です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "output"
    ]
  },
  {
    "id": "unit01-009",
    "number": 9,
    "title": "起動引数なし実行 #9",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String... args) {\n        System.out.println(args[0]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "null"
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
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`args` 自体は通常nullではありません。空配列として渡されます。",
        "試験での注意：nullと空配列を混同しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit01-010",
    "number": 10,
    "title": "publicクラスとファイル名 #10",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "`App.java` に次のコードを保存した場合の説明として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"run\");\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "runが表示される"
      },
      {
        "key": "B",
        "text": "Mainが表示される"
      },
      {
        "key": "C",
        "text": "実行時例外"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "何も表示されない"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。publicクラス名 `Main` とファイル名 `App.java` が一致していないためコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：publicクラス名 `Main` とファイル名 `App.java` が一致していないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。runが表示される は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Mainが表示される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：トップレベルpublicクラスはファイル名と一致する必要があります。",
        "試験での注意：この種の問題は実行結果ではなく、まずソースファイル規則で落ちます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "compile"
    ]
  },
  {
    "id": "unit01-011",
    "number": 11,
    "title": "小さい整数型の演算 #11",
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
    "id": "unit01-012",
    "number": 12,
    "title": "複合代入と暗黙キャスト #12",
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
    "id": "unit01-013",
    "number": 13,
    "title": "varの使用可能箇所 #13",
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
    "id": "unit01-014",
    "number": 14,
    "title": "varとnull #14",
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
    "id": "unit01-015",
    "number": 15,
    "title": "mainメソッドと起動引数 #15",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main red blue` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(args[0] + \":\" + args.length);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "red:1"
      },
      {
        "key": "B",
        "text": "blue:2"
      },
      {
        "key": "C",
        "text": "red:2"
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
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
      "points": [
        "正解：C：red:2",
        "正解になる理由：`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。red:1 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。blue:2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：起動引数にはクラス名は含まれません。`String[] args` と `String... args` はどちらも有効です。",
        "試験での注意：添字は0始まりですが、lengthは要素数です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "output"
    ]
  },
  {
    "id": "unit01-016",
    "number": 16,
    "title": "起動引数なし実行 #16",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String... args) {\n        System.out.println(args[0]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "null"
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
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`args` 自体は通常nullではありません。空配列として渡されます。",
        "試験での注意：nullと空配列を混同しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit01-017",
    "number": 17,
    "title": "publicクラスとファイル名 #17",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "`App.java` に次のコードを保存した場合の説明として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"run\");\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "runが表示される"
      },
      {
        "key": "B",
        "text": "Mainが表示される"
      },
      {
        "key": "C",
        "text": "実行時例外"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "何も表示されない"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。publicクラス名 `Main` とファイル名 `App.java` が一致していないためコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：publicクラス名 `Main` とファイル名 `App.java` が一致していないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。runが表示される は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Mainが表示される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：トップレベルpublicクラスはファイル名と一致する必要があります。",
        "試験での注意：この種の問題は実行結果ではなく、まずソースファイル規則で落ちます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "compile"
    ]
  },
  {
    "id": "unit01-018",
    "number": 18,
    "title": "小さい整数型の演算 #18",
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
    "id": "unit01-019",
    "number": 19,
    "title": "複合代入と暗黙キャスト #19",
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
    "id": "unit01-020",
    "number": 20,
    "title": "varの使用可能箇所 #20",
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
    "id": "unit01-021",
    "number": 21,
    "title": "varとnull #21",
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
    "id": "unit01-022",
    "number": 22,
    "title": "mainメソッドと起動引数 #22",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main red blue` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(args[0] + \":\" + args.length);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "red:1"
      },
      {
        "key": "B",
        "text": "blue:2"
      },
      {
        "key": "C",
        "text": "red:2"
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
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
      "points": [
        "正解：C：red:2",
        "正解になる理由：`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。red:1 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。blue:2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：起動引数にはクラス名は含まれません。`String[] args` と `String... args` はどちらも有効です。",
        "試験での注意：添字は0始まりですが、lengthは要素数です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "output"
    ]
  },
  {
    "id": "unit01-023",
    "number": 23,
    "title": "起動引数なし実行 #23",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String... args) {\n        System.out.println(args[0]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "null"
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
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`args` 自体は通常nullではありません。空配列として渡されます。",
        "試験での注意：nullと空配列を混同しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit01-024",
    "number": 24,
    "title": "publicクラスとファイル名 #24",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "`App.java` に次のコードを保存した場合の説明として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"run\");\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "runが表示される"
      },
      {
        "key": "B",
        "text": "Mainが表示される"
      },
      {
        "key": "C",
        "text": "実行時例外"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "何も表示されない"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。publicクラス名 `Main` とファイル名 `App.java` が一致していないためコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：publicクラス名 `Main` とファイル名 `App.java` が一致していないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。runが表示される は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Mainが表示される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：トップレベルpublicクラスはファイル名と一致する必要があります。",
        "試験での注意：この種の問題は実行結果ではなく、まずソースファイル規則で落ちます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "compile"
    ]
  },
  {
    "id": "unit01-025",
    "number": 25,
    "title": "小さい整数型の演算 #25",
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
    "id": "unit01-026",
    "number": 26,
    "title": "複合代入と暗黙キャスト #26",
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
    "id": "unit01-027",
    "number": 27,
    "title": "varの使用可能箇所 #27",
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
    "id": "unit01-028",
    "number": 28,
    "title": "varとnull #28",
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
    "id": "unit01-029",
    "number": 29,
    "title": "mainメソッドと起動引数 #29",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main red blue` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(args[0] + \":\" + args.length);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "red:1"
      },
      {
        "key": "B",
        "text": "blue:2"
      },
      {
        "key": "C",
        "text": "red:2"
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
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
      "points": [
        "正解：C：red:2",
        "正解になる理由：`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。red:1 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。blue:2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：起動引数にはクラス名は含まれません。`String[] args` と `String... args` はどちらも有効です。",
        "試験での注意：添字は0始まりですが、lengthは要素数です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "output"
    ]
  },
  {
    "id": "unit01-030",
    "number": 30,
    "title": "起動引数なし実行 #30",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String... args) {\n        System.out.println(args[0]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "null"
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
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`args` 自体は通常nullではありません。空配列として渡されます。",
        "試験での注意：nullと空配列を混同しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit01-031",
    "number": 31,
    "title": "publicクラスとファイル名 #31",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "`App.java` に次のコードを保存した場合の説明として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"run\");\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "runが表示される"
      },
      {
        "key": "B",
        "text": "Mainが表示される"
      },
      {
        "key": "C",
        "text": "実行時例外"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "何も表示されない"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。publicクラス名 `Main` とファイル名 `App.java` が一致していないためコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：publicクラス名 `Main` とファイル名 `App.java` が一致していないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。runが表示される は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Mainが表示される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：トップレベルpublicクラスはファイル名と一致する必要があります。",
        "試験での注意：この種の問題は実行結果ではなく、まずソースファイル規則で落ちます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "compile"
    ]
  },
  {
    "id": "unit01-032",
    "number": 32,
    "title": "小さい整数型の演算 #32",
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
    "id": "unit01-033",
    "number": 33,
    "title": "複合代入と暗黙キャスト #33",
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
  }
];
