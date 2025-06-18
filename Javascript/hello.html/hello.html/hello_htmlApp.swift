//
//  hello_htmlApp.swift
//  hello.html
//
//  Created by Hritish on 28/05/25.
//

import SwiftUI

@main
struct hello_htmlApp: App {
    var body: some Scene {
        DocumentGroup(newDocument: hello_htmlDocument()) { file in
            ContentView(document: file.$document)
        }
    }
}
