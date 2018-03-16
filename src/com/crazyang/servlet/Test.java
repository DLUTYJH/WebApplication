package com.crazyang.servlet;

import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;


class Student implements Serializable{
    public String name ;
    public int age ;
    public int score ;

    public Student(String name, int age, int score) {
        this.name = name;
        this.age = age;
        this.score = score;
    }
}

@WebServlet("/Test")
public class Test extends HttpServlet {


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Map<String,String> map = new HashMap<>();
        map.put("yourName","aa");
        map.put("yourName","bb");
        response.setContentType("application/json");
        request.setCharacterEncoding("utf-8");

        JSONObject json = new JSONObject(map);
        //out.print("{\"yourName\":\"" + "name" + "\",\"yourContent\":\""+"conten"+"\"}");
        response.getWriter().write(json.toString());
        response.getWriter().flush();
        response.getWriter().close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
